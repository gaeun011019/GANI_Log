const pageByMenu = {
  대시보드: "5-대시보드.html",
  "로그 목록": "6-로그목록.html",
  "장비 관리": "8-장비관리.html",
  "내 정보": "9-내정보.html",
};

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

document.querySelectorAll(".sidelink").forEach((link) => {
  const destination = pageByMenu[link.textContent.trim()];
  if (destination) makeClickable(link, () => goTo(destination));
});

const title = document.title;
const buttons = [...document.querySelectorAll("button")];
const buttonNamed = (name) =>
  buttons.find((button) => button.textContent.trim() === name);

if (title === "로그인") {
  makeClickable(buttonNamed("로그인"), () => goTo("5-대시보드.html"));
  makeClickable(document.querySelector("p span"), () =>
    goTo("2-회원가입.html"),
  );
}

if (title === "회원가입") {
  makeClickable(buttonNamed("가입하기"), () => goTo("3-연동시작.html"));
  makeClickable(document.querySelector("p span"), () => goTo("1-로그인.html"));
}

if (title === "연동 시작") {
  makeClickable(buttonNamed("취소"), () => goTo("5-대시보드.html"));
  makeClickable(buttonNamed("다음"), () => goTo("4-로그작성-2단계.html"));
}

if (title === "로그 작성 - 2단계") {
  makeClickable(buttonNamed("이전"), () => goTo("3-연동시작.html"));
  makeClickable(buttonNamed("다음"), () => goTo("5-대시보드.html"));
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

if (title === "장비 관리") {
  const addButton = buttonNamed("+ 장비 등록");
  const addCard = [...document.querySelectorAll(".content-area div")].find(
    (element) => element.textContent.trim() === "+ 장비 추가",
  );
  const showPrototypeNotice = () =>
    window.alert("장비 등록 기능은 아직 화면 시안 단계입니다.");
  makeClickable(addButton, showPrototypeNotice);
  makeClickable(addCard, showPrototypeNotice);
}

if (title === "내 정보") {
  makeClickable(buttonNamed("정보 수정"), () =>
    window.alert("정보 수정 기능은 아직 화면 시안 단계입니다."),
  );
}
