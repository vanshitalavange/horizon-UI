let sidebarMenu = document.querySelector(".sidebar");
let hamburgerMenu = document.querySelector(".hamburger-menu");
let closeMenu = document.querySelector(".menu-close");
hamburgerMenu.addEventListener("click", () => {
  sidebarMenu.style.display = "block";
});

closeMenu.addEventListener("click", () => {
  sidebarMenu.style.display = "none";
});

window.addEventListener("resize", () => {
  if (document.body.clientWidth > 800) {
    sidebarMenu.style.display = "block";
  }else{
      sidebarMenu.style.display = "none";
  }
});
