# Automatic change log

프로젝트에서 무엇을 바꿨는지 계속 확인할 수 있는 자동 변경 기록입니다.
자동 업로드와 직접 만든 커밋 모두 변경 요약, 파일 목록, 변경 규모를 함께 기록합니다.
세부 코드는 같은 커밋의 GitHub diff에서 확인할 수 있습니다.

## 2026-08-19 09:25:16

### 변경 요약

- 로그 작성 3단계에 평균 수심, 수중 시야, 파도 상태 입력 항목을 추가했습니다.
- 평균 수심은 현재 연동 예시 값인 14.8m를 기본으로 표시하고 수정할 수 있게 했습니다.
- 4단계 확인 화면과 로그 상세의 바다 환경 카드에서 새 항목을 확인할 수 있게 했습니다.
- 기존 로그에 정해지지 않은 시야와 파도 값은 `입력 안 함`으로 표시했습니다.

### 변경된 파일

- 수정: `files/prototype.js`
- 수정: `files/7-로그상세.html`

## 2026-08-19 09:21:21

### 변경 요약

- 로그 상세 제목 아래에는 다이빙 날짜만 남겼습니다.
- 최대수심, 다이빙 시간, 수온을 수역·날씨·조류와 같은 정보 카드로 옮겼습니다.
- 여섯 가지 다이빙 조건을 3열 2행으로 정리했습니다.

### 변경된 파일

- 수정: `files/7-로그상세.html`

## 2026-08-19 09:18:55

### 변경 요약

- 로그 작성 3단계에 날씨 선택 항목을 추가하고 기존 조류 입력과 함께 저장하도록 연결했습니다.
- 4단계 확인 화면에서 날씨와 조류를 저장 전에 확인할 수 있게 했습니다.
- 로그 목록에 날씨·조류 열을, 로그 상세에는 수역·날씨·조류 환경 정보 영역을 추가했습니다.
- 기존 목업 로그에 정해지지 않은 날씨와 조류는 임의로 만들지 않고 `입력 안 함`으로 표시했습니다.

### 변경된 파일

- 수정: `files/prototype.js`
- 수정: `files/6-로그목록.html`
- 수정: `files/7-로그상세.html`

## 2026-08-19 09:15:36

### 변경 요약

- 실제 사진 없이도 배치 위치를 확인할 수 있도록 로그 목록에 사진 썸네일 자리 표시자를 추가했습니다.
- 로그 상세 화면에는 900px 너비의 큰 다이빙 사진 영역을 점선 박스로 표시했습니다.

### 변경된 파일

- 수정: `files/6-로그목록.html`
- 수정: `files/7-로그상세.html`

## 2026-08-19 09:09:32

### 변경 요약

- 내 정보 화면에 다음 로그 번호를 직접 설정하는 기능을 추가했습니다.
- 새 로그의 4단계 확인 화면에 예정 로그 번호를 표시하고, 저장 후 다음 번호가 자동으로 1 증가하게 했습니다.
- 기존 목업 로그 목록과 상세 화면에 #42, #41, #40 로그 번호를 표시했습니다.
- 별도 설정이 없으면 기존 42회 기록 다음 번호인 #43부터 시작합니다.

### 변경된 파일

- 수정: `files/prototype.js`
- 수정: `files/6-로그목록.html`
- 수정: `files/7-로그상세.html`

## 2026-08-18 21:12:33

### 변경 요약

- 회원가입의 `가입하기` 버튼을 누르면 로그 연동 화면이 아니라 대시보드로 이동하도록 변경했습니다.
- 가입 완료 사용자의 로그인 상태를 브라우저에 저장한 뒤 대시보드에서 서비스를 시작하도록 연결했습니다.

### 변경된 파일

- 수정: `files/prototype.js`

## 2026-08-18 21:11:14

### 변경 요약

- 로컬 서버의 첫 화면인 `index.html`이 로그인 화면을 열도록 변경했습니다.
- 기존 전체 화면 미리보기는 `screens.html`로 옮겨 계속 확인할 수 있게 했습니다.
- README의 실행 방법을 새로운 시작 흐름에 맞게 수정했습니다.

