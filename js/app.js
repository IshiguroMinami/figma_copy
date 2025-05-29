$(function () {
  // ページ読み込み時に最上部へスクロール
  $('html, body').animate({ scrollTop: 0 }, 1);

  // 初期化関数
  function initPageAnimations() {
    // ホームページのロードクラスを追加
    $('body.home').addClass('home_load');

    // キービジュアルのアニメーション
    $('.kv_area01 .kv01').addClass('slide-start');
    $('.kv01').addClass('pre').addClass('show').addClass('end');

    // ローディングアニメーションの非表示
    $('.load_anime, .loading').addClass('hide');

    // メニューのロードクラスを削除
    // $('.menu_load').removeClass('menu_load');

    // コピーラインのアニメーション
    $('.home_key_copy .line:nth-child(1)').addClass('show slide');
    $('.home_key_copy .line:nth-child(2)').addClass('show slide');

    // キービジュアルの表示
    $('.kv_in, .kv_area').addClass('show');

    // ライン黒に
    $('.mount_area_key .mount').addClass('slide');

    // ヘッダーナビゲーションの表示
    $('header .navi_area').addClass('show');
  }

  // スクロールアニメーション
  function scrollAnimations() {
    $(window).on('scroll', function () {
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();
      const windowWidth = $(window).width();
      const windowWidth_x = windowWidth * 0.378;

      // home_lead の画像表示
      $('.home_lead .img').each(function () {
        const imgPos = $(this).offset().top;
        if (scroll > imgPos - windowHeight + 200) {
          $(this).addClass('show');
        } else {
          $(this).removeClass('show');
        }

        if (scroll > imgPos - windowHeight + 600) {
          $('.mount_area01').removeClass('hide');
        } else {
          $('.mount_area_key .mount').addClass('slide');
          $('.mount_area01').addClass('hide');
        }
      });

      // mount の表示制御
      $('.mount').each(function () {
        if (scroll > windowWidth_x + 230) {
          $(this).addClass('hide');
        } else {
          $(this).removeClass('hide');
        }
      });

      // copy_standard のアニメーション
      $('.copy_standard').each(function () {
        const imgPos = $(this).offset().top;
        const showH = windowWidth > 769 ? 200 : 100;

        if (scroll > imgPos - windowHeight + showH) {
          $(this).find('.line:nth-child(1)').addClass('show slide');
          $(this).find('.line:nth-child(2)').addClass('show slide');
          $(this).find('.line:nth-child(3)').addClass('show slide');
        }
      });

      // メニューの表示制御
      const homeLeadTop = $('.home_lead').offset().top;
      if (scroll > homeLeadTop - windowHeight / 2) {
        $('body').removeClass('menu_show');
      } else {
        $('body').addClass('menu_show');
      }
    });
  }

  // スライダーの初期化
  function initSlider() {
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
      centerPadding: '30%',
      slidesToShow: 1,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            centerMode: false,
            centerPadding: '0',
            slidesToShow: 1
          }
        }
      ]
    });
  }

  // ビューポートの設定
  function setViewport() {
    const ua = navigator.userAgent;
    if (
      ua.indexOf('iPhone') > 0 ||
      ua.indexOf('iPod') > 0 ||
      (ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0)
    ) {
      $('head').prepend('<meta name="viewport" content="width=device-width,initial-scale=1">');
    } else {
      $('head').prepend('<meta name="viewport" content="width=1200">');
    }
  }

  // ナビゲーションの固定
  function fixNavigation() {
    $('body').addClass('navi_fix');
  }

  // スムーススクロール
  function smoothScroll() {
    $('a[href^="#"]').on('click', function () {
      const speed = 500;
      const href = $(this).attr('href');
      const target = $(href === '#' || href === '' ? 'html' : href);
      const position = target.offset().top;
      $('html, body').animate({ scrollTop: position }, speed, 'swing');
      return false;
    });
  }

  // 初期化関数の呼び出し
  initPageAnimations();
  scrollAnimations();
  initSlider();
  setViewport();
  fixNavigation();
  smoothScroll();
});
