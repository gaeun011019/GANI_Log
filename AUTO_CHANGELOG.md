# Automatic change log

프로젝트에서 무엇을 바꿨는지 계속 확인할 수 있는 자동 변경 기록입니다.
자동 업로드와 직접 만든 커밋 모두 변경 요약, 파일 목록, 변경 규모를 함께 기록합니다.
세부 코드는 같은 커밋의 GitHub diff에서 확인할 수 있습니다.

## 2026-08-19 12:05:00

### 변경 요약

- 화면 설계서를 v1.3으로 올리고 13개 화면별 상세 설계에 실제 HTML 프로토타입 캡처를 추가했습니다.
- 로그인, 회원가입, 로그 작성 4단계, 대시보드, 로그 목록·상세, 장비 관리, 내 정보, 친구·공유와 버디 로그 화면을 각 화면 ID에 맞춰 연결했습니다.
- 화면별 페이지에서 캡처 다음에 기본 정보, UI 동작 설명과 예외 처리가 이어지도록 화면 설계서 PDF를 22페이지로 다시 만들었습니다.

### 변경된 파일

- 수정: `GANI-Log-화면설계서.md`
- 수정: `output/pdf/GANI_Log_화면_설계서.pdf`
- 추가: `docs/screenshots/` 화면 캡처 13개

## 2026-08-19 11:40:27

### 변경 요약

- 요구사항 정의서와 화면 설계서 PDF를 최신 MD 문서 v1.2 기준으로 다시 만들었습니다.
- 두 PDF의 작성자를 김가은으로 설정하고 문서명, 페이지 번호와 반복 표 머리글을 적용했습니다.
- 요구사항 정의서 8페이지와 화면 설계서 12페이지를 모두 렌더링해 한글, 표, 페이지 분할과 내용 누락 여부를 확인했습니다.

### 변경된 파일

- 수정: `output/pdf/GANI_Log_요구사항_정의서.pdf`
- 수정: `output/pdf/GANI_Log_화면_설계서.pdf`

## 2026-08-19 11:26:43

### 변경 요약

- 화면 설계서를 구현 전 단계의 제출 문서에 맞춰 v1.2로 수정했습니다.
- 구현 과정과 현재 프로토타입 상태를 설명하던 문구를 제거하고 화면 동작 중심으로 정리했습니다.
- 회원가입과 로그 저장 완료 후 대시보드로 이동하도록 화면 흐름을 통일했습니다.
- 사이드바 메뉴, 장비 종류 예시, 친구·공유 및 버디 로그의 상세 이동과 자격증 판독 확인 흐름을 수정했습니다.

### 변경된 파일

- 수정: `GANI-Log-화면설계서.md`

## 2026-08-19 10:51:22

### 변경 요약

- 요구사항 정의서를 구현 전 단계의 제출 문서에 맞게 v1.2로 수정했습니다.
- 기능 요구사항 18개에서 `현재 구현` 항목을 모두 제거했습니다.
- HTML 화면은 기능 구현 결과가 아니라 요구사항과 화면 흐름을 확인하기 위한 프로토타입임을 명시했습니다.
- 기능 목적, 입력·처리·출력, 검증 조건과 화면 추적 관계는 유지했습니다.

### 변경된 파일

- 수정: `GANI-Log-요구사항정의서.md`

## 2026-08-19 10:18:37

### 변경 요약

- DBML 데이터 모델을 OpenAPI 1.1.0과 최신 요구사항에 맞춰 수정했습니다.
- 사용자별 다음 로그 번호와 로그별 번호 유일성 제약을 추가했습니다.
- 공기·나이트록스와 산소 비율, 날씨·파도, 직접 입력 버디를 저장할 구조와 검증 조건을 반영했습니다.
- 자격증 이미지 분석 이력과 로그 사진 테이블을 추가하고 기존 사용자·로그 테이블과 관계를 연결했습니다.

### 변경된 파일

- 수정: `database/GANI_Log.dbml`

## 2026-08-19 10:13:40

### 변경 요약