### 변경된 파일

- 수정: `files/index.html`
- 추가: `files/screens.html`
- 수정: `README.md`

## 2026-08-18 21:09:24

### 변경 요약

- 일반 정보 수정 폼에서 다이빙 자격 입력란을 제거했습니다.
- 정보 수정은 이름과 이메일만 다루고, 자격 정보는 자격증 이미지 등록 영역에서만 관리하도록 분리했습니다.
- 이름이나 이메일을 수정해도 저장된 자격 정보가 유지되도록 했습니다.

### 변경된 파일

- 수정: `files/9-내정보.html`
- 수정: `files/prototype.js`

## 2026-08-18 21:07:44

### 변경 요약

- 내 정보 화면에 자격증 이미지 첨부와 미리보기 UI를 추가했습니다.
- 프론트엔드용 분석 진행 상태와 발급 단체, 자격 등급, 자격번호, 발급일 확인 입력란을 구현했습니다.
- 사용자가 확인한 자격 정보와 이미지를 브라우저에 저장하고 내 정보의 자격 등급을 갱신하도록 연결했습니다.
- 실제 AI 판독과 진위 확인은 하지 않는 프로토타입이라는 안내를 화면에 표시했습니다.

### 변경된 파일

- 수정: `files/prototype.js`

## 2026-08-18 21:04:51

### 변경 요약

- 로그 상세 화면의 해석 영역에 SAC와 RMV의 차이를 나란히 설명했습니다.
- 같은 탱크에서는 SAC, 다른 크기 탱크에서는 RMV를 비교하도록 실제 확인 순서를 추가했습니다.
- 수심, 수온, 조류, 활동량이 비슷한 본인 기록과 비교하고 당시 조건을 함께 살피도록 안내했습니다.

### 변경된 파일

- 수정: `files/7-로그상세.html`

## 2026-08-18 21:02:42

### 변경 요약

- 로그 상세 화면의 주요 콘텐츠 폭을 560px에서 900px로 넓혔습니다.
- 버디 정보, 지표 카드, SAC 설명, 비교 카드의 너비 기준을 통일해 왼쪽 쏠림을 줄였습니다.

### 변경된 파일

- 수정: `files/7-로그상세.html`

## 2026-08-18 21:01:09

### 변경 요약

- 기존 로그 목록에 함께한 버디와 공개 범위를 표시했습니다.
- 친구 예시에 맞춰 나만 보기, 친구 공개, 전체 공개 상태를 구분했습니다.
- 문섬 로그 상세 화면에도 목록과 같은 버디와 공개 범위를 표시했습니다.

### 변경된 파일

- 수정: `files/6-로그목록.html`
- 수정: `files/7-로그상세.html`

## 2026-08-18 20:59:38

### 변경 요약

- 로그 작성 3단계에서 등록된 친구뿐 아니라 버디 이름을 직접 입력할 수 있게 했습니다.
- 여러 버디는 쉼표로 구분해 입력하며, 친구 선택값과 직접 입력한 이름을 합쳐 중복 없이 저장합니다.
- 직접 입력한 버디도 4단계 확인 화면과 공유 로그에 표시됩니다.

### 변경된 파일

- 수정: `files/prototype.js`

## 2026-08-18 20:58:54

### 변경 요약

- 로그 작성 3단계의 시작 압력 기본값을 일반적으로 사용하는 `200 bar`로 설정했습니다.
- 사용자가 이전에 입력한 시작 압력이 있으면 기본값으로 덮어쓰지 않고 해당 값을 유지합니다.

### 변경된 파일

- 수정: `files/prototype.js`

## 2026-08-18 20:48:53

### 변경 요약

- GANI Log 사이드바 로고를 다이빙 마스크와 버블을 사용한 SVG 로고로 교체했습니다.
- 모든 화면에서 같은 로고 크기와 위치를 사용하도록 공통 스크립트에 연결했습니다.

### 변경된 파일

- 추가: `files/assets/gani-log-logo.svg`
- 수정: `files/prototype.js`
- 수정: `files` 폴더의 HTML 화면

