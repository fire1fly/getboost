const headerMediaQuery = window.matchMedia("(max-width: 991px)");

const menuEl = document.querySelector(".h-menu");
const menuBtnEl = document.querySelector(".h-menu-btn");

function toggleMenu() {
  menuBtnEl.classList.toggle("active");
  menuEl.classList.toggle("active");
}

function handleOutsideClick(e) {
  const menu = e.target.closest(".h-menu");
  const btn = e.target.closest(".h-menu-btn");

  if (!(menu || btn)) {
    menuBtnEl.classList.remove("active");
    menuEl.classList.remove("active");
  }
}

function initMenu() {
  menuBtnEl.addEventListener("click", toggleMenu);
  document.addEventListener("click", handleOutsideClick);
}

function resetMenu() {
  menuBtnEl.removeEventListener("click", toggleMenu);
}

function handleMenu(e) {
  if (e.matches) {
    initMenu();
  } else {
    resetMenu();
  }
}

headerMediaQuery.addListener(handleMenu);
handleMenu(headerMediaQuery);