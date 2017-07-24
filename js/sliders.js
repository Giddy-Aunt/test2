'use strict';



$(document).ready(function(){

  $('.slider--news').slick({
    arrows: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: 'linear',
    mobileFirst: true,
    lazyLoad: 'ondemand',
    });

  $('.slider--books').slick({
    arrows: false,
    infinite: true,
    centerMode: true,
    centerPadding: '80px',
    slidesToShow: 5,

    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 1060,
        settings: {
          centerMode: true,
          slidesToShow: 3
        }
      },
            {
        breakpoint: 800,
        settings: {
          centerMode: true,
          slidesToShow: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          centerMode: false,
          slidesToShow: 1
        }
      }      
    ]
  });

  $('.slider--quotes').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
  });

  var header = document.querySelector('.page-header');
  var colors = ['#bab6b0', '#68535a', '#b2453c'];

  $('.slider--news').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    header.style.backgroundColor = colors[nextSlide];
  });

});
