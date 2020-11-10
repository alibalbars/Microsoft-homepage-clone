//changes for new commit
var main_menu = document.getElementsByClassName("main-menu");
var responsive_left_menu = document.getElementsByClassName("responsive-left-menu");
var responsive_right_menu = document.getElementsByClassName("responsive-right-menu");
var btn_nav_menu = document.getElementsByClassName("btn-nav-menu");

var nav_container = document.getElementsByClassName("nav-container");

var btn_search = document.getElementsByClassName("fa fa-search");
var search_div = document.getElementsByClassName("search");
var main_nav = document.getElementsByClassName("main-nav");
var btn_cancel_search = document.getElementsByClassName("btn-cancel-search");
var input_search = document.getElementsByClassName("input-search");

var hamburger_menu_icon = document.querySelector(".hamburger-menu-icon"); //returns first matched element on Node Tree
var btn_hamburger_menu = document.querySelector(".btn-hamburger-menu");

var expandable = document.getElementsByClassName("expandable");
var mobil_nav = document.querySelector(".mobil-nav");



nav_container[0].style.display = "none";

function isNavMenuOpen() {
  if (nav_container[0].style.display === "none") {
    return false;
  }
  else if (nav_container[0].style.display === "block") {
    return true;
  }
}
// Nav Menu
var openNavMenu = () => {
  nav_container[0].classList.add("opacity-animation");
  nav_container[0].classList.remove("opacity-animation2");
  nav_container[0].style.display = "block";

  //border ve arka plan ekle
  btn_nav_menu[0].style.border = "1px dashed black";
  btn_nav_menu[0].style.backgroundColor = "rgb(242, 242, 242)";
}

var closeNavMenu = () => {
  nav_container[0].classList.remove("opacity-animation");
  nav_container[0].classList.add("opacity-animation2");
  setTimeout(function () {
    nav_container[0].style.display = "none";
  }, 200);

  //border ve arka plan ekle
  btn_nav_menu[0].style.border = "none";
  btn_nav_menu[0].style.background = "transparent";
};

function navMenuClicked() {
  // alert(isNavMenuOpen());
  if (isNavMenuOpen()) {
    closeNavMenu();
  }
  else {
    openNavMenu();
  }
}

btn_nav_menu[0].addEventListener("click", navMenuClicked, false);

//Search
var openSearch = () => {
  //Remove classes
  main_menu[0].classList.remove("flex");
  responsive_right_menu[0].classList.remove("flex");
  responsive_left_menu[0].classList.remove("flex");
  btn_nav_menu[0].classList.remove("block");
  search_div[0].classList.remove("none");

  main_menu[0].classList.add("none");
  responsive_right_menu[0].classList.add("none");
  responsive_left_menu[0].classList.add("none");
  btn_nav_menu[0].classList.add("none");
  search_div[0].classList.add("flex");


  focus_input_search();
};
btn_search[0].addEventListener("click", openSearch, false);

var closeSearch = () => {
  //Remove classes
  main_menu[0].classList.remove("none");
  responsive_right_menu[0].classList.remove("none");
  responsive_left_menu[0].classList.remove("none");
  btn_nav_menu[0].classList.remove("none");
  search_div[0].classList.remove("flex");


  main_menu[0].classList.add("flex");
  responsive_right_menu[0].classList.add("flex");
  responsive_left_menu[0].classList.add("flex");
  btn_nav_menu[0].classList.add("block");
  search_div[0].classList.add("none");
};

btn_cancel_search[0].addEventListener("click", closeSearch, false);

var focus_input_search = () => { input_search[0].focus(); };

input_search[0].addEventListener('focusout', function () {
  closeSearch();
});

//Hambuger Menu
closeHamburgerMenu();
function isHamburgerMenuOpen() {
  if (mobil_nav.style.display === "none") {
    return false;
  }
  return true;
}

function openHamburgerMenu() {
  hamburger_menu_icon.src = "img/svg/cancel.svg";
  mobil_nav.style.display = "flex";
}

function closeHamburgerMenu() {
  hamburger_menu_icon.src = "img/svg/menu-of-three-lines.svg";
  mobil_nav.style.display = "none";
}

btn_hamburger_menu.addEventListener("click", () => {

  if (!isHamburgerMenuOpen()) {
    openHamburgerMenu();
  }
  else {
    closeHamburgerMenu();
  }
});

/* Hamburger Menu Bug */

// function myFunction(x) {
//   if (x.matches) {
//     document.body.style.display = "none";
//   }
//   else {
//     document.body.style.display = "block";
//   }
// }

// var x = window.matchMedia("(max-width: 870px)");
// myFunction(x);
// x.addListener(myFunction)



//Mobil Nav Menu Openable
function openSibling(e) {
  let nextSibling = e.nextSibling.nextSibling;
  nextSibling.style.display = "flex";
}

function closeSibling(e) {
  let nextSibling = e.nextSibling.nextSibling;
  nextSibling.style.display = "none";
}

function isSiblingOpen(e) {
  let nextSibling = e.nextSibling.nextSibling;
  if (nextSibling.style.display === "flex") {
    return true;
  }
  return false;
}

var expandableArray = [...expandable];
// var expandableArray = Array.from(expandable);
// var expandableArray = Array.prototype.slice.call(expandable);
// var expandableArray = [].slice.call(expandable);

expandableArray.forEach(function (e) {
  e.addEventListener("click", function () {
    if(!isSiblingOpen(e)){
      openSibling(e);
    }
    else {
      closeSibling(e);
    }
    // let nextSibling = e.nextSibling.nextSibling;
  })
});



