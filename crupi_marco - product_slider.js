var x = window.matchMedia("(max-width: 700px)");
var swiper = new Swiper(".slide-content", {
  slidesPerView: 4,
  spaceBetween: 55,
  loop: false,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    580: {
      slidesPerView: 2,
      spaceBetween: 80,
    },
    960: {
      slidesPerView: 3,
      spaceBetween: 80,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 90,
    },
  },
});
