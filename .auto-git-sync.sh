#!/bin/zsh

set -u

export HOME="/Users/gaeun"
export GIT_TERMINAL_PROMPT=0

repo_dir="/Users/gaeun/Projects/mini_project"
log_file="/Users/gaeun/Library/Logs/mini-project-auto-git-sync.log"

timestamp() {
  /bin/date '+%Y-%m-%d %H:%M:%S'
}

log() {
  /bin/echo "[$(timestamp)] $1" >> "$log_file"
}

# macOS powerd keeps this assertion while the display is on. If it is absent,
# the display is off (or transitioning), so this scheduled run is skipped.
if ! /usr/bin/pmset -g assertions | /usr/bin/grep -Fq 'Powerd - Prevent sleep while display is on'; then
  log "Skipped: display is off"
  exit 0
fi

cd "$repo_dir" || {
  log "Failed: repository directory is unavailable"
  exit 1
}

if ! /usr/bin/git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  log "Failed: directory is not a Git repository"
  exit 1
fi

if ! /usr/bin/git remote get-url origin >/dev/null 2>&1; then
  log "Skipped: GitHub remote is not connected"
  exit 0
fi

# Commit only after work has remained unchanged for at least ten minutes.
# The LaunchAgent checks this condition once a minute.
if [[ -z "$(/usr/bin/git status --porcelain)" ]]; then
  if /usr/bin/git rev-parse --verify '@{upstream}' >/dev/null 2>&1 &&
     [[ "$(/usr/bin/git rev-list --count '@{upstream}..HEAD')" -gt 0 ]]; then
    if /usr/bin/git push origin HEAD >> "$log_file" 2>&1; then
      log "Pushed pending commits successfully"
      exit 0
    fi
    log "Failed: pending commit push"
    exit 1
  fi
  log "No changes"
  exit 0
fi

latest_change=$(/usr/bin/find "$repo_dir" -type f -not -path "$repo_dir/.git/*" -exec /usr/bin/stat -f '%m' {} + | /usr/bin/sort -nr | /usr/bin/head -n 1)
now=$(/bin/date '+%s')

if [[ -n "$latest_change" ]] && (( now - latest_change < 600 )); then
  log "Skipped: waiting for 10 minutes without changes"
  exit 0
fi

/usr/bin/git add -A

if /usr/bin/git diff --cached --quiet; then
  log "No changes"
  exit 0
fi

commit_time=$(/bin/date '+%Y-%m-%d %H:%M:%S')
if ! /usr/bin/git commit -m "Auto sync: $commit_time" >> "$log_file" 2>&1; then
  log "Failed: commit"
  exit 1
fi

if /usr/bin/git push origin HEAD >> "$log_file" 2>&1; then
  log "Pushed successfully"
else
  log "Failed: push"
  exit 1
fi
