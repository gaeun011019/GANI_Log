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
sidebarDotStyle.textContent = ".sidelink .dot{width:8px;height:8px;flex:0 0 8px;border-radius:50%;background:currentColor;display:inline-block}.gani-logo{height:34px!important;margin:0 0 20px!important;display:flex;align-items:center}.gani-logo img{display:block;width:136px;height:34px}";
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
  makeClickable(buttonNamed("가입하기"), () => goTo("3-연동시작.html"));
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
  const ids = ["tank-volume", "weight", "start-pressure", "end-pressure", "equipment", "weight-state", "water", "current", "memo", "visibility"];
  const saved = JSON.parse(sessionStorage.getItem("gani-log-draft") || "{}");
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
  ids.forEach((id) => {
    const field = document.querySelector(`#${id}`);
    if (field && saved[id] != null) field.value = saved[id];
  });
  const friendList = document.querySelector("#buddy-list");
  const friends = getFriends();
  const savedBuddies = Array.isArray(saved.buddyUserIds) ? saved.buddyUserIds : [];
  friendList.innerHTML = friends.map((friend) => `<label class="buddy-option"><input type="checkbox" name="buddy" value="${friend.id}" ${savedBuddies.includes(friend.id) ? "checked" : ""}><span>${friend.name}<small>${friend.email}</small></span></label>`).join("");
  makeClickable(document.querySelector("#log-step3-back"), () => goTo("4-로그작성-2단계.html"));
  form?.addEventListener("submit", (event) => {
    event.preventDefault();
    const start = Number(document.querySelector("#start-pressure").value);
    const end = Number(document.querySelector("#end-pressure").value);
    if (!form.checkValidity()) { form.reportValidity(); return; }
    if (end >= start) { error.textContent = "종료 압력은 시작 압력보다 작아야 합니다."; return; }
    const draft = Object.fromEntries(ids.map((id) => [id, document.querySelector(`#${id}`).value]));
    draft.buddyUserIds = [...document.querySelectorAll('input[name="buddy"]:checked')].map((input) => input.value);
    draft.buddyNames = friends.filter((friend) => draft.buddyUserIds.includes(friend.id)).map((friend) => friend.name);
    sessionStorage.setItem("gani-log-draft", JSON.stringify(draft));
    goTo("11-로그작성-4단계.html");
  });
}

if (title === "로그 작성 - 4단계") {
  const draft = JSON.parse(sessionStorage.getItem("gani-log-draft") || "{}");
  const labels = [["tank-volume", "탱크 용량", "L"], ["start-pressure", "시작 압력", "bar"], ["end-pressure", "종료 압력", "bar"], ["weight", "웨이트", "kg"], ["equipment", "장비", ""], ["weight-state", "웨이트 상태", ""], ["water", "수역", ""], ["current", "조류", ""]];
  const summary = document.querySelector("#log-summary");
  summary.innerHTML = labels.map(([key, label, unit]) => `<div class="row"><span>${label}</span><span>${draft[key] ? `${draft[key]}${unit ? ` ${unit}` : ""}` : "입력 안 함"}</span></div>`).join("");
  const visibilityNames = { private: "나만 보기", friends: "친구 공개", public: "전체 공개" };
  summary.insertAdjacentHTML("beforeend", `<div class="row"><span>함께한 버디</span><span>${draft.buddyNames?.join(", ") || "선택 안 함"}</span></div><div class="row"><span>공개 범위</span><span>${visibilityNames[draft.visibility] || "나만 보기"}</span></div>`);
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
    logs.push({ id: `log-${Date.now()}`, ownerId: currentUser.id, ownerName: currentUser.name, ...draft, visibility: draft.visibility || "private", createdAt: new Date().toISOString() });
    localStorage.setItem("gani-log-records", JSON.stringify(logs));
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
    feedList.innerHTML = [...ownShared, ...examples].map((log) => `<article class="log-card"><span class="scope ${log.visibility}">${names[log.visibility]}</span><h3>${log.point || "새 다이빙 로그"}</h3><p>${log.ownerName || currentUser.name} · ${new Date(log.createdAt).toLocaleDateString("ko-KR")}</p>${log.buddyNames?.length ? `<p>함께한 버디: ${log.buddyNames.join(", ")}</p>` : ""}</article>`).join("");
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
    feedList.innerHTML = visibleLogs.length ? visibleLogs.map((log) => `<article class="buddy-card"><div class="card-head"><span class="avatar">${(log.ownerName || currentUser.name).slice(0, 1)}</span><div><strong>${log.ownerName || currentUser.name}</strong><small>${new Date(log.createdAt).toLocaleDateString("ko-KR")}</small></div><span class="scope ${log.visibility}">${visibilityNames[log.visibility]}</span></div><h2>${log.point || "새 다이빙 로그"}</h2><p>${log.buddyNames?.length ? `함께한 버디: ${log.buddyNames.join(", ")}` : "등록된 버디 없음"}</p></article>`).join("") : '<p class="empty">조건에 맞는 버디 로그가 없습니다.</p>';
  }

  filter.addEventListener("change", renderBuddyLogs);
  renderBuddyLogs();
}
