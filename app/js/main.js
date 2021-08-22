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
 
});