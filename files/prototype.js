const pageByMenu = {
  대시보드: "5-대시보드.html",
  "로그 목록": "6-로그목록.html",
  "친구 · 공유": "12-친구공유.html",
  "버디 로그": "13-버디로그.html",
  "장비 관리": "8-장비관리.html",
  "내 정보": "9-내정보.html",
};

const currentUser = { id: "me", name: "김가은", email: "gaeun@example.com" };
const friendStorageKey = "gani-log-friends";
const requestStorageKey = "gani-log-friend-requests";
const logNumberStorageKey = "gani-log-next-number";

function getNextLogNumber() {
  const storedNumber = Number(localStorage.getItem(logNumberStorageKey));
  return Number.isInteger(storedNumber) && storedNumber > 0 ? storedNumber : 43;
}

function readStoredArray(key, fallback = []) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || "null");
    return Array.isArray(value) ? value : fallback;
  } catch {
    return fallback;
  }
}

function getFriends() {
  const saved = readStoredArray(friendStorageKey);
  if (localStorage.getItem(friendStorageKey) !== null) return saved;
  const initial = [
    { id: "friend-minji", name: "박민지", email: "minji@example.com" },
    { id: "friend-junho", name: "이준호", email: "junho@example.com" },
  ];
  localStorage.setItem(friendStorageKey, JSON.stringify(initial));
  return initial;
}

function goTo(file) {
  window.location.href = file;
}

function makeClickable(element, action) {
  if (!element) return;

  element.style.cursor = "pointer";
  element.addEventListener("click", action);

  if (!element.matches("button, a, input")) {
    element.tabIndex = 0;
    element.setAttribute("role", "link");
    element.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        action();
      }
    });
  }
}

const sidebarDotStyle = document.createElement("style");
sidebarDotStyle.textContent = ".sidelink .dot{width:8px;height:8px;flex:0 0 8px;border-radius:50%;background:currentColor;display:inline-block}.gani-logo{height:34px!important;margin:0 0 20px!important;display:flex;align-items:center}.gani-logo img{display:block;width:136px;height:34px}.photo-picker{border:1px dashed #b9c9d8;border-radius:10px;padding:12px;background:#f8fbfd}.photo-picker input{border:0!important;padding:0!important}.photo-preview-list{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-top:10px}.photo-preview{position:relative;aspect-ratio:1;border-radius:8px;overflow:hidden;background:#eef1f3}.photo-preview img{width:100%;height:100%;object-fit:cover}.photo-remove{position:absolute;right:5px;top:5px;width:24px;height:24px;border:0;border-radius:50%;background:rgba(25,32,38,.78);color:#fff;cursor:pointer}.log-photo-section{max-width:720px;margin-top:12px}.log-photo-section h2{font-size:14px;margin:0 0 10px}.log-photo-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}.log-photo-grid img{width:100%;aspect-ratio:1;object-fit:cover;border-radius:9px}.log-card-photo,.buddy-card-photo{width:100%;height:130px;object-fit:cover;border-radius:8px;margin-top:10px}";
document.head.append(sidebarDotStyle);

document.querySelectorAll(".sidebar").forEach((sidebar) => {
  const brand = sidebar.querySelector(".logo") || sidebar.querySelector("p");
  if (!brand) return;
  brand.classList.add("gani-logo");
  brand.innerHTML = '<img src="assets/gani-log-logo.svg" alt="GANI Log">';
});

document.querySelectorAll(".sidelink").forEach((link) => {
  const menuName = link.textContent.trim().replace(/^●\s*/, "");
  if (!link.querySelector(".dot")) {
    const dot = document.createElement("span");
    dot.className = "dot";
    link.replaceChildren(dot, document.createTextNode(menuName));
  }
});

document.querySelectorAll(".sidelink").forEach((link) => {
  const menuName = link.textContent.trim().replace(/^●\s*/, "");
  const destination = pageByMenu[menuName];
  if (destination) makeClickable(link, () => goTo(destination));
});

document.querySelectorAll(".sidebar").forEach((sidebar) => {
  if ([...sidebar.querySelectorAll(".sidelink")].some((link) => link.textContent.trim().includes("친구 · 공유"))) return;
  const link = document.createElement("div");
  link.className = "sidelink";
  link.innerHTML = '<span class="dot"></span>친구 · 공유';
  const equipmentLink = [...sidebar.querySelectorAll(".sidelink")].find((item) => item.textContent.trim().includes("장비 관리"));
  const menuContainer = equipmentLink?.parentElement || sidebar;
  menuContainer.insertBefore(link, equipmentLink || null);
  makeClickable(link, () => goTo("12-친구공유.html"));
});

document.querySelectorAll(".sidebar").forEach((sidebar) => {
  if ([...sidebar.querySelectorAll(".sidelink")].some((link) => link.textContent.trim().includes("버디 로그"))) return;
  const link = document.createElement("div");
  link.className = "sidelink";
  link.innerHTML = '<span class="dot"></span>버디 로그';
  const equipmentLink = [...sidebar.querySelectorAll(".sidelink")].find((item) => item.textContent.trim().includes("장비 관리"));
  const menuContainer = equipmentLink?.parentElement || sidebar;
  menuContainer.insertBefore(link, equipmentLink || null);
  makeClickable(link, () => goTo("13-버디로그.html"));
});

const title = document.title;
const buttons = [...document.querySelectorAll("button")];
const buttonNamed = (name) =>
  buttons.find((button) => button.textContent.trim() === name);

