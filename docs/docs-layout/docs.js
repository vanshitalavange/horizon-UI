let sidebarMenu = document.querySelector(".sidebar");
let hamburgerMenu = document.querySelector(".hamburger-menu");
let closeMenu = document.querySelector(".menu-close");
let root = document.querySelector(":root");
const checkDeviceWidth = () => {
  if (document.body.clientWidth <= 800) {
    hideSidebar();
    if (
      document.body.clientWidth <= 385 &&
      location.pathname === "/docs/cards/cards.html"
    ) {
      changeRootFontSizeOfCards();
    } 
  } else {
    showSidebar();
  }
};
hamburgerMenu.addEventListener("click", () => {
  showSidebar();
});

closeMenu.addEventListener("click", () => {
  hideSidebar();
});

const hideSidebar = () => {
  sidebarMenu.style.display = "none";
};
const showSidebar = () => {
  sidebarMenu.style.display = "block";
};

const changeRootFontSizeOfCards = () => {
  root.style.fontSize = "80%";
};

window.addEventListener("resize", () => {
  checkDeviceWidth();
});

checkDeviceWidth();
