var bxParam = {
  auto: true,
    speed:2000,
    pause:8000, 
    slideWidth: 450,
    maxSlides:3,
    minSlides:1,
    moveSlides:1,
    slideMargin: 40,
    touchEnabled: false 
    // nextSelector:"#next-btn",
    // prevSelector:"#prev-btn",
};

$(function () {
  var slider = $(".bxslider").bxSlider(bxParam);
  // $(".navi-btn").on({
  //     "mouseenter": function(){slider.stopAuto();},
  //     "mouseleave": function(){slider.startAuto();}
  });
// });






// pause スライドしてから次のスライドまでの待ち時間の設定

// https://stand-4u.com/web/javascript/bxslider.html


// $(function(){
//   $('.bxslider').bxSlider({
//     speed:2000,
//     pause:9000, 
//     slideWidth: 450,
//     maxSlides:3,
//     minSlides:2,
//     moveSlides:1,
//     slideMargin: 15,
//     nextSelector:"#next-btn",
//     prevSelector:"#prev-btn",
//    });
//  });