if (title === "로그인") {
  makeClickable(buttonNamed("로그인"), () => {
    localStorage.setItem("gani-log-current-user", JSON.stringify(currentUser));
    goTo("5-대시보드.html");
  });
  makeClickable(document.querySelector("p span"), () =>
    goTo("2-회원가입.html"),
  );
}

if (title === "회원가입") {
  makeClickable(buttonNamed("가입하기"), () => {
    localStorage.setItem("gani-log-current-user", JSON.stringify(currentUser));
    goTo("5-대시보드.html");
  });
  makeClickable(document.querySelector("p span"), () => goTo("1-로그인.html"));
}

if (title === "연동 시작") {
  const syncOptions = [...document.querySelectorAll(".sync-option")];
  const syncRadios = [...document.querySelectorAll(".sync-radio")];
  const uploadPanel = document.querySelector("#log-upload-panel");
  const fileInput = document.querySelector("#log-file-input");
  const fileInfo = document.querySelector("#log-file-info");
  const imagePreview = document.querySelector("#log-image-preview");
  const uploadError = document.querySelector("#log-upload-error");
  const nextButton = document.querySelector("#sync-next-button");
  const savedMethod = sessionStorage.getItem("gani-log-sync-method") || "bluetooth";
  let selectedFile = null;
  let previewUrl = null;

  function selectSyncMethod(method) {
    syncOptions.forEach((option) => {
      const selected = option.dataset.syncMethod === method;
      option.classList.toggle("selected", selected);
      option.setAttribute("aria-checked", String(selected));
      option.querySelector(".sync-radio").checked = selected;
    });
    uploadPanel.classList.toggle("open", method === "file");
    uploadError.textContent = "";
    sessionStorage.setItem("gani-log-sync-method", method);
  }

  syncRadios.forEach((radio) => {
    radio.addEventListener("change", () => selectSyncMethod(radio.value));
  });
  fileInput.addEventListener("change", () => {
    selectedFile = fileInput.files[0] || null;
    uploadError.textContent = "";
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    imagePreview.classList.remove("visible");
    imagePreview.removeAttribute("src");
    if (!selectedFile) {
      fileInfo.textContent = "FIT, CSV, JPG, PNG, WEBP, HEIC 파일을 선택할 수 있습니다.";
      return;
    }
    const size = selectedFile.size < 1024 * 1024
      ? `${Math.ceil(selectedFile.size / 1024)} KB`
      : `${(selectedFile.size / 1024 / 1024).toFixed(1)} MB`;
    fileInfo.textContent = `${selectedFile.name} · ${size}`;
    if (selectedFile.type.startsWith("image/")) {
      previewUrl = URL.createObjectURL(selectedFile);
      imagePreview.src = previewUrl;
      imagePreview.classList.add("visible");
    }
  });
  selectSyncMethod(savedMethod);
  makeClickable(buttonNamed("취소"), () => goTo("5-대시보드.html"));
  nextButton.addEventListener("click", () => {
    const method = document.querySelector(".sync-radio:checked").value;
    if (method === "file" && !selectedFile) {
      uploadError.textContent = "업로드할 로그 파일이나 이미지를 선택해 주세요.";
      fileInput.focus();
      return;
    }
    if (selectedFile) {
      sessionStorage.setItem("gani-log-upload", JSON.stringify({
        name: selectedFile.name,
        type: selectedFile.type || "application/octet-stream",
        size: selectedFile.size,
      }));
    }
    goTo("4-로그작성-2단계.html");
  });
}

if (title === "로그 작성 - 2단계") {
  makeClickable(buttonNamed("이전"), () => goTo("3-연동시작.html"));
  makeClickable(buttonNamed("다음"), () => goTo("10-로그작성-3단계.html"));
}