## 2026-08-18 20:47:06

### 변경 요약

- 기존 대시보드와 새 화면의 너비, 사이드바 위치, 콘텐츠 여백, 제목 크기를 통일했습니다.
- 모든 메뉴 앞 동그라미를 같은 8px 원형 요소로 변경했습니다.
- 친구·공유와 버디 로그 화면에서도 사이드바 이동이 작동하도록 수정했습니다.

### 변경된 파일

- 수정: `files/10-로그작성-3단계.html`
- 수정: `files/11-로그작성-4단계.html`
- 수정: `files/12-친구공유.html`
- 수정: `files/13-버디로그.html`
- 수정: `files/prototype.js`

## 2026-08-18 20:28:09

### 변경 요약

- 이메일 친구 요청, 요청 수락·거절, 친구 삭제가 가능한 친구·공유 화면을 추가했습니다.
- 로그 작성 시 등록된 친구를 버디로 선택하고 공개 범위를 나만 보기, 친구 공개, 전체 공개 중에서 선택할 수 있게 했습니다.
- 친구 공개 로그와 전체 공개 로그를 모아 보는 버디 로그 메뉴와 화면을 추가했습니다.

### 변경된 파일

- 추가: `files/12-친구공유.html`
- 추가: `files/13-버디로그.html`
- 수정: `files/10-로그작성-3단계.html`
- 수정: `files/prototype.js`

## 2026-08-18 20:19:16

### 변경 요약

- dbdiagram.io에서 불러올 수 있는 GANI Log 데이터 모델을 작성했습니다.
- Swagger Editor에서 불러올 수 있는 OpenAPI 명세를 작성했습니다.
- 친구 관계, 로그 버디, 나만 보기·친구 공개·전체 공개 범위를 데이터 모델과 API 명세에 추가했습니다.

### 변경된 파일

- 추가: `database/GANI_Log.dbml`
- 추가: `api/openapi.yaml`

## 2026-08-18 19:32:05

### 변경 요약

- 요구사항 정의서와 화면 설계서를 작성하고 작성자를 김가은으로 설정했습니다.
- 로그 이미지 업로드 형식과 SAC 수치 해석 안내를 화면에 추가했습니다.

### 변경된 파일

- 추가: 요구사항 정의서 PDF
- 추가: 화면 설계서 PDF
- 수정: 로그 업로드·대시보드·로그 목록·로그 상세 화면

## 2026-08-18 17:07:48

```text
A	"GANI-Log-\355\231\224\353\251\264\354\204\244\352\263\204\354\204\234.md"
M	"files/8-\354\236\245\353\271\204\352\264\200\353\246\254.html"
M	"files/9-\353\202\264\354\240\225\353\263\264.html"

 ...251\264\354\204\244\352\263\204\354\204\234.md" | 441 +++++++++++++++++++++
 ...6\245\353\271\204\352\264\200\353\246\254.html" |   2 +-
 .../9-\353\202\264\354\240\225\353\263\264.html"   |   4 +-
 3 files changed, 444 insertions(+), 3 deletions(-)
```

## 2026-08-18 20:53:03

### 변경 요약

- Make change log update on every commit

### 변경된 파일

- 수정: `.auto-git-sync.sh`
- 추가: `.githooks/prepare-commit-msg`
- 수정: `README.md`

<details>
<summary>파일별 변경 규모 보기</summary>

```text
 .auto-git-sync.sh            | 22 ----------------
 .githooks/prepare-commit-msg | 62 ++++++++++++++++++++++++++++++++++++++++++++
 README.md                    |  2 +-
 3 files changed, 63 insertions(+), 23 deletions(-)
```

</details>

## 2026-08-18 20:57:10

### 변경 요약

- 로그 작성 3단계에 선택형 다이빙 사진 업로드를 추가했습니다.
- 여러 장의 사진을 미리 보고 개별 제거할 수 있으며, 사진이 없어도 기존 흐름대로 진행할 수 있습니다.
- 선택한 사진은 4단계 확인 화면, 저장된 로그, 친구 공유와 버디 로그의 썸네일에 연결했습니다.

