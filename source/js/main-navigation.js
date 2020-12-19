const mainNavigationBasic = document.querySelector(".main-navigation--basic");
const mainNavigationSearch = document.querySelector(".main-navigation--search");
const menuToggleButton = document.querySelector(".page-header__toggle");
const transitionTime = 200;

// Initialization

mainNavigationBasic.classList.remove("main-navigation--nojs");
mainNavigationSearch.classList.remove("main-navigation--nojs");
menuToggleButton.classList.remove("page-header__toggle--nojs");

mainNavigationBasic.classList.add("main-navigation--closed");
mainNavigationSearch.classList.add("main-navigation--closed");
menuToggleButton.classList.add("page-header__toggle--closed");

mainNavigationBasic.classList.add("main-navigation--ease-in");
mainNavigationSearch.classList.add("main-navigation--ease-out");

// Transition switch function

function transitionSwitch(menu) {
  menu.classList.toggle("main-navigation--ease-in");
  menu.classList.toggle("main-navigation--ease-out");
}

// Menu opening function

function openMenu(menu) {
  menu.classList.remove("main-navigation--closed");
  const actualHeight = menu.scrollHeight;

  requestAnimationFrame(function() {
    menu.style.height = 0;
    requestAnimationFrame(function() {
      menu.style.height = actualHeight + "px";
    })
  })

  function cleanAndPrepare() {
    menu.removeAttribute("style");
    transitionSwitch(menu);
  }
  menu.addEventListener("transitionend", cleanAndPrepare, {once: true});
}

// Menu closing function

function closeMenu(menu) {
  const actualHeight = menu.scrollHeight;

  requestAnimationFrame(function() {
    menu.style.height = actualHeight + "px";
    requestAnimationFrame(function() {
      menu.style.height = 0;
    })
  })

  function cleanAndPrepare() {
    menu.removeAttribute("style");
    menu.classList.add("main-navigation--closed");
    transitionSwitch(menu);
  }
  menu.addEventListener("transitionend", cleanAndPrepare, {once: true});
}

// Anti-spam function

function antiSpam() {
  menuToggleButton.removeEventListener("click", menuToggle);
  setTimeout(function() { menuToggleButton.addEventListener("click", menuToggle) }, (transitionTime * 2 + 100))
}

// Menu toggling function

function menuToggle() {
  antiSpam();
  if (mainNavigationBasic.classList.contains("main-navigation--closed")) {
    openMenu(mainNavigationBasic);
    setTimeout(openMenu, transitionTime, mainNavigationSearch);
    menuToggleButton.classList.remove("page-header__toggle--closed");
  } else {
    closeMenu(mainNavigationSearch);
    setTimeout(closeMenu, transitionTime, mainNavigationBasic);
    menuToggleButton.classList.add("page-header__toggle--closed");
  }
}

menuToggleButton.addEventListener("click", menuToggle);