if (title === "로그 작성 - 3단계") {
  const form = document.querySelector("#log-details-form");
  const error = document.querySelector("#log-details-error");
  const ids = ["tank-volume", "gas-type", "oxygen-percent", "weight", "start-pressure", "end-pressure", "equipment", "weight-state", "water", "average-depth", "underwater-visibility", "wave", "weather", "current", "memo", "visibility"];
  const saved = JSON.parse(sessionStorage.getItem("gani-log-draft") || "{}");
  let draftPhotos = Array.isArray(saved.photos) ? saved.photos : [];
  const equipmentInput = document.querySelector("#equipment");
  const equipmentSelect = document.createElement("select");
  equipmentSelect.id = "equipment";
  equipmentSelect.innerHTML = '<option value="">선택 안 함</option><option value="렌탈 장비">렌탈 장비</option>';
  const defaultEquipment = [
    { name: "3mm 웻슈트", type: "슈트" },
    { name: "Aqualung BCD", type: "BCD" },
    { name: "프레임리스 마스크", type: "마스크" },
    { name: "오픈힐 핀", type: "핀" },
  ];
  try {
    const registeredEquipment = JSON.parse(localStorage.getItem("gani-log-equipment") || "[]");
    const equipmentList = Array.isArray(registeredEquipment)
      ? [...defaultEquipment, ...registeredEquipment]
      : defaultEquipment;
    const uniqueEquipment = equipmentList.filter(
      (equipment, index, list) =>
        list.findIndex((item) => item.name === equipment.name) === index,
    );
    uniqueEquipment.forEach((equipment) => {
        const option = document.createElement("option");
        const details = [equipment.type, equipment.subtype].filter(Boolean).join(" · ");
        option.value = equipment.name;
        option.textContent = details ? `${equipment.name} (${details})` : equipment.name;
        equipmentSelect.append(option);
    });
  } catch {
    defaultEquipment.forEach((equipment) => {
      const option = document.createElement("option");
      option.value = equipment.name;
      option.textContent = `${equipment.name} (${equipment.type})`;
      equipmentSelect.append(option);
    });
  }
  equipmentInput.replaceWith(equipmentSelect);
  if (saved["tank-volume"] == null) {
    document.querySelector("#tank-volume").value = "11";
  }
  if (saved["start-pressure"] == null) {
    document.querySelector("#start-pressure").value = "200";
  }
  ids.forEach((id) => {
    const field = document.querySelector(`#${id}`);
    if (field && saved[id] != null) field.value = saved[id];
  });
  const friendList = document.querySelector("#buddy-list");
  const friends = getFriends();
  const savedBuddies = Array.isArray(saved.buddyUserIds) ? saved.buddyUserIds : [];
  const weatherField = document.createElement("div");
  weatherField.className = "field";
  weatherField.innerHTML = '<label for="weather">날씨</label><select id="weather"><option value="">선택 안 함</option><option>맑음</option><option>구름 많음</option><option>흐림</option><option>비</option><option>눈</option><option>바람 강함</option></select>';
  document.querySelector("#current").closest(".field").before(weatherField);
  if (saved.weather != null) document.querySelector("#weather").value = saved.weather;
  const averageDepthField = document.createElement("div");
  averageDepthField.className = "field";
  averageDepthField.innerHTML = '<label for="average-depth">평균 수심</label><div class="unit"><input id="average-depth" type="number" min="0" step="0.1"><span>m</span></div>';
  const visibilityField = document.createElement("div");
  visibilityField.className = "field";
  visibilityField.innerHTML = '<label for="underwater-visibility">시야</label><div class="unit"><input id="underwater-visibility" type="number" min="0" step="0.1" placeholder="수중 가시거리"><span>m</span></div>';
  const waveField = document.createElement("div");
  waveField.className = "field";
  waveField.innerHTML = '<label for="wave">파도</label><select id="wave"><option value="">선택 안 함</option><option>잔잔함</option><option>약함</option><option>보통</option><option>강함</option></select>';
  const waterField = document.querySelector("#water").closest(".field");
  waterField.after(averageDepthField, visibilityField, waveField);
  document.querySelector("#average-depth").value = saved["average-depth"] ?? "14.8";
  document.querySelector("#underwater-visibility").value = saved["underwater-visibility"] ?? "";
  document.querySelector("#wave").value = saved.wave ?? "";
  const gasTypeField = document.createElement("div");
  gasTypeField.className = "field";
  gasTypeField.innerHTML = '<label for="gas-type">기체 종류</label><select id="gas-type"><option value="공기">공기</option><option value="나이트록스">나이트록스</option></select>';
  const oxygenField = document.createElement("div");
  oxygenField.className = "field";
  oxygenField.innerHTML = '<label for="oxygen-percent">산소 비율</label><div class="unit"><input id="oxygen-percent" type="number" min="22" max="99" step="1" placeholder="예: 32"><span>%</span></div>';
  document.querySelector("#tank-volume").closest(".field").after(gasTypeField, oxygenField);
  const gasTypeInput = document.querySelector("#gas-type");
  const oxygenInput = document.querySelector("#oxygen-percent");
  gasTypeInput.value = saved["gas-type"] || "공기";
  oxygenInput.value = saved["oxygen-percent"] || "";
  function updateGasFields() {
    const isNitrox = gasTypeInput.value === "나이트록스";
    oxygenField.style.display = isNitrox ? "block" : "none";
    oxygenInput.required = isNitrox;
    if (!isNitrox) oxygenInput.value = "21";
  }
  gasTypeInput.addEventListener("change", updateGasFields);
  updateGasFields();
  friendList.innerHTML = friends.map((friend) => `<label class="buddy-option"><input type="checkbox" name="buddy" value="${friend.id}" ${savedBuddies.includes(friend.id) ? "checked" : ""}><span>${friend.name}<small>${friend.email}</small></span></label>`).join("");
  const manualBuddyField = document.createElement("div");
  manualBuddyField.style.marginTop = "8px";
  manualBuddyField.innerHTML = '<label for="manual-buddy-names">버디 이름 직접 입력</label><input id="manual-buddy-names" type="text" placeholder="예: 김다이버, 현지 가이드"><p class="helper">등록된 친구가 아니라면 이름을 직접 입력하세요. 여러 명은 쉼표로 구분합니다.</p>';
  friendList.after(manualBuddyField);
  const savedManualBuddies = Array.isArray(saved.manualBuddyNames) ? saved.manualBuddyNames : [];
  document.querySelector("#manual-buddy-names").value = savedManualBuddies.join(", ");
  const photoField = document.createElement("div");
  photoField.className = "field wide";
  photoField.innerHTML = '<label for="log-photos">다이빙 사진 <span class="helper">(선택)</span></label><div class="photo-picker"><input id="log-photos" type="file" accept="image/*" multiple><p class="helper">사진이 없으면 선택하지 않고 넘어가도 됩니다.</p><div id="log-photo-preview" class="photo-preview-list"></div></div>';
  document.querySelector("#memo").closest(".field").before(photoField);
  const photoInput = document.querySelector("#log-photos");
  const photoPreview = document.querySelector("#log-photo-preview");

  function renderDraftPhotos() {
    photoPreview.innerHTML = draftPhotos.map((photo, index) => `<div class="photo-preview"><img src="${photo.dataUrl}" alt="${photo.name}"><button type="button" class="photo-remove" data-photo-index="${index}" aria-label="사진 제거">×</button></div>`).join("");
    photoPreview.querySelectorAll("[data-photo-index]").forEach((button) => button.addEventListener("click", () => {
      draftPhotos.splice(Number(button.dataset.photoIndex), 1);
      renderDraftPhotos();
    }));
  }

  photoInput.addEventListener("change", async () => {
    const selectedPhotos = [...photoInput.files];
    const loadedPhotos = await Promise.all(selectedPhotos.map((file) => new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.addEventListener("load", () => resolve({ name: file.name, type: file.type, dataUrl: reader.result }));
      reader.addEventListener("error", reject);
      reader.readAsDataURL(file);
    })));
    draftPhotos = [...draftPhotos, ...loadedPhotos];
    photoInput.value = "";
    renderDraftPhotos();
  });
  renderDraftPhotos();
  makeClickable(document.querySelector("#log-step3-back"), () => goTo("4-로그작성-2단계.html"));
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const start = Number(document.querySelector("#start-pressure").value);
    const end = Number(document.querySelector("#end-pressure").value);
    if (!form.checkValidity()) { form.reportValidity(); return; }
    if (end >= start) { error.textContent = "종료 압력은 시작 압력보다 작아야 합니다."; return; }
    const draft = Object.fromEntries(ids.map((id) => [id, document.querySelector(`#${id}`).value]));
    draft.buddyUserIds = [...document.querySelectorAll('input[name="buddy"]:checked')].map((input) => input.value);
    draft.manualBuddyNames = document.querySelector("#manual-buddy-names").value.split(",").map((name) => name.trim()).filter(Boolean);
    const selectedFriendNames = friends.filter((friend) => draft.buddyUserIds.includes(friend.id)).map((friend) => friend.name);
    draft.buddyNames = [...new Set([...selectedFriendNames, ...draft.manualBuddyNames])];
    draft.photos = draftPhotos;
    try {
      sessionStorage.setItem("gani-log-draft", JSON.stringify(draft));
    } catch {
      error.textContent = "사진 용량이 커서 임시 저장할 수 없습니다. 사진 수를 줄이거나 더 작은 사진을 선택해 주세요.";
      return;
    }
    goTo("11-로그작성-4단계.html");
  });
}