### 변경된 파일

- 수정: `files/prototype.js`
- 수정: `files` 폴더의 HTML 화면 스크립트 버전

## 2026-08-18 20:53:27

### 변경 요약

- 자동 변경 기록 형식 정리

### 변경된 파일

- 수정: `.auto-git-sync.sh`

<details>
<summary>파일별 변경 규모 보기</summary>

```text
 .auto-git-sync.sh | 2 +-
 1 file changed, 1 insertion(+), 1 deletion(-)
```

</details>

## 2026-08-18 20:57:34

### 변경 요약

- 15개 파일의 변경 내용을 저장했습니다.

### 변경된 파일

- 이름 변경: `.githooks/prepare-commit-msg` → `.githooks/pre-commit`
- 수정: `files/1-로그인.html`
- 수정: `files/10-로그작성-3단계.html`
- 수정: `files/11-로그작성-4단계.html`
- 수정: `files/12-친구공유.html`
- 수정: `files/13-버디로그.html`
- 수정: `files/2-회원가입.html`
- 수정: `files/3-연동시작.html`
- 수정: `files/4-로그작성-2단계.html`
- 수정: `files/5-대시보드.html`
- 수정: `files/6-로그목록.html`
- 수정: `files/7-로그상세.html`
- 수정: `files/8-장비관리.html`
- 수정: `files/9-내정보.html`
- 수정: `files/prototype.js`

<details>
<summary>파일별 변경 규모 보기</summary>

```text
 .githooks/{prepare-commit-msg => pre-commit} | 21 +++++------
 files/1-로그인.html                          |  2 +-
 files/10-로그작성-3단계.html                 |  2 +-
 files/11-로그작성-4단계.html                 |  2 +-
 files/12-친구공유.html                       |  2 +-
 files/13-버디로그.html                       |  2 +-
 files/2-회원가입.html                        |  2 +-
 files/3-연동시작.html                        |  2 +-
 files/4-로그작성-2단계.html                  |  2 +-
 files/5-대시보드.html                        |  2 +-
 files/6-로그목록.html                        |  2 +-
 files/7-로그상세.html                        |  2 +-
 files/8-장비관리.html                        |  2 +-
 files/9-내정보.html                          |  2 +-
 files/prototype.js                           | 55 +++++++++++++++++++++++++---
 15 files changed, 72 insertions(+), 30 deletions(-)
```

</details>

<!-- change-id: 885fc0465b0975ad0461b6125b17da516eff20593084a2fbe91f221f51c845b1 -->

## 2026-08-18 20:59:11

### 변경 요약

- 14개 파일의 변경 내용을 저장했습니다.

### 변경된 파일

- 수정: `files/1-로그인.html`
- 수정: `files/10-로그작성-3단계.html`
- 수정: `files/11-로그작성-4단계.html`
- 수정: `files/12-친구공유.html`
- 수정: `files/13-버디로그.html`
- 수정: `files/2-회원가입.html`
- 수정: `files/3-연동시작.html`
- 수정: `files/4-로그작성-2단계.html`
- 수정: `files/5-대시보드.html`
- 수정: `files/6-로그목록.html`
- 수정: `files/7-로그상세.html`
- 수정: `files/8-장비관리.html`
- 수정: `files/9-내정보.html`
- 수정: `files/prototype.js`

<details>
<summary>파일별 변경 규모 보기</summary>

```text
 files/1-로그인.html          | 2 +-
 files/10-로그작성-3단계.html | 2 +-
 files/11-로그작성-4단계.html | 2 +-
 files/12-친구공유.html       | 2 +-
 files/13-버디로그.html       | 2 +-
 files/2-회원가입.html        | 2 +-
 files/3-연동시작.html        | 2 +-
 files/4-로그작성-2단계.html  | 2 +-
 files/5-대시보드.html        | 2 +-
 files/6-로그목록.html        | 2 +-
 files/7-로그상세.html        | 2 +-
 files/8-장비관리.html        | 2 +-
 files/9-내정보.html          | 2 +-
 files/prototype.js           | 3 +++
 14 files changed, 16 insertions(+), 13 deletions(-)
```

