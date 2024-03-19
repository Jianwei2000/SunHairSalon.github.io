$(document).ready(function () {
    //banner swiper
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        autoplay: {delay: 3000,},
        effect: 'fade',
        fadeEffect: {crossFade: true},
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });

    //slider
    $('.work-box').slick({
        dots: true,
        infinite: false,
        speed: 500,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3500,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
    {
      breakpoint: 1420,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]});
  
  //ham
  $(".ham").click(function(){
    $(this).toggleClass("active");
    
    $("body").toggleClass("dropdown");

  });

  //首頁尋找門市
  $('.location').click(function (e) { 
    e.preventDefault();
      const anchor = $(this).attr('href');
      const linkScroll = $(anchor).offset().top;
      $('html,body').stop().animate({ 
        scrollTop: linkScroll 
      },2000)
  });

  //portfolio
  $('.back-btn').click(function (e) { 
    e.preventDefault();
    $('#img-box1').css('display','block');
    $('#img-box2').css('display','none');
    $('html, body').animate({scrollTop:0 },2000);
  });

  $('.next-btn').click(function (e) { 
    e.preventDefault();
    $('#img-box1').css('display','none');
    $('#img-box2').css('display','block');
    $('html, body').animate({scrollTop:0 },2000);
  
  });
  


  //aos
  AOS.init({
    once:"true",
  });

  //lightbox效果
  lightbox.option({
    'resizeDuration': 1000,
    'wrapAround': true,
    'imageFadeDuration':2000,
    'showImageNumberLabel':false,
  });


});