if (title === "로그 작성 - 4단계") {
  const draft = JSON.parse(sessionStorage.getItem("gani-log-draft") || "{}");
  const labels = [["tank-volume", "탱크 용량", "L"], ["gas-type", "기체 종류", ""], ["oxygen-percent", "산소 비율", "%"], ["start-pressure", "시작 압력", "bar"], ["end-pressure", "종료 압력", "bar"], ["weight", "웨이트", "kg"], ["equipment", "장비", ""], ["weight-state", "웨이트 상태", ""], ["average-depth", "평균 수심", "m"], ["water", "수역", ""], ["underwater-visibility", "시야", "m"], ["wave", "파도", ""], ["weather", "날씨", ""], ["current", "조류", ""]];
  const summary = document.querySelector("#log-summary");
  summary.innerHTML = labels.map(([key, label, unit]) => `<div class="row"><span>${label}</span><span>${draft[key] ? `${draft[key]}${unit ? ` ${unit}` : ""}` : "입력 안 함"}</span></div>`).join("");
  summary.insertAdjacentHTML("afterbegin", `<div class="row"><span>로그 번호</span><strong>#${getNextLogNumber()}</strong></div>`);
  const visibilityNames = { private: "나만 보기", friends: "친구 공개", public: "전체 공개" };
  summary.insertAdjacentHTML("beforeend", `<div class="row"><span>함께한 버디</span><span>${draft.buddyNames?.join(", ") || "선택 안 함"}</span></div><div class="row"><span>공개 범위</span><span>${visibilityNames[draft.visibility] || "나만 보기"}</span></div>`);
  if (Array.isArray(draft.photos) && draft.photos.length) {
    summary.insertAdjacentHTML("afterend", `<section class="card log-photo-section"><h2>다이빙 사진 · ${draft.photos.length}장</h2><div class="log-photo-grid">${draft.photos.map((photo) => `<img src="${photo.dataUrl}" alt="${photo.name}">`).join("")}</div></section>`);
  }
  const ready = document.querySelector("#analysis-ready");
  if (!draft["tank-volume"] || !draft["start-pressure"] || !draft["end-pressure"]) {
    ready.textContent = "SAC·RMV 계산에 필요한 탱크 용량 또는 압력 정보가 부족합니다.";
    ready.style.background = "#faeeda";
    ready.style.color = "#633806";
  }
  makeClickable(document.querySelector("#log-step4-back"), () => goTo("10-로그작성-3단계.html"));
  document.querySelector("#save-log")?.addEventListener("click", (event) => {
    const button = event.currentTarget;
    button.disabled = true;
    button.textContent = "저장 중…";
    const logs = JSON.parse(localStorage.getItem("gani-log-records") || "[]");
    const logNumber = getNextLogNumber();
    logs.push({ id: `log-${Date.now()}`, logNumber, ownerId: currentUser.id, ownerName: currentUser.name, ...draft, visibility: draft.visibility || "private", createdAt: new Date().toISOString() });
    try {
      localStorage.setItem("gani-log-records", JSON.stringify(logs));
    } catch {
      button.disabled = false;
      button.textContent = "로그 저장";
      document.querySelector("#save-log-message").textContent = "사진 용량이 커서 저장하지 못했습니다. 이전 단계에서 사진 수를 줄여 주세요.";
      return;
    }
    localStorage.setItem(logNumberStorageKey, String(logNumber + 1));
    sessionStorage.removeItem("gani-log-draft");
    document.querySelector("#save-log-message").textContent = "로그를 저장했습니다. 대시보드로 이동합니다.";
    setTimeout(() => goTo("5-대시보드.html"), 700);
  });
}

