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
    // centerMode: true,
    // slidesToShow: 1,
    infinite: true,

  });

  $(".tours__rating").rateYo({
    rating: 5,
    starWidth: '31px',
    normalFill: '#747474',
    ratedFill: '#A5964C',
    spacing   : '3px',
    readOnly: true,
  });


 
});