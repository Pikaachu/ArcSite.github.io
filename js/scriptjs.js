// JavaScript Document
$(function () {

  $('.slick-carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
        breakpoint: 1200, // Breakpoint for large devices
        settings: {
          slidesToShow: 3, // Show 3 slides on medium-sized devices
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992, // Breakpoint for tablets
        settings: {
          slidesToShow: 2, // Show 2 slides on tablets
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768, // Breakpoint for smaller screens
        settings: {
          slidesToShow: 1, // Show 1 slide on smaller devices
          slidesToScroll: 1
        }
      }
    ]
  });


  /*	$(document).ready(function() {
    $('.slick-carousel-1').slick({
      infinite: true,
      slidesToShow: 3,  // Default: 3 items per row
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 768,  // Tablet breakpoint
          settings: {
            slidesToShow: 2, // 2 items per row
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 480,  // Mobile breakpoint
          settings: {
            slidesToShow: 1, // 1 item per row
            slidesToScroll: 1,
          }
        }
      ]
    });
  });
  */


  /*-----------------Top-Button-----------------------*/
  var btn = $('#top-button');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: 0
    }, '300');
  });


});


/*View all link below news list*/


/*-----------------FAQ----------------------*/

document.addEventListener('DOMContentLoaded', () => {
  const headers = document.querySelectorAll('.accordion-header');

  headers.forEach(header => {
    header.addEventListener('click', () => {
      const content = header.nextElementSibling;

      header.classList.toggle('active');
      content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
  });
});
