import img1 from 'images/header/right.svg';
import img2 from 'images/header/left.svg';

$('.rack__slider').slick({
  swipe: false,
  dots: true,
  cssEase: 'linear',
  nextArrow: `<img src="${img1}" alt="121231">`,
  prevArrow: `<img src="${img2}" alt="1231231">`,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 0.4,
        slidesToScroll: 3,
      }
    },
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 0.2,
        slidesToScroll: 4,
      }
    },
  ]
});
$( ".nav_modil" ).click(function() {
  $('.header-nav_modil').fadeToggle();
})