</details>

<!-- change-id: 43ed3e70afa1a457d6522847788e12ab66ed2dccd69508d80b15ad0754a17b86 -->

## 2026-08-18 21:00:04

### 변경 요약

- 14개 파일의 변경 내용을 저장했습니다.

### 변경된 파일

- 수정: `files/1-로그인.html`
- 수정: `files/10-로그작성-3단계.html`
- 수정: `files/11-로그작성-4단계.html`
- 수정: `files/12-친구공유.html`
- 수정: `files/13-버디로그.html`
- 수정: `files/2-회원가입.html`
- 수정: `files/3-연동시작.html`
- 수정: `files/4-로그작성-2단계.html`
- 수정: `files/5-대시보드.html`
- 수정: `files/6-로그목록.html`
- 수정: `files/7-로그상세.html`
- 수정: `files/8-장비관리.html`
- 수정: `files/9-내정보.html`
- 수정: `files/prototype.js`

<details>
<summary>파일별 변경 규모 보기</summary>

```text
 files/1-로그인.html          |  2 +-
 files/10-로그작성-3단계.html |  2 +-
 files/11-로그작성-4단계.html |  2 +-
 files/12-친구공유.html       |  2 +-
 files/13-버디로그.html       |  2 +-
 files/2-회원가입.html        |  2 +-
 files/3-연동시작.html        |  2 +-
 files/4-로그작성-2단계.html  |  2 +-
 files/5-대시보드.html        |  2 +-
 files/6-로그목록.html        |  2 +-
 files/7-로그상세.html        |  2 +-
 files/8-장비관리.html        |  2 +-
 files/9-내정보.html          |  2 +-
 files/prototype.js           | 10 +++++++++-
 14 files changed, 22 insertions(+), 14 deletions(-)
```

</details>

<!-- change-id: f305a062e7d688174aeee6d4d5f734b2c859378fbacd7732e8387feb72dd4cd3 -->

## 2026-08-18 21:01:26

### 변경 요약

- 2개 파일의 변경 내용을 저장했습니다.

### 변경된 파일

- 수정: `files/6-로그목록.html`
- 수정: `files/7-로그상세.html`

<details>
<summary>파일별 변경 규모 보기</summary>

```text
 files/6-로그목록.html | 18 ++++++++++++++++++
 files/7-로그상세.html | 16 ++++++++++++++++
 2 files changed, 34 insertions(+)
```

</details>

<!-- change-id: 66ac945da3ba98c75299d6c2c46c10f8a6924215917fa5dcd4725f49e39896f7 -->

## 2026-08-18 21:02:59

### 변경 요약

- 1개 파일의 변경 내용을 저장했습니다.

### 변경된 파일

- 수정: `files/7-로그상세.html`

<details>
<summary>파일별 변경 규모 보기</summary>

```text
 files/7-로그상세.html | 8 ++++----
 1 file changed, 4 insertions(+), 4 deletions(-)
```

</details>

<!-- change-id: 95ca75e8fe78498941478d70f1266a5144a5abfae7c4b9bbcc5d57194d5552bd -->

## 2026-08-18 21:05:09

### 변경 요약

- 1개 파일의 변경 내용을 저장했습니다.

### 변경된 파일

- 수정: `files/7-로그상세.html`

<details>
<summary>파일별 변경 규모 보기</summary>

```text
 files/7-로그상세.html | 43 ++++++++++++++++++++++++++++++++++++++-----
 1 file changed, 38 insertions(+), 5 deletions(-)
```

</details>

<!-- change-id: 4a5483341106dce76594b96f322860cc6f988896512b803b4d7e0a69596a2b0c -->

## 2026-08-18 21:08:04

### 변경 요약

- 14개 파일의 변경 내용을 저장했습니다.

### 변경된 파일

