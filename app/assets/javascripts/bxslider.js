// var bxParam = {
//     auto: true,
//     autoHover: true,    
//     speed:2000,
//     pause:8000, 
//     slideWidth: 450,
//     maxSlides:3,
//     minSlides:1,
//     moveSlides:1,
//     slideMargin: 40, 
//     touchEnabled: false,
//     infiniteLoop: true,
// };

// $(function () {
//   var slider = $(".bxslider").bxSlider(bxParam);
//   $("prev-btn").on({
//       "mouseenter": function(){slider.stopAuto();},
//       "mouseleave": function(){slider.startAuto();}
//   });
// });


jQuery(document).ready(function($){
  $('.bxslider').bxSlider({
    auto: true,
    autoHover: true,
    speed:2000,
    pause:8000, 
    slideWidth: 450,
    maxSlides:3,
    minSlides:1,
    moveSlides:1,
    slideMargin: 40, 
    touchEnabled: false,
    infiniteLoop: true
  });
});