if (title === "대시보드") {
  makeClickable(buttonNamed("+ 새 로그 작성"), () => goTo("3-연동시작.html"));
  document.querySelectorAll(".card div > div").forEach((item) => {
    if (item.querySelector("p"))
      makeClickable(item, () => goTo("7-로그상세.html"));
  });
}

if (title === "로그 목록") {
  document.querySelectorAll("tbody tr").forEach((row) => {
    makeClickable(row, () => goTo("7-로그상세.html"));
  });
}

if (title === "로그 상세") {
  const similarLogs = {
    "0702": { date: "07.02", sac: "15.8 bar/min" },
    "0519": { date: "05.19", sac: "17.1 bar/min" },
  };
  const selectedLog = new URLSearchParams(window.location.search).get("log");

  document.querySelectorAll("[data-similar-log]").forEach((row) => {
    makeClickable(row, () => goTo(`7-로그상세.html?log=${row.dataset.similarLog}`));
    row.addEventListener("mouseenter", () => {
      row.style.background = "#f7f7f5";
    });
    row.addEventListener("mouseleave", () => {
      row.style.background = "transparent";
    });
  });

  if (similarLogs[selectedLog]) {
    const log = similarLogs[selectedLog];
    document.querySelector("#log-detail-title").textContent = `유사 다이빙 · ${log.date}`;
    document.querySelector("#log-detail-date").textContent = `${log.date} 과거 로그`;
    document.querySelector("#log-detail-sac").textContent = log.sac;
    document.querySelector("#log-detail-sac-heading").textContent = `SAC ${log.sac} 해석`;
    document.title = `${log.date} 로그 상세`;
  }
}

if (title === "장비 관리") {
  const storageKey = "gani-log-equipment";
  const subtypesByType = {
    슈트: ["웻슈트", "드라이슈트"],
    BCD: ["조끼형", "백 인플레이트형", "백플레이트·윙형"],
    탱크: ["알루미늄", "스틸"],
    웨이트: ["웨이트 벨트", "통합형 웨이트", "트림 웨이트"],
    호흡기: ["레귤레이터 세트", "옥토퍼스"],
    핀: ["오픈힐", "풀풋"],
    마스크: ["프레임형", "프레임리스형"],
    "다이브 컴퓨터": ["손목형", "콘솔형"],
    기타: ["기타"],
  };
  const form = document.querySelector("#equipment-form");
  const openButton = document.querySelector("#open-equipment-form-button");
  const cancelButton = document.querySelector("#cancel-equipment-button");
  const addCard = document.querySelector("#equipment-add-card");
  const grid = document.querySelector("#equipment-grid");
  const nameInput = document.querySelector("#equipment-name-input");
  const typeInput = document.querySelector("#equipment-type-input");
  const subtypeInput = document.querySelector("#equipment-subtype-input");
  const errorText = document.querySelector("#equipment-form-error");

  function readEquipment() {
    try {
      const equipment = JSON.parse(localStorage.getItem(storageKey));
      return Array.isArray(equipment) ? equipment : [];
    } catch {
      return [];
    }
  }

  function createEquipmentCard(equipment) {
    const card = document.createElement("div");
    card.className = "card";
    card.style.padding = "16px";

    const icon = document.createElement("div");
    Object.assign(icon.style, {
      width: "20px",
      height: "20px",
      borderRadius: "50%",
      border: "1.5px solid #378add",
      marginBottom: "8px",
    });

    const name = document.createElement("p");
    name.style.cssText = "font-size:13px;font-weight:500;margin-bottom:2px";
    name.textContent = equipment.name;

    const type = document.createElement("p");
    type.style.cssText = "font-size:12px;color:#5f5e5a";
    type.textContent = equipment.subtype
      ? `종류: ${equipment.type} · ${equipment.subtype}`
      : `종류: ${equipment.type}`;

    card.append(icon, name, type);
    grid.insertBefore(card, addCard);
  }

  let equipmentList = readEquipment();
  equipmentList.forEach(createEquipmentCard);

  function updateSubtypeOptions() {
    const options = subtypesByType[typeInput.value] || [];
    subtypeInput.replaceChildren();

    const placeholder = document.createElement("option");
    placeholder.value = "";
    placeholder.textContent = options.length
      ? "선택하세요"
      : "장비 종류를 먼저 선택하세요";
    subtypeInput.append(placeholder);

    options.forEach((subtype) => {
      const option = document.createElement("option");
      option.value = subtype;
      option.textContent = subtype;
      subtypeInput.append(option);
    });

    subtypeInput.disabled = options.length === 0;
  }

  function openForm() {
    form.classList.add("open");
    openButton.hidden = true;
    errorText.textContent = "";
    nameInput.focus();
  }

  function closeForm() {
    form.classList.remove("open");
    openButton.hidden = false;
    form.reset();
    updateSubtypeOptions();
    errorText.textContent = "";
  }

  makeClickable(openButton, openForm);
  makeClickable(addCard, openForm);
  cancelButton.addEventListener("click", closeForm);
  typeInput.addEventListener("change", updateSubtypeOptions);

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const equipment = {
      name: nameInput.value.trim(),
      type: typeInput.value,
      subtype: subtypeInput.value,
    };

    if (!equipment.name) {
      errorText.textContent = "장비 이름을 입력해 주세요.";
      nameInput.focus();
      return;
    }

    if (!equipment.type) {
      errorText.textContent = "장비 종류를 선택해 주세요.";
      typeInput.focus();
      return;
    }

    if (!equipment.subtype) {
      errorText.textContent = "세부 종류를 선택해 주세요.";
      subtypeInput.focus();
      return;
    }

    equipmentList = [...equipmentList, equipment];
    localStorage.setItem(storageKey, JSON.stringify(equipmentList));
    createEquipmentCard(equipment);
    closeForm();
  });
}

