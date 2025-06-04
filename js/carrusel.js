//CARRUCEL
const productContainers = [...document.querySelectorAll('.project-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerwidth = containerDimensions.width;
  let isAnimating = false;

  nxtBtn[i].addEventListener('click', () => {
    if (!isAnimating) {
      isAnimating = true;
      item.scrollLeft += containerwidth;
      setTimeout(() => {
        isAnimating = false;
      }, 500); // Ajusta este valor según la duración de tu animación
    }
  });

  preBtn[i].addEventListener('click', () => {
    if (!isAnimating) {
      isAnimating = true;
      item.scrollLeft -= containerwidth;
      setTimeout(() => {
        isAnimating = false;
      }, 500); // Ajusta este valor según la duración de tu animación
    }
  });
});