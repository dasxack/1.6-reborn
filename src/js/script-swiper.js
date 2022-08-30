const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  breakpointsBase: 'container',
  simulateTouch: true,
  grabCursor: true,
  slideToClickedSlide: true,
  slidesPerView: 'auto',
  spaceBetween: 16,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  mousewheel: {
    sensitivity: 1,
  },
})