- OpenAPI 명세를 현재 요구사항에 맞춰 1.1.0으로 갱신했습니다.
- 로그 번호 설정, 자격증 이미지 분석 요청, 로그 사진 첨부·삭제 API를 추가했습니다.
- 기체 종류·산소 비율, 날씨·파도, 직접 입력 버디, 사진과 대표 사진 정보를 로그 데이터 모델에 반영했습니다.
- 로그 목록의 장비·날씨·조류 검색 조건과 공유 피드의 공개 범위 필터를 추가했습니다.

### 변경된 파일

- 수정: `api/openapi.yaml`

## 2026-08-19 09:47:09

### 변경 요약

- 현재 구현과 화면 설계서 v1.1을 기준으로 요구사항 정의서 MD 파일을 만들었습니다.
- 기능 요구사항 18개의 목적, 입력, 처리, 출력, 검증 조건, 관련 화면과 현재 구현 상태를 구분해 작성했습니다.
- 프론트엔드에서 확인 가능한 기능과 실제 인증·DB·블루투스·파일 분석·AI 판독처럼 아직 구현되지 않은 범위를 분리했습니다.
- 비기능 요구사항 8개, 데이터 검증 규칙, 화면 추적성과 이후 확인 항목을 포함했습니다.

### 변경된 파일

- 추가: `GANI-Log-요구사항정의서.md`

## 2026-08-19 09:41:24

### 변경 요약

- 화면 설계서를 현재 HTML 프로토타입 기준 v1.1로 수정했습니다.
- 로그 상세에 버디·공개 범위, 사진, 수심·시간, 바다 환경, 사용 장비, 탱크·기체, SAC·RMV, 웨이트, 메모와 유사 로그 이동 설계를 반영했습니다.
- 친구·공유와 버디 로그 화면을 추가하고 사진 첨부, 로그 번호 설정 요구사항과 화면 추적 관계를 정리했습니다.
- 내 정보의 자격증 이미지 기능은 실제 AI 판독이 아닌 프론트엔드 확인·저장 프로토타입임을 명시했습니다.

### 변경된 파일

- 수정: `GANI-Log-화면설계서.md`

## 2026-08-19 09:36:57

### 변경 요약

- 로그 상세 목업 데이터를 현재 로그 작성 기능에 맞춰 채웠습니다.
- 날씨, 조류, 시야, 파도 값을 표시하고 탱크 용량·압력·기체 종류·산소 비율을 `탱크 · 기체` 카테고리로 묶었습니다.
- 웨이트 상태와 다이빙 메모 영역을 추가하고 사진 영역에서 첨부 수를 확인할 수 있게 했습니다.
- 등록 친구인 박민지와 직접 입력한 버디인 현지 가이드를 구분해 함께 표시했습니다.

### 변경된 파일

- 수정: `files/7-로그상세.html`

## 2026-08-19 09:35:01

### 변경 요약

- 로그 상세의 유사 조건 과거 로그 두 항목을 클릭할 수 있게 연결했습니다.
- `07.02 유사 다이빙`과 `05.19 유사 다이빙`을 누르면 선택한 날짜와 SAC 값이 표시되는 해당 로그 상세 화면으로 이동합니다.
- 마우스뿐 아니라 키보드의 Enter 또는 Space 키로도 이동할 수 있게 했습니다.

### 변경된 파일

- 수정: `files/7-로그상세.html`
- 수정: `files/prototype.js`

## 2026-08-19 09:32:35

### 변경 요약

- 로그 상세 화면에 `사용 장비` 카테고리를 추가했습니다.
- 기존에 로그 작성 화면에서 제공하던 등록 장비 예시를 슈트, BCD, 마스크, 핀으로 나눠 한눈에 볼 수 있게 했습니다.

### 변경된 파일

- 수정: `files/7-로그상세.html`

## 2026-08-19 09:29:49

### 변경 요약

