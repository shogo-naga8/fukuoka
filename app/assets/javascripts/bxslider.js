var bxParam = {
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
    infiniteLoop: true,
};

$(function () {
  var slider = $(".bxslider").bxSlider(bxParam);
  $("prev-btn").on({
      "mouseenter": function(){slider.stopAuto();},
      "mouseleave": function(){slider.startAuto();}
  });
});





// https://stand-4u.com/web/javascript/bxslider.html

//     speed:2000,         スライドの遷移時間
//     pause:8000,         スライドの切り替えの間隔
//     slideWidth: 450,    サムネイルの横幅
//     maxSlides:3,        １スライドに表示するサムネイルの最大数
//     minSlides:1,        １スライドに表示するサムネイルの数
//     moveSlides:1,        指定された値だけスライドします。
//     slideMargin: 40,      サムネイル間の余白
//     touchEnabled: false   スワイプできるようにするか否か









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