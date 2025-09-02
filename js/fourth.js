const swiper4 = new Swiper('.mySwiper4', {
  slidesPerView: 'auto',      // ширина кнопок берётся из CSS
  spaceBetween: 10,           // расстояние между кнопками
  freeMode: false,            // отключаем свободное пролистывание
  pagination: {
    el: '.swiper-pagination4',
    clickable: true,
  },
  navigation: false
});
