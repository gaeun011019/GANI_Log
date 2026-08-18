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
  const storageKey = "gani-log-profile";
  const form = document.querySelector("#profile-form");
  const editButton = document.querySelector("#edit-profile-button");
  const cancelButton = document.querySelector("#cancel-profile-button");
  const nameInput = document.querySelector("#profile-name-input");
  const emailInput = document.querySelector("#profile-email-input");
  const certificationInput = document.querySelector(
    "#profile-certification-input",
  );
  const nameText = document.querySelector("#profile-name");
  const emailText = document.querySelector("#profile-email");
  const certificationText = document.querySelector("#profile-certification");
  const avatar = document.querySelector("#profile-avatar");
  const errorText = document.querySelector("#profile-form-error");

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
    certificationInput.value = profile.certification;
    errorText.textContent = "";
  }

  let profile = readProfile();
  renderProfile(profile);

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
    const certification = certificationInput.value.trim();

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

    profile = { name, email, certification };
    localStorage.setItem(storageKey, JSON.stringify(profile));
    renderProfile(profile);
    form.classList.remove("open");
    editButton.hidden = false;
  });
}