if (title === "내 정보") {
  const storageKey = "gani-log-profile";
  const form = document.querySelector("#profile-form");
  const editButton = document.querySelector("#edit-profile-button");
  const cancelButton = document.querySelector("#cancel-profile-button");
  const nameInput = document.querySelector("#profile-name-input");
  const emailInput = document.querySelector("#profile-email-input");
  const nameText = document.querySelector("#profile-name");
  const emailText = document.querySelector("#profile-email");
  const certificationText = document.querySelector("#profile-certification");
  const avatar = document.querySelector("#profile-avatar");
  const errorText = document.querySelector("#profile-form-error");
  const profileContent = document.querySelector(".content-area");

  const certificateStyle = document.createElement("style");
  certificateStyle.textContent = ".log-number-panel,.certificate-panel{max-width:720px;margin-top:18px;padding:18px;border:1px solid #e4e1d6;border-radius:12px;background:#fdfdfb}.log-number-panel h2,.certificate-panel h2{font-size:14px;margin:0 0 5px}.log-number-form{display:flex;align-items:end;gap:8px;margin-top:12px}.log-number-form .field{flex:1;margin:0}.log-number-message{min-height:17px;margin-top:7px;color:#0c447c;font-size:11px}.certificate-upload{display:grid;grid-template-columns:180px 1fr;gap:16px;margin-top:14px}.certificate-preview{height:132px;border:1px dashed #b9c9d8;border-radius:9px;background:#f5f8fa;display:grid;place-items:center;overflow:hidden;color:#888780;font-size:11px;text-align:center;padding:10px}.certificate-preview img{width:100%;height:100%;object-fit:contain}.certificate-controls input[type=file]{font-size:12px;max-width:100%}.certificate-status{min-height:18px;margin:9px 0;font-size:11px;color:#0c447c}.certificate-result{display:none;grid-template-columns:1fr 1fr;gap:10px 12px;margin-top:14px;padding-top:14px;border-top:1px solid #e4e1d6}.certificate-result.open{display:grid}.certificate-result .wide{grid-column:1/-1}.certificate-result input{width:100%;height:38px;border:1px solid #d8d5ca;border-radius:8px;padding:0 10px}.certificate-notice{font-size:11px;line-height:1.5;color:#633806;background:#faeeda;border-radius:8px;padding:9px 11px;margin-top:12px}@media(max-width:700px){.certificate-upload{grid-template-columns:1fr}.certificate-result{grid-template-columns:1fr}.certificate-result .wide{grid-column:auto}}";
  document.head.append(certificateStyle);

  const certificatePanel = document.createElement("section");
  certificatePanel.className = "certificate-panel";
  certificatePanel.innerHTML = '<h2>자격증 이미지로 등록</h2><p class="muted">자격증 사진을 첨부하고 판독 결과를 확인한 뒤 저장하세요.</p><div class="certificate-upload"><div id="certificate-preview" class="certificate-preview">선택한 자격증 이미지가 여기에 표시됩니다.</div><div class="certificate-controls"><label class="label" for="certificate-image">자격증 이미지</label><input id="certificate-image" type="file" accept="image/*"><p id="certificate-status" class="certificate-status" aria-live="polite"></p></div></div><div id="certificate-result" class="certificate-result"><div class="field"><label class="label" for="certificate-agency">발급 단체</label><input id="certificate-agency" placeholder="예: 발급 단체"></div><div class="field"><label class="label" for="certificate-level">자격 등급</label><input id="certificate-level" placeholder="예: Advanced Open Water"></div><div class="field"><label class="label" for="certificate-number">자격번호</label><input id="certificate-number" placeholder="자격번호"></div><div class="field"><label class="label" for="certificate-issued-on">발급일</label><input id="certificate-issued-on" type="date"></div><div class="wide"><button id="save-certificate-result" class="btn btn-primary" type="button">확인한 자격 정보 저장</button></div></div><p class="certificate-notice">현재는 프론트엔드 프로토타입이라 이미지 미리보기와 확인·저장 흐름만 작동합니다. 실제 AI 판독이나 자격증 진위 확인은 하지 않으며, 저장 전에 내용을 직접 확인해야 합니다.</p>';
  const logNumberPanel = document.createElement("section");
  logNumberPanel.className = "log-number-panel";
  logNumberPanel.innerHTML = '<h2>로그 번호 설정</h2><p class="muted">기존 다이빙 기록이 있다면 다음에 저장할 로그 번호를 설정하세요.</p><div class="log-number-form"><div class="field"><label class="label" for="next-log-number">다음 로그 번호</label><input id="next-log-number" class="input" type="number" min="1" step="1"></div><button id="save-log-number" class="btn" type="button">번호 저장</button></div><p id="log-number-message" class="log-number-message" aria-live="polite"></p>';
  profileContent.append(logNumberPanel, certificatePanel);

  const defaultProfile = {
    name: nameText.textContent.trim(),
    email: emailText.textContent.trim(),
    certification: certificationText.textContent.trim(),
  };

  function readProfile() {
    try {
      return {
        ...defaultProfile,
        ...JSON.parse(localStorage.getItem(storageKey)),
      };
    } catch {
      return defaultProfile;
    }
  }

  function renderProfile(profile) {
    nameText.textContent = profile.name;
    emailText.textContent = profile.email;
    certificationText.textContent = profile.certification || "등록된 자격 없음";
    avatar.textContent = profile.name.replaceAll(" ", "").slice(-2);
  }

  function fillForm(profile) {
    nameInput.value = profile.name;
    emailInput.value = profile.email;
    errorText.textContent = "";
  }

  let profile = readProfile();
  renderProfile(profile);

  const nextLogNumberInput = document.querySelector("#next-log-number");
  const logNumberMessage = document.querySelector("#log-number-message");
  nextLogNumberInput.value = String(getNextLogNumber());
  document.querySelector("#save-log-number").addEventListener("click", () => {
    const nextNumber = Number(nextLogNumberInput.value);
    if (!Number.isInteger(nextNumber) || nextNumber < 1) {
      logNumberMessage.textContent = "1 이상의 정수로 입력해 주세요.";
      nextLogNumberInput.focus();
      return;
    }
    localStorage.setItem(logNumberStorageKey, String(nextNumber));
    logNumberMessage.textContent = `다음 로그를 #${nextNumber}로 저장하도록 설정했습니다.`;
  });

  const certificateImage = document.querySelector("#certificate-image");
  const certificatePreview = document.querySelector("#certificate-preview");
  const certificateStatus = document.querySelector("#certificate-status");
  const certificateResult = document.querySelector("#certificate-result");
  const certificateAgency = document.querySelector("#certificate-agency");
  const certificateLevel = document.querySelector("#certificate-level");
  const certificateNumber = document.querySelector("#certificate-number");
  const certificateIssuedOn = document.querySelector("#certificate-issued-on");
  let certificateImageData = profile.certificateImageData || "";

  if (certificateImageData) {
    certificatePreview.innerHTML = `<img src="${certificateImageData}" alt="저장된 자격증 이미지">`;
  }

  certificateImage.addEventListener("change", () => {
    const file = certificateImage.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.addEventListener("load", () => {
      certificateImageData = reader.result;
      certificatePreview.innerHTML = `<img src="${certificateImageData}" alt="선택한 자격증 이미지">`;
      certificateStatus.textContent = "AI 분석 화면을 준비하고 있습니다…";
      certificateResult.classList.remove("open");
      window.setTimeout(() => {
        certificateStatus.textContent = "프로토타입 분석이 완료되었습니다. 이미지 내용을 보고 아래 항목을 직접 확인·수정해 주세요.";
        certificateResult.classList.add("open");
        certificateAgency.value = profile.certificationAgency || "";
        certificateLevel.value = profile.certification || "";
        certificateNumber.value = profile.certificationNumber || "";
        certificateIssuedOn.value = profile.certificationIssuedOn || "";
      }, 700);
    });
    reader.readAsDataURL(file);
  });

  document.querySelector("#save-certificate-result").addEventListener("click", () => {
    const certification = certificateLevel.value.trim();
    if (!certification) {
      certificateStatus.textContent = "자격 등급을 확인해 입력해 주세요.";
      certificateLevel.focus();
      return;
    }
    profile = {
      ...profile,
      certification,
      certificationAgency: certificateAgency.value.trim(),
      certificationNumber: certificateNumber.value.trim(),
      certificationIssuedOn: certificateIssuedOn.value,
      certificateImageData,
    };
    try {
      localStorage.setItem(storageKey, JSON.stringify(profile));
    } catch {
      certificateStatus.textContent = "이미지 용량이 커서 저장하지 못했습니다. 더 작은 이미지를 선택해 주세요.";
      return;
    }
    renderProfile(profile);
    certificateStatus.textContent = "확인한 자격 정보를 저장했습니다.";
  });

  editButton.addEventListener("click", () => {
    fillForm(profile);
    form.classList.add("open");
    editButton.hidden = true;
    nameInput.focus();
  });

  cancelButton.addEventListener("click", () => {
    form.classList.remove("open");
    editButton.hidden = false;
    errorText.textContent = "";
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (!name) {
      errorText.textContent = "이름을 입력해 주세요.";
      nameInput.focus();
      return;
    }

    if (!emailInput.validity.valid) {
      errorText.textContent = "올바른 이메일 주소를 입력해 주세요.";
      emailInput.focus();
      return;
    }

    profile = { ...profile, name, email };
    localStorage.setItem(storageKey, JSON.stringify(profile));
    renderProfile(profile);
    form.classList.remove("open");
    editButton.hidden = false;
  });
}

