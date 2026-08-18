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
  const storageKey = "gani-log-equipment";
  const form = document.querySelector("#equipment-form");
  const openButton = document.querySelector("#open-equipment-form-button");
  const cancelButton = document.querySelector("#cancel-equipment-button");
  const addCard = document.querySelector("#equipment-add-card");
  const grid = document.querySelector("#equipment-grid");
  const nameInput = document.querySelector("#equipment-name-input");
  const typeInput = document.querySelector("#equipment-type-input");
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
    type.textContent = `종류: ${equipment.type}`;

    card.append(icon, name, type);
    grid.insertBefore(card, addCard);
  }

  let equipmentList = readEquipment();
  equipmentList.forEach(createEquipmentCard);

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
    errorText.textContent = "";
  }

  makeClickable(openButton, openForm);
  makeClickable(addCard, openForm);
  cancelButton.addEventListener("click", closeForm);

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const equipment = {
      name: nameInput.value.trim(),
      type: typeInput.value,
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
