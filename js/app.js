//　再読み込みで画面最上部に戻す

$(function() {
  $('html,body').animate({ scrollTop: 0 }, '1');
  });

  //Key visualの横幅をセット（サイドメニューなどがある時pckv,pckvmaxの値にサイドメニュー分の幅を-する）
  
  
  
  $(window).on('load', function() {
  
  //loading完了後のアニメーションここから
  
  $('body.home').addClass('home_load');
  
  
  
  
  setTimeout( function() {
  $('.load_anime').addClass('hide');
  }, 1800 );
  
  setTimeout( function() {
  $('.loading').addClass('hide');
  }, 3000 );
  
  
  
  
  setTimeout( function() {
  $('.menu_load').removeClass('menu_load');
  }, 600 );
  
  /*コメント外す
  setTimeout( function() {
  $('.home_key_copy .line:nth-child(1)').addClass('show');
  }, 600 );
  
  
  setTimeout( function() {
  $('.home_key_copy .line:nth-child(1)').addClass('slide');
  }, 800 );
  
  setTimeout( function() {
  $('.home_key_copy .line:nth-child(2)').addClass('show');
  }, 1100 );
  
  setTimeout( function() {
  $('.home_key_copy .line:nth-child(2)').addClass('slide');
  }, 1300 );
*/
  /*
  setTimeout( function() {
  $('.load_anime').addClass('hide');
  }, 200 );
  
  setTimeout( function() {
  $('.loading div.cover01').addClass('hide');
  }, 900 );
  */
  
  /*
  setTimeout( function() {
  $('.home').addClass('show');
  }, 1400 );
  */
  
  /*
  setTimeout( function() {
  $('.loading').addClass('hide');
  }, 2400 );
  */
  
  /*コメント外す
  setTimeout( function() {
  $('.kv_in').addClass('show');
  }, 3500 );
  
  setTimeout( function() {
  $('.kv_area').addClass('show');
  }, 2000 );
  */
  /*
  setTimeout( function() {
  $('.mount_area_key .mount').addClass('show');
  }, 100 );
  */
  
  /*ライン黒に
  setTimeout( function() {
  $('.mount_area_key .mount').addClass('slide');
  }, 2300 );
  */
  
  /*ライン黒に*/
  setTimeout( function() {
  $('.mount_area_key .mount').addClass('slide');
  }, 1800 );
  /*ライン黒に*/
  
  setTimeout( function() {
  $('header .logo').addClass('show');
  $('header .navi_area').addClass('show');
  $('.icon_circle_fix').addClass('show');
  }, 2800 );
  
  
  
  /*ライン黒に
  setTimeout( function() {
  $('.mount_area01').addClass('hide');
  }, 3000 );
  */
  
  /*ライン黒に*/
  setTimeout( function() {
  $('.mount_area01').addClass('hide');
  }, 1800 );
  /*ライン黒に*/
  /*
  setTimeout( function() {
  $('.mount_area02').addClass('show');
  }, 3000 );
  */
  //ここまで
  // キービジュアル

  const swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

 /*
  var time = -14;
  var slide = 0;
  
  
      setInterval(function(){
        
        if( 0 <= time && time << 600 ) {
          slide = 1;
        } if( 60 <= time && time << 1200 ) {
          slide = 2;
        } if( 120 <= time && time << 1800 ) {
          slide = 3;
        } if( 180 <= time ) {
          slide = 1;
          time = 0;
      }    	
        
        if (slide == 1) {
  
          $('.kv01').addClass('pre');
          $('.kv03').removeClass('pre');
          setTimeout( function() {
          $('.kv01').addClass('show');
          }, 400 );
          setTimeout( function() {
          $('.kv03').removeClass('show');
        $('.kv03').removeClass('end');
        $('.kv01').addClass('end');
          }, 5500 );
  
        }
  
        if (slide == 2) {
          $('.kv02').addClass('pre');
          $('.kv01').removeClass('pre');
          setTimeout( function() {
          $('.kv02').addClass('show');
          }, 400 );
          setTimeout( function() {
          $('.kv01').removeClass('show');
        $('.kv01').removeClass('end');
        $('.kv02').addClass('end');
          }, 5500 );
        }
  
      if (slide == 3) {
        $('.kv03').addClass('pre');
        $('.kv02').removeClass('pre');
        setTimeout( function() {
        $('.kv03').addClass('show');
        }, 400 );
        setTimeout( function() {
        $('.kv02').removeClass('show');
        $('.kv02').removeClass('end');
        $('.kv03').addClass('end');
        }, 5500 );
      }
  
  
  
        
        time++;
        //debut
        //$('#time').text(time);
        //$('#slide').text(slide);
        
        
      },100);
  
  
  }
  );
  
*/
  
  
  //-----------------------------------------------------------------
  //	Scroll anime
  //-----------------------------------------------------------------
  
  
  
  $(function(){
  
  $(window).scroll(function (){
  
  $('.home_lead .img').each(function(){
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  var imgPos = $(this).offset().top;
  if (scroll > imgPos - windowHeight + 200){
    
  $(this).addClass('show');
  
  } else {
  $(this).removeClass('show');
  }
  
  
  if (scroll > imgPos - windowHeight + 600){
  //ライン黒に $('.mount_area_key .mount').removeClass('slide');
  $('.mount_area01').removeClass('hide');
  } else {
  $('.mount_area_key .mount').addClass('slide');
  $('.mount_area01').addClass('hide');
  }
  
  });
  
  });
  
  });
  
  
  
  //scroll anime リロード時に表示されてるものは実行
  
  
  
  $(function(){
  
  $(window).scroll(function (){
  
  $('.mount').each(function(){
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  var windowWidth = $(window).width();
  var windowWidth_x = windowWidth * 0.378;
  
  // var imgPos = $(this).offset().top;
  if (scroll > windowWidth_x + 230){
    $(this).addClass('hide');
  } else {
    $(this).removeClass('hide');
  }
  });
  
  });
  
  });
  
  
  
  
  
  
  $(function(){
  
  $('.home').addClass('menu_show');
  
  $(window).scroll(function (){
  
  $('#menu').each(function(){
  var scroll = $(window).scrollTop();
  var windowHeight = $(window).height();
  var windowWidth = $(window).width();
  var imgPos = $(this).offset().top;
  if (scroll > windowWidth * 0.4){
      $('.home').removeClass('menu_show');
  } else {
      $('.home').addClass('menu_show');
  }
  });
  
  });
  
  });

// ノックの学校　スライダー
$(document).ready(function(){
  $('.slider').slick({
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 3000,
    draggable: false,
    swipe: false,
    touchMove: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    centerMode: true,
    centerPadding: '30%', // ← 通常は前後が見える
    slidesToShow: 1,
    
    responsive: [
      {
        breakpoint: 768, // スマホなど幅768px以下
        settings: {
          centerMode: false,       // trueだと余白が発生
          centerPadding: '0',      // 余白なしで画像100%
          slidesToShow: 1
        }
      }
    ]
  });
});



//タブレットでPC画面のリサイズを表示

$(function(){
  var ua = navigator.userAgent;
  if((ua.indexOf('iPhone') > 0) || ua.indexOf('iPod') > 0 || (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0)){
      $('head').prepend('<meta name="viewport" content="width=device-width,initial-scale=1">');
  } else {
      $('head').prepend('<meta name="viewport" content="width=1200">');
  }
});


$(function(){
$('body').addClass('navi_fix');
});


//-----------------------------------------------------------------
//	Scroll anime
//-----------------------------------------------------------------





//scroll anime リロード時に表示されてるものは実行


$(window).on('load', function() {
$('.copy_standard').each(function(){
var scroll = $(window).scrollTop();
var windowHeight = $(window).height();
var imgPos = $(this).offset().top;

var windowWidth = $(window).width();
if (windowWidth > 769){
var showH = 200;
} else {
var showH = 100;
}


if (scroll > imgPos - windowHeight + showH){
$(this).find('.line:nth-child(1)').delay(400).queue(function(){
    $(this).addClass('show');
    $(this).addClass('slide');
})

$(this).find('.line:nth-child(2)').delay(700).queue(function(){
    $(this).addClass('show');
    $(this).addClass('slide');
})

$(this).find('.line:nth-child(3)').delay(1000).queue(function(){
    $(this).addClass('show');
    $(this).addClass('slide');
})
}
});
});







$(function(){

$(window).scroll(function (){

$('.copy_standard').each(function(){
var scroll = $(window).scrollTop();
var windowHeight = $(window).height();
var imgPos = $(this).offset().top;

var windowWidth = $(window).width();
if (windowWidth > 769){
var showH = 200;
} else {
var showH = 100;
}

if (scroll > imgPos - windowHeight + showH){




$(this).find('.line:nth-child(1)').delay(100).queue(function(){
  $(this).addClass('show');
  $(this).addClass('slide');
})

$(this).find('.line:nth-child(2)').delay(500).queue(function(){
  $(this).addClass('show');
  $(this).addClass('slide');
})

$(this).find('.line:nth-child(3)').delay(900).queue(function(){
  $(this).addClass('show');
  $(this).addClass('slide');
})

}
});

});

});





/*Slider*/

jQuery(document).ready(function($){

$('.slider').bxSlider({
   auto:true,
    pause:3000,
    speed:1000,
    pager:false,
    controls:false,
    touchEnabled:false,
    minSlides:3,
    maxSlides:3,
    moveSlides:1	    
});

});



//-----------------------------------------------------------------
//　Tab
//-----------------------------------------------------------------


$(function(){

$('.tab li').on('click', function() {
$('.tab li').removeClass('on');
$(this).addClass('on');
$('.tab_content').removeClass('show');
});

$('.tab01').on('click', function() {
$('.tab_content01').addClass('show');
});

$('.tab02').on('click', function() {
$('.tab_content02').addClass('show');
});

});


//-----------------------------------------------------------------
//　Smooth scroll
//-----------------------------------------------------------------


$(function(){
$('a[href^="#"]').click(function(){
  var speed = 500;
  var href= $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top;
  $("html, body").animate({scrollTop:position}, speed, "swing");
  return false;
});
});



//-----------------------------------------------------------------
//　MatchHeight
//-----------------------------------------------------------------

$(function() {
  $('.matchHeight').matchHeight();
});

$(function() {
  $('.matchHeight02').matchHeight();
});


//-----------------------------------------------------------------
//　Menu
//-----------------------------------------------------------------


$(function(){
$(".toggle").on("click", function() {
$(this).toggleClass("active");
$("header").toggleClass("normal");
$("body").toggleClass("noscroll");
});
});



//-----------------------------------------------------------------
// modal
//-----------------------------------------------------------------




$(document).on('click','.modal_open',function(e){
  e.stopPropagation();
$(this).find(".modal").addClass("active");
$(".modal_bg").addClass("active");
})


$(document).on('click','.modal_close',function(e){
  e.stopPropagation();
  $(this).parent(".modal").toggleClass("active");
$(".modal_bg").toggleClass("active");
})

$(document).on('click','.modal_next',function(e){
  e.stopPropagation();
  $(this).parent(".modal").toggleClass("active");
  $(this).parents('.child').next('.child').find(".modal").addClass("active");
  if ($(this).parents('.child').next('.child').find(".modal").length) {
} else {$(".modal_bg").toggleClass("active");}
})

$(document).on('click','.modal_prev',function(e){
  e.stopPropagation();
  $(this).parent(".modal").toggleClass("active");
  $(this).parents('.child').prev('.child').find(".modal").addClass("active");
  if ($(this).parents('.child').prev('.child').find(".modal").length) {
} else {$(".modal_bg").toggleClass("active");}
})
  })