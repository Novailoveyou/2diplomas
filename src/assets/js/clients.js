var mySwiper = new Swiper('.clients__slider .swiper-container', {
  pagination: {
   el: '.clients__slider .swiper-pagination',
   clickable: true,
 },
 breakpoints: {
   320: {
     slidesPerView: 2,
     spaceBetween: 10,
    autoHeight: true,
   },

   768: {
    slidesPerView: 3,
    spaceBetween: 10,
    spaceBetween: 30,
    autoHeight: false,
  },


  1024: {
    slidesPerView: 6,
    slidesPerColumn: 2,
  }
}
});