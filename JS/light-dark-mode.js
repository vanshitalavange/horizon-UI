let btnLightMode = document.querySelector(".btn-light-mode");
let btnDarkMode = document.querySelector(".btn-dark-mode");
let body = document.querySelector("body");
const docsPagesLocation = [
  "/docs/docs-layout/docs.html",
  "/docs/typography/text-utilities.html",
  "/docs/alerts/alerts.html",
  "/docs/avatars/avatar.html",
  "/docs/badges/badges.html",
  "/docs/buttons/buttons.html",
  "/docs/cards/cards.html",
  "/docs/grid/grid.html",
  "/docs/image/image.html",
  "/docs/inputs/input.html",
  "/docs/ratings/rating.html",
];
const changeBtnOutlineColor = (mode) => {
  let btnOutline = document.querySelectorAll(".btn-outline");
  if (mode === "light") {
    btnOutline.forEach((btn) => (btn.style.color = "var(--black-color)"));
  } else if (mode === "dark") {
    btnOutline.forEach((btn) => (btn.style.color = "var(--white-color)"));
  }
};
const changeBadgeTextColor = (mode) => {
  let textBadge = document.querySelectorAll(".badge-text-content");
  if(mode === "light"){
    textBadge.forEach(text => text.style.color = "var(--black-color)");
  }else if(mode === "dark"){
    textBadge.forEach(text => text.style.color = "var(--white-color)");
  }
}
btnLightMode.addEventListener("click", () => {
  localStorage.mode = "light";
  checkSelectedMode(localStorage.mode);
});

btnDarkMode.addEventListener("click", () => {
  localStorage.mode = "dark";
  checkSelectedMode(localStorage.mode);
});

const changeToLightMode = () => {
  body.style.backgroundColor = "var(--white-color)";
  body.style.color = "var(--light-theme-text-color)";
  if (location.pathname === "/index.html") {
    let btnGetStarted = document.querySelector(".btn");
    btnGetStarted.style.boxShadow = "none";
  }
  if (docsPagesLocation.includes(location.pathname)) {
    let activeComponent = document.querySelector(".active");
    let componentWrapper = document.querySelectorAll(".wrapper");
    let sidebar = document.querySelector(".sidebar");
    let sidebarHeading = document.querySelectorAll(".sidebar-heading");
    let content = document.querySelectorAll(".content");
    sidebarHeading.forEach(item => item.style.borderBottom = "1px solid var(--dark-pastel-gray)");
    content.forEach(item => item.style.borderBottom = "1px solid var(--dark-pastel-gray)");
    activeComponent.style.backgroundColor = "var(--white-lilac)";
    componentWrapper.forEach(
      (component) => (component.style.backgroundColor = "var(--white-lilac)")
    );
    componentWrapper.forEach(
      (component) =>
        (component.style.border = "1px solid var(--dark-pastel-gray)")
    );
    sidebar.style.backgroundColor = "var(--white-color)";
    sidebar.style.color = "var(--light-theme-text-color)";
    if (location.pathname === "/docs/buttons/buttons.html") {
      changeBtnOutlineColor("light");
    }
    if(location.pathname === '/docs/badges/badges.html'){
      changeBadgeTextColor("light");
    }
  }
};

const changeToDarkMode = () => {
  body.style.backgroundColor = "var(--dark-theme-bg)";
  body.style.color = "var(--white-color)";
  if (location.pathname === "/index.html") {
    let btnGetStarted = document.querySelector(".btn");
    btnGetStarted.style.boxShadow = "0 0px 20px rgba(26, 25, 25, 0.9)";
  }
  if (docsPagesLocation.includes(location.pathname)) {
    let activeComponent = document.querySelector(".active");
    let componentWrapper = document.querySelectorAll(".wrapper");
    let sidebar = document.querySelector(".sidebar");
    let sidebarHeading = document.querySelectorAll(".sidebar-heading");
    let content = document.querySelectorAll(".content");
    sidebarHeading.forEach(item => item.style.borderBottom = "1px solid var(--baltic-sea-color)");
    content.forEach(item => item.style.borderBottom = "1px solid var(--baltic-sea-color)");
    activeComponent.style.backgroundColor = "var(--baltic-sea-color)";
    componentWrapper.forEach(
      (component) =>
        (component.style.backgroundColor = "var(--baltic-sea-color)")
    );
    componentWrapper.forEach(
      (component) => (component.style.border = "1px solid var(--charcoal-grey)")
    );
    sidebar.style.backgroundColor = "var(--dark-theme-bg)";
    sidebar.style.color = "var(--white-color)";
    if (location.pathname === "/docs/buttons/buttons.html") {
      changeBtnOutlineColor("dark");
    }
    if(location.pathname === '/docs/badges/badges.html'){
      changeBadgeTextColor("dark");
    }
  }
};

const checkSelectedMode = (mode) => {
  if (mode === "light") {
    changeToLightMode();
    btnDarkMode.style.display = "block";
    btnLightMode.style.display = "none";
  } else if (mode === "dark") {
    changeToDarkMode();
    btnDarkMode.style.display = "none";
    btnLightMode.style.display = "block";
  } else {
    changeToDarkMode();
    btnDarkMode.style.display = "none";
    btnLightMode.style.display = "block";
  }
};
checkSelectedMode(localStorage.mode);
