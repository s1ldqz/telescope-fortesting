document.addEventListener("click", (e) => {
  const headerMenuBtn = e.target.matches(".header__menu");
  const headerSubmenu = document.querySelector(".header__submenu");
  const activeSubMenu = document.querySelector(
    ".header__submenu.header__submenu--active"
  );
  if (headerMenuBtn) {
    headerSubmenu.classList.toggle("header__submenu--active");
  }
  if (activeSubMenu) {
    headerSubmenu.classList.remove("header__submenu--active");
  }
});