- 수정: `files/1-로그인.html`
- 수정: `files/10-로그작성-3단계.html`
- 수정: `files/11-로그작성-4단계.html`
- 수정: `files/12-친구공유.html`
- 수정: `files/13-버디로그.html`
- 수정: `files/2-회원가입.html`
- 수정: `files/3-연동시작.html`
- 수정: `files/4-로그작성-2단계.html`
- 수정: `files/5-대시보드.html`
- 수정: `files/6-로그목록.html`
- 수정: `files/7-로그상세.html`
- 수정: `files/8-장비관리.html`
- 수정: `files/9-내정보.html`
- 수정: `files/prototype.js`

<details>
<summary>파일별 변경 규모 보기</summary>

```text
 files/1-로그인.html          |  2 +-
 files/10-로그작성-3단계.html |  2 +-
 files/11-로그작성-4단계.html |  2 +-
 files/12-친구공유.html       |  2 +-
 files/13-버디로그.html       |  2 +-
 files/2-회원가입.html        |  2 +-
 files/3-연동시작.html        |  2 +-
 files/4-로그작성-2단계.html  |  2 +-
 files/5-대시보드.html        |  2 +-
 files/6-로그목록.html        |  2 +-
 files/7-로그상세.html        |  2 +-
 files/8-장비관리.html        |  2 +-
 files/9-내정보.html          |  2 +-
 files/prototype.js           | 72 +++++++++++++++++++++++++++++++++++++++++++-
 14 files changed, 84 insertions(+), 14 deletions(-)
```

</details>

<!-- change-id: d8d25257fc7d93a2092e8f0b72b27015f0baa65f7a2789233c1d2b4655b415af -->

## 2026-08-18 21:09:42

### 변경 요약

- 14개 파일의 변경 내용을 저장했습니다.

### 변경된 파일

- 수정: `files/1-로그인.html`
- 수정: `files/10-로그작성-3단계.html`
- 수정: `files/11-로그작성-4단계.html`
- 수정: `files/12-친구공유.html`
- 수정: `files/13-버디로그.html`
- 수정: `files/2-회원가입.html`
- 수정: `files/3-연동시작.html`
- 수정: `files/4-로그작성-2단계.html`
- 수정: `files/5-대시보드.html`
- 수정: `files/6-로그목록.html`
- 수정: `files/7-로그상세.html`
- 수정: `files/8-장비관리.html`
- 수정: `files/9-내정보.html`
- 수정: `files/prototype.js`

<details>
<summary>파일별 변경 규모 보기</summary>

```text
 files/1-로그인.html          |  2 +-
 files/10-로그작성-3단계.html |  2 +-
 files/11-로그작성-4단계.html |  2 +-
 files/12-친구공유.html       |  2 +-
 files/13-버디로그.html       |  2 +-
 files/2-회원가입.html        |  2 +-
 files/3-연동시작.html        |  2 +-
 files/4-로그작성-2단계.html  |  2 +-
 files/5-대시보드.html        |  2 +-
 files/6-로그목록.html        |  2 +-
 files/7-로그상세.html        |  2 +-
 files/8-장비관리.html        |  2 +-
 files/9-내정보.html          | 13 +------------
 files/prototype.js           |  7 +------
 14 files changed, 14 insertions(+), 30 deletions(-)
```

</details>

<!-- change-id: edf624d6d28bed6738ce3f94ad62850b3e3825acff99fdc44e558718a7e265f5 -->

## 2026-08-18 21:11:34

### 변경 요약

- 3개 파일의 변경 내용을 저장했습니다.

### 변경된 파일

- 수정: `README.md`
- 수정: `files/index.html`
- 추가: `files/screens.html`

<details>
<summary>파일별 변경 규모 보기</summary>

```text
 README.md          |   2 +-
 files/index.html   | 216 +++--------------------------------------------------
 files/screens.html | 216 +++++++++++++++++++++++++++++++++++++++++++++++++++++
 3 files changed, 226 insertions(+), 208 deletions(-)
```

</details>

<!-- change-id: 3cdb6f6e181ac412eb7bb6ea27c4bbfd537c6c7f167dd748da060e24e89343ad -->

## 2026-08-18 21:12:53

### 변경 요약

- 14개 파일의 변경 내용을 저장했습니다.

### 변경된 파일

