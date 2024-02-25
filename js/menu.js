let menu = document.getElementById("menu-hamburger");
let navbar = document.getElementById("navbar");
let header = document.getElementById("header-bar");
let mediaQuery = window.matchMedia('(min-width: 767px)');

let isActive = false;

function menuClick() { 
    menu.addEventListener('click', () => {
        if (!isActive) {                 
          navbar.style.display = "block";
          header.style.height ="30vh"  
          isActive = true;      
                             
        } else {
            navbar.style.removeProperty('display')
            header.style.removeProperty('height')         
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
menuClick();