let mainNavigationBasic = document.querySelector(".main-navigation--basic");
let mainNavigationSearch = document.querySelector(".main-navigation--search");
let menuToggleButton = document.querySelector(".page-header__toggle");

mainNavigationBasic.classList.remove("main-navigation--nojs");
mainNavigationSearch.classList.remove("main-navigation--nojs");
menuToggleButton.classList.remove("page-header__toggle--nojs");
mainNavigationBasic.classList.add("main-navigation--closed");
mainNavigationSearch.classList.add("main-navigation--closed");
menuToggleButton.classList.add("page-header__toggle--closed");

menuToggleButton.addEventListener ("click", function() {
  mainNavigationBasic.classList.toggle("main-navigation--closed");
  mainNavigationSearch.classList.toggle("main-navigation--closed");
  menuToggleButton.classList.toggle("page-header__toggle--closed")
})