if (title === "친구 · 공유") {
  const friendList = document.querySelector("#friend-list");
  const requestList = document.querySelector("#request-list");
  const feedList = document.querySelector("#shared-log-list");
  const form = document.querySelector("#friend-request-form");
  const emailInput = document.querySelector("#friend-email");
  const message = document.querySelector("#friend-message");

  function renderFriends() {
    const friends = getFriends();
    friendList.innerHTML = friends.length ? friends.map((friend) => `<div class="person-row"><div class="avatar">${friend.name.slice(0, 1)}</div><div><strong>${friend.name}</strong><small>${friend.email}</small></div><button class="text-button" data-remove-friend="${friend.id}">삭제</button></div>`).join("") : '<p class="empty">아직 등록된 친구가 없습니다.</p>';
    friendList.querySelectorAll("[data-remove-friend]").forEach((button) => button.addEventListener("click", () => {
      localStorage.setItem(friendStorageKey, JSON.stringify(friends.filter((friend) => friend.id !== button.dataset.removeFriend)));
      renderFriends();
    }));
  }

  function renderRequests() {
    const requests = readStoredArray(requestStorageKey, [{ id: "request-yuna", name: "최유나", email: "yuna@example.com" }]);
    if (!localStorage.getItem(requestStorageKey)) localStorage.setItem(requestStorageKey, JSON.stringify(requests));
    requestList.innerHTML = requests.length ? requests.map((request) => `<div class="person-row"><div class="avatar">${request.name.slice(0, 1)}</div><div><strong>${request.name}</strong><small>${request.email}</small></div><div class="row-actions"><button class="small-button accept" data-accept="${request.id}">수락</button><button class="small-button" data-reject="${request.id}">거절</button></div></div>`).join("") : '<p class="empty">받은 친구 요청이 없습니다.</p>';
    requestList.querySelectorAll("[data-accept]").forEach((button) => button.addEventListener("click", () => {
      const request = requests.find((item) => item.id === button.dataset.accept);
      localStorage.setItem(friendStorageKey, JSON.stringify([...getFriends(), request]));
      localStorage.setItem(requestStorageKey, JSON.stringify(requests.filter((item) => item.id !== request.id)));
      renderFriends();
      renderRequests();
    }));
    requestList.querySelectorAll("[data-reject]").forEach((button) => button.addEventListener("click", () => {
      localStorage.setItem(requestStorageKey, JSON.stringify(requests.filter((item) => item.id !== button.dataset.reject)));
      renderRequests();
    }));
  }

  function renderFeed() {
    const ownShared = readStoredArray("gani-log-records").filter((log) => log.visibility !== "private");
    const examples = [
      { ownerName: "박민지", point: "울릉도 죽도", visibility: "friends", createdAt: "2026-08-16T10:00:00+09:00", buddyNames: ["김가은"] },
      { ownerName: "이준호", point: "강원도 문암", visibility: "public", createdAt: "2026-08-12T10:00:00+09:00", buddyNames: [] },
    ];
    const names = { friends: "친구 공개", public: "전체 공개" };
    feedList.innerHTML = [...ownShared, ...examples].map((log) => `<article class="log-card"><span class="scope ${log.visibility}">${names[log.visibility]}</span>${log.photos?.[0] ? `<img class="log-card-photo" src="${log.photos[0].dataUrl}" alt="${log.photos[0].name}">` : ""}<h3>${log.point || "새 다이빙 로그"}</h3><p>${log.ownerName || currentUser.name} · ${new Date(log.createdAt).toLocaleDateString("ko-KR")}</p>${log.buddyNames?.length ? `<p>함께한 버디: ${log.buddyNames.join(", ")}</p>` : ""}</article>`).join("");
  }

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const email = emailInput.value.trim().toLowerCase();
    if (!email || email === currentUser.email || getFriends().some((friend) => friend.email === email)) {
      message.textContent = email === currentUser.email ? "내 계정에는 친구 요청을 보낼 수 없습니다." : "이메일을 확인하거나 이미 등록된 친구인지 확인해 주세요.";
      return;
    }
    const sent = readStoredArray("gani-log-sent-requests");
    localStorage.setItem("gani-log-sent-requests", JSON.stringify([...sent, { email, createdAt: new Date().toISOString() }]));
    message.textContent = `${email} 계정으로 친구 요청을 보냈습니다.`;
    emailInput.value = "";
  });

  renderFriends();
  renderRequests();
  renderFeed();
}