- 수정: `files/1-로그인.html`
- 수정: `files/10-로그작성-3단계.html`
- 수정: `files/11-로그작성-4단계.html`
- 수정: `files/12-친구공유.html`
- 수정: `files/13-버디로그.html`
- 수정: `files/2-회원가입.html`
- 수정: `files/3-연동시작.html`
- 수정: `files/4-로그작성-2단계.html`
- 수정: `files/5-대시보드.html`
- 수정: `files/6-로그목록.html`
- 수정: `files/7-로그상세.html`
- 수정: `files/8-장비관리.html`
- 수정: `files/9-내정보.html`
- 수정: `files/prototype.js`

<details>
<summary>파일별 변경 규모 보기</summary>

```text
 files/1-로그인.html          | 2 +-
 files/10-로그작성-3단계.html | 2 +-
 files/11-로그작성-4단계.html | 2 +-
 files/12-친구공유.html       | 2 +-
 files/13-버디로그.html       | 2 +-
 files/2-회원가입.html        | 2 +-
 files/3-연동시작.html        | 2 +-
 files/4-로그작성-2단계.html  | 2 +-
 files/5-대시보드.html        | 2 +-
 files/6-로그목록.html        | 2 +-
 files/7-로그상세.html        | 2 +-
 files/8-장비관리.html        | 2 +-
 files/9-내정보.html          | 2 +-
 files/prototype.js           | 5 ++++-
 14 files changed, 17 insertions(+), 14 deletions(-)
```

</details>

<!-- change-id: aaf3a55c451217a6831ec3a2e0857147106b10ba660d2fec1b3068330c2e3354 -->

## 2026-08-19 09:11:05

### 변경 요약

- 14개 파일의 변경 내용을 저장했습니다.

### 변경된 파일

- 수정: `files/1-로그인.html`
- 수정: `files/10-로그작성-3단계.html`
- 수정: `files/11-로그작성-4단계.html`
- 수정: `files/12-친구공유.html`
- 수정: `files/13-버디로그.html`
- 수정: `files/2-회원가입.html`
- 수정: `files/3-연동시작.html`
- 수정: `files/4-로그작성-2단계.html`
- 수정: `files/5-대시보드.html`
- 수정: `files/6-로그목록.html`
- 수정: `files/7-로그상세.html`
- 수정: `files/8-장비관리.html`
- 수정: `files/9-내정보.html`
- 수정: `files/prototype.js`

<details>
<summary>파일별 변경 규모 보기</summary>

```text
 files/1-로그인.html          |  2 +-
 files/10-로그작성-3단계.html |  2 +-
 files/11-로그작성-4단계.html |  2 +-
 files/12-친구공유.html       |  2 +-
 files/13-버디로그.html       |  2 +-
 files/2-회원가입.html        |  2 +-
 files/3-연동시작.html        |  2 +-
 files/4-로그작성-2단계.html  |  2 +-
 files/5-대시보드.html        |  2 +-
 files/6-로그목록.html        |  8 +++++++-
 files/7-로그상세.html        |  4 ++--
 files/8-장비관리.html        |  2 +-
 files/9-내정보.html          |  2 +-
 files/prototype.js           | 32 +++++++++++++++++++++++++++++---
 14 files changed, 49 insertions(+), 17 deletions(-)
```

</details>

<!-- change-id: 31c3ccb84daae14faf6937ab2d9f3fc0b1d8de4cfe1b79f0c2247ca0c44b8136 -->

## 2026-08-19 09:15:54

### 변경 요약

- 2개 파일의 변경 내용을 저장했습니다.

### 변경된 파일

- 수정: `files/6-로그목록.html`
- 수정: `files/7-로그상세.html`

<details>
<summary>파일별 변경 규모 보기</summary>

```text
 files/6-로그목록.html | 12 ++++++++++++
 files/7-로그상세.html | 20 ++++++++++++++++++++
 2 files changed, 32 insertions(+)
```

</details>

<!-- change-id: 8bd1a2500a5fc87d91b2333449b4c1b31b2c8064bb08cc6b523488497432e7b0 -->

## 2026-08-19 09:19:21

### 변경 요약