- 로그 상세 정보를 `수심 · 시간`과 `바다 환경` 카테고리로 나눴습니다.
- 최대 수심과 평균 수심을 같은 줄에 배치해 두 값을 바로 비교할 수 있게 했습니다.
- 다이빙 시간과 수온은 수심 정보와 함께, 수역·날씨·조류·시야·파도는 바다 환경 정보로 묶었습니다.

### 변경된 파일

- 수정: `files/7-로그상세.html`

## 2026-08-19 09:26:57

### 변경 요약

- 로그 작성 3단계에 기체 종류를 공기 또는 나이트록스로 선택하는 항목을 추가했습니다.
- 공기는 산소 21%를 자동 적용하고, 나이트록스는 산소 비율 입력란이 나타나도록 했습니다.
- 4단계 확인 화면에서 기체 종류와 산소 비율을 확인할 수 있게 했습니다.
- 로그 상세 지표 영역에 기체 종류 표시 카드를 추가하고 기존 로그는 `입력 안 함`으로 표시했습니다.

### 변경된 파일

- 수정: `files/prototype.js`
- 수정: `files/7-로그상세.html`

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

## 2026-08-19 09:27:28

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
 files/7-로그상세.html        | 10 ++++++++--
 files/8-장비관리.html        |  2 +-
 files/9-내정보.html          |  2 +-
 files/prototype.js           | 23 +++++++++++++++++++++--
 14 files changed, 41 insertions(+), 16 deletions(-)
```

</details>

<!-- change-id: 4e2747d3aa5f927f61d1e54ac2fae46c801ec2a7e9992dab7a1d752eb1d51eb3 -->

## 2026-08-19 09:30:27

### 변경 요약

- 1개 파일의 변경 내용을 저장했습니다.

### 변경된 파일

- 수정: `files/7-로그상세.html`

<details>
<summary>파일별 변경 규모 보기</summary>

```text
 files/7-로그상세.html | 83 ++++++++++++++++++++++++++++-----------------------
 1 file changed, 46 insertions(+), 37 deletions(-)
```

</details>

<!-- change-id: de6748115e1d7ccc4e1dc91d9287da14cca37e0cab27c50f1b836b1c2f3593c6 -->

## 2026-08-19 09:33:20

### 변경 요약

- 1개 파일의 변경 내용을 저장했습니다.

### 변경된 파일

- 수정: `files/7-로그상세.html`

<details>
<summary>파일별 변경 규모 보기</summary>

```text
 files/7-로그상세.html | 31 +++++++++++++++++++++++++++++++
 1 file changed, 31 insertions(+)
```

</details>

<!-- change-id: 53c66ca6a456ba76fc041d59d09033d57573e463fef74707dde1c18cf315ef83 -->

## 2026-08-19 09:35:36

### 변경 요약

- 2개 파일의 변경 내용을 저장했습니다.

### 변경된 파일

- 수정: `files/7-로그상세.html`
- 수정: `files/prototype.js`

<details>
<summary>파일별 변경 규모 보기</summary>

```text
 files/7-로그상세.html | 12 +++++++-----
 files/prototype.js    | 27 +++++++++++++++++++++++++++
 2 files changed, 34 insertions(+), 5 deletions(-)
```

</details>

<!-- change-id: b145210248272f156b043103f8f3befe37c2b0ad5edc9de64108463a59ca172d -->

## 2026-08-19 09:37:31

### 변경 요약

- 1개 파일의 변경 내용을 저장했습니다.

### 변경된 파일

- 수정: `files/7-로그상세.html`

<details>
<summary>파일별 변경 규모 보기</summary>

```text
 files/7-로그상세.html | 52 ++++++++++++++++++++++++++++++++++++---------------
 1 file changed, 37 insertions(+), 15 deletions(-)
```

</details>

<!-- change-id: 2eabd928a6465b3227089e4fcd9c6a12174e026c83c1bcbb388a7612f610144d -->

## 2026-08-19 09:43:16

### 변경 요약

- 1개 파일의 변경 내용을 저장했습니다.

### 변경된 파일

- 수정: `GANI-Log-화면설계서.md`

<details>
<summary>파일별 변경 규모 보기</summary>

```text
 GANI-Log-화면설계서.md | 143 +++++++++++++++++++++++++++++++++++--------------
 1 file changed, 104 insertions(+), 39 deletions(-)
