document.addEventListener("DOMContentLoaded", () => {
  let swiperInstance = null;

  const initSwiper = () => {
    const width = window.innerWidth;
    const container = document.querySelector('.mySwiper');

    if (width >= 320 && width <= 1365) {
      if (!swiperInstance) {
        swiperInstance = new Swiper(container, {
          slidesPerView: 'auto',
          spaceBetween: 10,
          freeMode: true,
          pagination: false,
          navigation: false
        });
      }
    } else {
      if (swiperInstance) {
        swiperInstance.destroy(true, true);
        swiperInstance = null;
      }
    }
  };

  initSwiper();
  window.addEventListener('resize', initSwiper);
});
