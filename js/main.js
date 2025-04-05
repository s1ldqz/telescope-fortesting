const headerMenuBtn = document.querySelector(".header__menu");
const headerSubmenu = document.querySelector(".header__submenu");

headerMenuBtn.addEventListener("click", () => {
  headerSubmenu.classList.toggle("header__submenu--active");
});
