$(function () {
  // スクロールをページ最上部に
  $('html, body').scrollTop(0);


  // ページアニメーション

  function initPageAnimations() {
    if (!$('body').hasClass('home')) return;

    $('body').addClass('home_load');

    $('.kv_area01 .kv01').addClass('slide-start');
    $('.kv01').addClass('pre show end');
    $('.load_anime, .loading').addClass('hide');

    $('.home_key_copy .line:nth-child(1)').addClass('show slide');
    $('.home_key_copy .line:nth-child(2)').addClass('show slide');

    $('.kv_in, .kv_area').addClass('show');
    $('.mount_area_key .mount').addClass('slide');

    $('header .navi_area').addClass('show');
  }


  // コピー

  function initScrollAnimations() {
    $(window).on('scroll', function () {
      const scroll = $(window).scrollTop();
      const windowHeight = $(window).height();
      const windowWidth = $(window).width();

      // home_lead 内の画像アニメーション
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

      // copy_standard の表示
      $('.copy_standard').each(function () {
        const imgPos = $(this).offset().top;
        const showH = windowWidth > 769 ? 200 : 100;

        if (scroll > imgPos - windowHeight + showH) {
          $(this).find('.line:nth-child(1)').addClass('show slide');
          $(this).find('.line:nth-child(2)').addClass('show slide');
          $(this).find('.line:nth-child(3)').addClass('show slide');
        }
      });

      // ヘッダーメニューの表示切り替え
      const homeLeadTop = $('.home_lead').offset().top;
      if (scroll > homeLeadTop - windowHeight / 2) {
        $('body').removeClass('menu_show');
      } else {
        $('body').addClass('menu_show');
      }
    });
  }


  // KV

  function initKvSimpleSwitch() {
    const interval = 5000;

    $('.kv_area').each(function () {
      const $area = $(this);
      const $slides = $area.find('.kv');
      let current = 0;

      if ($slides.length === 0) return;

      $slides.removeClass('show');
      $slides.eq(current).addClass('show');

      setInterval(() => {
        $slides.eq(current).removeClass('show');
        current = (current + 1) % $slides.length;
        $slides.eq(current).addClass('show');
      }, interval);
    });
  }

  // slickスライダー

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


  // viewport

  function setViewport() {
    const ua = navigator.userAgent;
    const isMobile = ua.match(/iPhone|iPod|Android.+Mobile/);
    const metaTag = isMobile
      ? '<meta name="viewport" content="width=device-width,initial-scale=1">'
      : '<meta name="viewport" content="width=1200">';
    $('head').prepend(metaTag);
  }


  // ナビゲーション

  function fixNavigation() {
    $('body').addClass('navi_fix');
  }


  // スクロール

  function initSmoothScroll() {
    $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      const speed = 500;
      const href = $(this).attr('href');
      const target = href === '#' || href === '' ? 'html' : href;
      const position = $(target).offset().top;
      $('html, body').animate({ scrollTop: position }, speed, 'swing');
    });
  }

  // toggle

  function initToggleMenu() {
    $(".toggle").on("click", function () {
      const isActive = $(this).hasClass("active");
      $(this).toggleClass("active", !isActive);
      $("header").toggleClass("normal", !isActive);
      $("body").toggleClass("noscroll", !isActive);
      $("#menu").toggleClass("active", !isActive);
    });
  }


  // モーダル

  function initModal() {
    $(document).on('click', '.modal_open', function (e) {
      e.stopPropagation();
      $(this).find(".modal").addClass("active");
      $(".modal_bg").addClass("active");
    });

    $(document).on('click', '.modal_close', function (e) {
      e.stopPropagation();
      $(this).closest(".modal").removeClass("active");
      $(".modal_bg").removeClass("active");
    });

    $(document).on('click', '.modal_next', function (e) {
      e.stopPropagation();
      const $currentModal = $(this).closest('.modal');
      const $nextModal = $currentModal.parents('.child').next('.child').find('.modal');
      $currentModal.removeClass("active");
      if ($nextModal.length) {
        $nextModal.addClass("active");
      } else {
        $(".modal_bg").removeClass("active");
      }
    });

    $(document).on('click', '.modal_prev', function (e) {
      e.stopPropagation();
      const $currentModal = $(this).closest('.modal');
      const $prevModal = $currentModal.parents('.child').prev('.child').find('.modal');
      $currentModal.removeClass("active");
      if ($prevModal.length) {
        $prevModal.addClass("active");
      } else {
        $(".modal_bg").removeClass("active");
      }
    });
  }


  initPageAnimations();
  initScrollAnimations();
  initSlider();
  setViewport();
  fixNavigation();
  initSmoothScroll();
  initToggleMenu();
  initModal();
  initKvSimpleSwitch();
});
