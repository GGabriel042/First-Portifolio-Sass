const menuBtnEl = document.querySelector(".menu-btn");
const hamburgerEl = document.querySelector(".menu-btn__burger");
const navEl = document.querySelector(".nav");
const menuNavEl = document.querySelector(".menu-nav");
const menuNavItemsEl = document.querySelectorAll(".menu-nav__item");


let showMenu = false;


menuBtnEl.addEventListener("click", toggleMenu);


function toggleMenu() {
  if (!showMenu) {
    hamburgerEl.classList.add("open");
    navEl.classList.add("open");
    menuNavEl.classList.add("open");
    menuNavItemsEl.forEach(item => item.classList.add("open"));

    showMenu = true;
  } else {
    hamburgerEl.classList.remove("open");
    navEl.classList.remove("open");
    menuNavEl.classList.remove("open");
    menuNavItemsEl.forEach(item => item.classList.remove("open"));

    showMenu = false;
  }
}