const swiper = new Swiper('.swiper', {
    // if we need pagination
    pagination: {
        el: '.swiper-pagination',
        // par defaut sur false, regler sur true
        clickable : true,
      },
    //   if we need navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
   });