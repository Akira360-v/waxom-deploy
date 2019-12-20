import img1 from 'images/posts/right.svg';
import img2 from 'images/posts/left.svg';


$('.list').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  
  nextArrow: `<img src="${img1}" alt="121231">`,
  prevArrow: `<img src="${img2}" alt="1231231">`,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
  ]
});
$('.slider-two').slick({
  swipe: false,
  dots: true,
  // fade: true,
  cssEase: 'linear',
  autoplay: true,
  arrows : false,
});
