'use strict';

$(function () {
  'use strict';

  var homeSwiper = new Swiper('#home_swiper_container', {
    autoplay: true,
    width: window.innerWidth,
    height: window.innerHeight,
    speed: 1000,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination'
    },
    loop: true
  });
});
'use strict';

$(function () {
    'use strict';
  
    var homeSwiper = new Swiper('#news_swiper_container', {
      autoplay: true,
      width: window.innerWidth,
      height: window.innerHeight,
      speed: 1000,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination'
      },
      loop: true,
      slidesPerView: 'auto'
    });
  });
  'use strict';