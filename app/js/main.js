$(function(){

  $('.header__slider').slick({
    arrows: false,
    fade: true,
    asNavFor: '.header__slider-dots',
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
    nextArrow: '<svg class="arrow-right" width="21" height="36" viewBox="0 0 21 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 1L19.3077 18L1 35" stroke="#929292"/></svg>'
  });

  $(".tours__rating, .reviews__rating").rateYo({
    starWidth: '31px',
    normalFill: '#747474',
    ratedFill: '#A5964C',
    spacing   : '3px',
    readOnly: true,
  });


 
});