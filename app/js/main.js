$(function(){

  let scrollTop = document.querySelector('.scroll-top');

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
      scrollTop.classList.add('scroll-top--active');
    } else {
      scrollTop.classList.remove('scroll-top--active');
    }
  })
   

  $('.burger, menu').on('click', function() {
    $('.menu__list').toggleClass('menu__list--active');
    $('.burger').toggleClass('burger--active');
    $('body').toggleClass('body--active');
  });

  $('.menu__link').on('click', function() {
    $('.menu__list').removeClass('menu__list--active');
    $('.burger').removeClass('burger--active');
    $('body').removeClass('body--active');
  });

  $('.header__slider').slick({
    arrows: false,
    fade: true,
    asNavFor: '.header__slider-dots',
    autoplay: true,
    autoplaySpeed: 3500,
  });

  $('.header__slider-dots').slick({
    arrows: false,
    dots: true,
    fade: true,
    asNavFor: '.header__slider',
  });

  $('.tours-slider').slick({
    arrows: false,
    dots: true,
    infinite: true, 
  });

  $('.reviews-slider').slick({
    prevArrow: '<svg class="arrow-left" width="20" height="36" viewBox="0 0 20 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M19.3076 35L0.999925 18L19.3076 1" stroke="#929292"/></svg>',
    nextArrow: '<svg class="arrow-right" width="21" height="36" viewBox="0 0 21 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L19.3077 18L1 35" stroke="#929292"/></svg>',
    dots: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          arrows: false,
          dots: true
        }
      },
    ]
  });

  $(".tours__rating, .reviews__rating").rateYo({
    starWidth: '31px',
    normalFill: '#747474',
    ratedFill: '#A5964C',
    spacing   : '3px',
    readOnly: true,
  
  });

  $(function(){
    $("a[href^='#']").click(function(){
            var _href = $(this).attr("href");
            $("html, body").animate({scrollTop: $(_href).offset().top+"px"}, 500);
            return false;
    });
  });

});

wow = new WOW({ mobile: false })
wow.init();

let swiper = new Swiper(".tours__slider", {
  loop: true,
  centeredSlides: true,
  
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // }, 

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true,
    },

    1040: {
      slidesPerView: 'auto',
      spaceBetween: 130,
      centeredSlides: true,
      grabCursor: true,
    },
  },

});