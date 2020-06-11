//active button
$(document).ready(function(){
  $('.btn').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
  });
});
//_________

//active nav
$(document).ready(function(){
  $('.first-nav').click(function(){
    $('.first-nav').removeClass('activenav');
    $(this).addClass('activenav');
  });
});

$(document).ready(function(){
  $('.second-nav').click(function(){
    $('.second-nav').removeClass('activenav');
    $(this).addClass('activenav');
  });
});
//__________

//swiper
$(document).ready(function () {
  //initialize swiper when document ready
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
});
//________