if (title === "버디 로그") {
  const feedList = document.querySelector("#buddy-log-list");
  const filter = document.querySelector("#buddy-log-filter");
  const ownShared = readStoredArray("gani-log-records").filter((log) => log.visibility !== "private");
  const examples = [
    { ownerName: "박민지", point: "울릉도 죽도", visibility: "friends", createdAt: "2026-08-16T10:00:00+09:00", buddyNames: ["김가은"] },
    { ownerName: "이준호", point: "강원도 문암", visibility: "public", createdAt: "2026-08-12T10:00:00+09:00", buddyNames: [] },
  ];
  const logs = [...ownShared, ...examples];
  const visibilityNames = { friends: "친구 공개", public: "전체 공개" };

  function renderBuddyLogs() {
    const selected = filter.value;
    const visibleLogs = selected === "all" ? logs : logs.filter((log) => log.visibility === selected);
    feedList.innerHTML = visibleLogs.length ? visibleLogs.map((log) => `<article class="buddy-card"><div class="card-head"><span class="avatar">${(log.ownerName || currentUser.name).slice(0, 1)}</span><div><strong>${log.ownerName || currentUser.name}</strong><small>${new Date(log.createdAt).toLocaleDateString("ko-KR")}</small></div><span class="scope ${log.visibility}">${visibilityNames[log.visibility]}</span></div>${log.photos?.[0] ? `<img class="buddy-card-photo" src="${log.photos[0].dataUrl}" alt="${log.photos[0].name}">` : ""}<h2>${log.point || "새 다이빙 로그"}</h2><p>${log.buddyNames?.length ? `함께한 버디: ${log.buddyNames.join(", ")}` : "등록된 버디 없음"}</p></article>`).join("") : '<p class="empty">조건에 맞는 버디 로그가 없습니다.</p>';
  }

  filter.addEventListener("change", renderBuddyLogs);
  renderBuddyLogs();
}
