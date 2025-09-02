const swiper1 = new Swiper('#swiper1', {
  slidesPerView: 'auto',       // каждая карточка берёт ширину из CSS
  spaceBetween: 10,            // расстояние между карточками
  pagination: {
    el: '#swiper1 .swiper-pagination',  // точки только для этого слайдера
    clickable: true,       // точки кликабельные
  },
  navigation: false,        // стрелки отключены
  allowTouchMove: true,     // свайп сенсором включён
});