- 14개 파일의 변경 내용을 저장했습니다.

### 변경된 파일

- 수정: `files/1-로그인.html`
- 수정: `files/10-로그작성-3단계.html`
- 수정: `files/11-로그작성-4단계.html`
- 수정: `files/12-친구공유.html`
- 수정: `files/13-버디로그.html`
- 수정: `files/2-회원가입.html`
- 수정: `files/3-연동시작.html`
- 수정: `files/4-로그작성-2단계.html`
- 수정: `files/5-대시보드.html`
- 수정: `files/6-로그목록.html`
- 수정: `files/7-로그상세.html`
- 수정: `files/8-장비관리.html`
- 수정: `files/9-내정보.html`
- 수정: `files/prototype.js`

<details>
<summary>파일별 변경 규모 보기</summary>

```text
 files/1-로그인.html          |  2 +-
 files/10-로그작성-3단계.html |  2 +-
 files/11-로그작성-4단계.html |  2 +-
 files/12-친구공유.html       |  2 +-
 files/13-버디로그.html       |  2 +-
 files/2-회원가입.html        |  2 +-
 files/3-연동시작.html        |  2 +-
 files/4-로그작성-2단계.html  |  2 +-
 files/5-대시보드.html        |  2 +-
 files/6-로그목록.html        |  8 +++++++-
 files/7-로그상세.html        | 26 +++++++++++++++++++++++++-
 files/8-장비관리.html        |  2 +-
 files/9-내정보.html          |  2 +-
 files/prototype.js           |  9 +++++++--
 14 files changed, 50 insertions(+), 15 deletions(-)
```

</details>

<!-- change-id: 4dc45dc518c7517cc276bf60c2a9243f7cc661278dd1ac41799b91b16eb906d5 -->

## 2026-08-19 09:22:04

### 변경 요약

- 1개 파일의 변경 내용을 저장했습니다.

### 변경된 파일

- 수정: `files/7-로그상세.html`

<details>
<summary>파일별 변경 규모 보기</summary>

```text
 files/7-로그상세.html | 14 +++++++++++++-
 1 file changed, 13 insertions(+), 1 deletion(-)
```

</details>

<!-- change-id: 509cd18c5188abb3d7235c145fe643f0378860b86e50f888aeccac7f445d8d83 -->

## 2026-08-19 09:25:58

### 변경 요약

- 14개 파일의 변경 내용을 저장했습니다.

### 변경된 파일

- 수정: `files/1-로그인.html`
- 수정: `files/10-로그작성-3단계.html`
- 수정: `files/11-로그작성-4단계.html`
- 수정: `files/12-친구공유.html`
- 수정: `files/13-버디로그.html`
- 수정: `files/2-회원가입.html`
- 수정: `files/3-연동시작.html`
- 수정: `files/4-로그작성-2단계.html`
- 수정: `files/5-대시보드.html`
- 수정: `files/6-로그목록.html`
- 수정: `files/7-로그상세.html`
- 수정: `files/8-장비관리.html`
- 수정: `files/9-내정보.html`
- 수정: `files/prototype.js`

<details>
<summary>파일별 변경 규모 보기</summary>

```text
 files/1-로그인.html          |  2 +-
 files/10-로그작성-3단계.html |  2 +-
 files/11-로그작성-4단계.html |  2 +-
 files/12-친구공유.html       |  2 +-
 files/13-버디로그.html       |  2 +-
 files/2-회원가입.html        |  2 +-
 files/3-연동시작.html        |  2 +-
 files/4-로그작성-2단계.html  |  2 +-
 files/5-대시보드.html        |  2 +-
 files/6-로그목록.html        |  2 +-
 files/7-로그상세.html        | 14 +++++++++++++-
 files/8-장비관리.html        |  2 +-
 files/9-내정보.html          |  2 +-
 files/prototype.js           | 18 ++++++++++++++++--
 14 files changed, 41 insertions(+), 15 deletions(-)
```

</details>

<!-- change-id: f3018e4e427e9bf8d36a9fcb1b710c45e6afa842fafff761e47f0dda44724756 -->
