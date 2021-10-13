var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const menuBtn = document.querySelector(".menu-button");
const menu = document.querySelector(".navbar");
const menuCloseBtn = document.querySelector(".close-menu");
menuBtn.addEventListener("click", () => {
  menu.classList.toggle('is-open');
});

menuCloseBtn.addEventListener("click", () => {
  menu.classList.toggle('is-open');
});