```

</details>

<!-- change-id: 0fb0a5df63d25f50900e3bafcb3cb2d94a08df116e31e5f0e5f379ecd88ce192 -->

## 2026-08-19 09:48:55

### 변경 요약

- 1개 파일의 변경 내용을 저장했습니다.

### 변경된 파일

- 추가: `GANI-Log-요구사항정의서.md`

<details>
<summary>파일별 변경 규모 보기</summary>

```text
 GANI-Log-요구사항정의서.md | 335 +++++++++++++++++++++++++++++++++++++++++++++
 1 file changed, 335 insertions(+)
```

</details>

<!-- change-id: 4ab92ef346645f26248574b25a67167f996a380f3aeb8cf9ae8c8c93effd82ef -->

## 2026-08-19 10:01:35

```text
M	"GANI-Log-\355\231\224\353\251\264\354\204\244\352\263\204\354\204\234.md"

 ...\224\353\251\264\354\204\244\352\263\204\354\204\234.md" | 13 ++-----------
 1 file changed, 2 insertions(+), 11 deletions(-)
```

## 2026-08-19 10:01:35

### 변경 요약

- 1개 파일의 변경 내용을 저장했습니다.

### 변경된 파일

- 수정: `GANI-Log-화면설계서.md`

<details>
<summary>파일별 변경 규모 보기</summary>

```text
 GANI-Log-화면설계서.md | 13 ++-----------
 1 file changed, 2 insertions(+), 11 deletions(-)
```

</details>

<!-- change-id: 2104af530c2897d9f1748ab87718a980ffc433b0a506aa47bad06b9b51cf2c46 -->

## 2026-08-19 10:14:49

### 변경 요약

- 1개 파일의 변경 내용을 저장했습니다.

### 변경된 파일

- 수정: `api/openapi.yaml`

<details>
<summary>파일별 변경 규모 보기</summary>

```text
 api/openapi.yaml | 322 +++++++++++++++++++++++++++++++++++++++++++++++++++++--
 1 file changed, 313 insertions(+), 9 deletions(-)
```

</details>

<!-- change-id: 108acde8515b9a41aa8569cd785d194d6206c29c5568bd544c7d9eeba2d8a90d -->

## 2026-08-19 10:21:16

### 변경 요약

- 1개 파일의 변경 내용을 저장했습니다.

### 변경된 파일

- 수정: `database/GANI_Log.dbml`

<details>
<summary>파일별 변경 규모 보기</summary>

```text
 database/GANI_Log.dbml | 125 +++++++++++++++++++++++++++++++++++++++++++------
 1 file changed, 110 insertions(+), 15 deletions(-)
```

</details>

<!-- change-id: e5d4c0f346e0eeed4f33fd67bfe9c82477908ab7ee3f81caad8a282f639fc8c2 -->

## 2026-08-19 10:52:10

### 변경 요약

- 1개 파일의 변경 내용을 저장했습니다.

### 변경된 파일

- 수정: `GANI-Log-요구사항정의서.md`

<details>
<summary>파일별 변경 규모 보기</summary>

```text
 GANI-Log-요구사항정의서.md | 34 ++++++++--------------------------
 1 file changed, 8 insertions(+), 26 deletions(-)
```

</details>

<!-- change-id: cdbdfe07212e0f1a1f794c62d75e48cfc7a93d429f5760d004c6b2daa02877b8 -->

## 2026-08-19 11:27:21

### 변경 요약

- 1개 파일의 변경 내용을 저장했습니다.

### 변경된 파일

- 수정: `GANI-Log-화면설계서.md`

<details>
<summary>파일별 변경 규모 보기</summary>

```text
 GANI-Log-화면설계서.md | 42 +++++++++++++++++++-----------------------
 1 file changed, 19 insertions(+), 23 deletions(-)
