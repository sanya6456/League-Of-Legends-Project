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
$(document).ready(function(){
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 2.5,
    centeredSlides: true,
    spaceBetween: 200,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints:{
      1394:{
        slidesPerView: 2.5,
        spaceBetween: 200,
      },
      1150:{
        slidesPerView: 2.2,
        spaceBetween: 200,
      },
      1:{
        slidesPerView: 1,
      },
    }
  });
});
//_______

