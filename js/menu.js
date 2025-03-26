let menu = document.getElementById("menu-hamburger");
let navbar = document.getElementById("navbar");
let header = document.getElementById("header-bar");
let clickMenu = document.querySelector("ul")
let mediaQuery = window.matchMedia('(min-width: 767px)');

let isActive = false;

function hambClick() {
  menu.addEventListener('click', () => {
    if (!isActive) {
      navbar.style.display = "block";
      header.style.height = "37vh"
      isActive = true;
    } else {
      navbar.style.removeProperty('display')
      header.style.removeProperty('height')
      isActive = false;
    }
  });
}
function menuClick() {
  clickMenu.addEventListener('click', () => {
    if (!isActive) {
      navbar.style.removeProperty('display')
      header.style.removeProperty('height')
      isActive = true;
    } else {
      isActive = false;
    }
  });
}

window.addEventListener('resize', () => {
  if (isActive && !mediaQuery.matches) {

    navbar.style.removeProperty('display');
    header.style.removeProperty('height');
    isActive = false;
  }
});
hambClick();
menuClick();