```

</details>

<!-- change-id: fc20a80a668a204384c5234e8bb2816d8f3be82d782c830bd72089323c253ff5 -->

## 2026-08-19 11:41:43

### 변경 요약

- 2개 파일의 변경 내용을 저장했습니다.

### 변경된 파일

- 수정: `output/pdf/GANI_Log_요구사항_정의서.pdf`
- 수정: `output/pdf/GANI_Log_화면_설계서.pdf`

<details>
<summary>파일별 변경 규모 보기</summary>

```text
 output/pdf/GANI_Log_요구사항_정의서.pdf | Bin 126200 -> 134050 bytes
 output/pdf/GANI_Log_화면_설계서.pdf     | Bin 511529 -> 165627 bytes
 2 files changed, 0 insertions(+), 0 deletions(-)
```

</details>

<!-- change-id: df8eba3390c19beaba2059aa40c5188dd433b437bbc98b2cc7c22744153f402a -->

## 2026-08-19 13:28:26

### 변경 요약

- 15개 파일의 변경 내용을 저장했습니다.

### 변경된 파일

- 수정: `GANI-Log-화면설계서.md`
- 추가: `docs/screenshots/SCR-AUTH-001-login.png`
- 추가: `docs/screenshots/SCR-AUTH-002-signup.png`
- 추가: `docs/screenshots/SCR-EQP-001-equipment.png`
- 추가: `docs/screenshots/SCR-LOG-001-review.png`
- 추가: `docs/screenshots/SCR-LOG-002-extra.png`
- 추가: `docs/screenshots/SCR-LOG-003-final.png`
- 추가: `docs/screenshots/SCR-LOG-004-list.png`
- 추가: `docs/screenshots/SCR-LOG-005-detail.png`
- 추가: `docs/screenshots/SCR-MAIN-001-dashboard.png`
- 추가: `docs/screenshots/SCR-MY-001-profile.png`
- 추가: `docs/screenshots/SCR-SOCIAL-001-friends.png`
- 추가: `docs/screenshots/SCR-SOCIAL-002-logs.png`
- 추가: `docs/screenshots/SCR-SYNC-001-connect.png`
- 수정: `output/pdf/GANI_Log_화면_설계서.pdf`

<details>
<summary>파일별 변경 규모 보기</summary>

```text
 GANI-Log-화면설계서.md                      |  55 +++++++++++++++++++++++++++-
 docs/screenshots/SCR-AUTH-001-login.png     | Bin 0 -> 21838 bytes
 docs/screenshots/SCR-AUTH-002-signup.png    | Bin 0 -> 27267 bytes
 docs/screenshots/SCR-EQP-001-equipment.png  | Bin 0 -> 31642 bytes
 docs/screenshots/SCR-LOG-001-review.png     | Bin 0 -> 42649 bytes
 docs/screenshots/SCR-LOG-002-extra.png      | Bin 0 -> 87475 bytes
 docs/screenshots/SCR-LOG-003-final.png      | Bin 0 -> 73630 bytes
 docs/screenshots/SCR-LOG-004-list.png       | Bin 0 -> 62034 bytes
 docs/screenshots/SCR-LOG-005-detail.png     | Bin 0 -> 148778 bytes
 docs/screenshots/SCR-MAIN-001-dashboard.png | Bin 0 -> 57434 bytes
 docs/screenshots/SCR-MY-001-profile.png     | Bin 0 -> 76919 bytes
 docs/screenshots/SCR-SOCIAL-001-friends.png | Bin 0 -> 56100 bytes
 docs/screenshots/SCR-SOCIAL-002-logs.png    | Bin 0 -> 36225 bytes
 docs/screenshots/SCR-SYNC-001-connect.png   | Bin 0 -> 39727 bytes
 output/pdf/GANI_Log_화면_설계서.pdf         | Bin 165627 -> 975790 bytes
 15 files changed, 54 insertions(+), 1 deletion(-)
```

</details>

<!-- change-id: b26f64d42bf8eb80210c1359d7236adb9445465ee68533b30756225bdfe0d21d -->
