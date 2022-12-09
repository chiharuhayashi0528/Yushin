// JavaScript Document
$(function () {
  naviOpen();
  pageScroll();
  tabControl();

  // スクロール関連処理
  //------------------------------------------------//

  // Sticky
  $(".c-concept-contents").each(function () {
    var trigger = $(this).find(".js-trigger-sticky");
    var target = $(this).find(".sticky-image-02");

    ScrollTrigger.create({
      trigger: trigger,
      start: "center 25%",
      end: "center 25%",
      //      markers: true,
      onEnter: function () {
        $(target).addClass("is-active");
      },
      onEnterBack: function () {
        $(target).removeClass("is-active");
      },
    });
  });
});

// [SP]HamburgerMenu
//------------------------------------------------//
function naviOpen() {
  $(".js-spnav-button").click(function () {
    $(".js-spnav-button").toggleClass("is-on");
    if ($(".js-spnav-button").hasClass("is-on")) {
      $(".js-contents-header, .js-spnav").addClass("is-show");
    } else {
      $(".js-contents-header, .js-spnav").removeClass("is-show");
    }
  });
}

// Smooth scroll
//------------------------------------------------//
function pageScroll() {
  $('a[href^="#"]')
    .not(".js-pagelink")
    .click(function () {
      let speed = 500;
      let href = $(this).attr("href");
      let target = $(href == "#" || href == "" ? "html" : href);
      let position = target.offset().top;
      $("html, body").animate({ scrollTop: position }, speed, "swing");
      return false;
    });

  $(".js-pagelink").on("click", function () {
    let speed = 500;
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top - 150;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
}

// Tabs
//------------------------------------------------//

function tabControl() {
  $(".tab-wrap .tab-btn:first-child").addClass("is-active");
  $(".tab-wrap .tab-panel:first-child").addClass("is-show");
  $(".tab-btn").click(function () {
    // クリックした要素の先祖要素の中で、classの値がgroupの要素を取得
    var group = $(this).parents(".tab-wrap");
    group.find(".is-active").removeClass("is-active");
    $(this).addClass("is-active");
    group.find(".is-show").hide().removeClass("is-show");
    // クリックしたタブからインデックス番号を取得
    const index = $(this).index();
    // クリックしたタブと同じインデックス番号をもつコンテンツを表示
    group.find(".tab-panel").eq(index).fadeIn().addClass("is-show");
  });
}

// HamburgerMenu
//------------------------------------------------//
function naviOpen() {
  $(".js-spnav-button").click(function () {
    $(".js-spnav-button").toggleClass("is-on");
    if ($(".js-spnav-button").hasClass("is-on")) {
      $(".js-contents-header, .js-spnav, .p-header-btn").addClass("is-show");
    } else {
      $(".js-contents-header, .js-spnav, .p-header-btn").removeClass("is-show");
    }
  });
  // 繝｡繝九Η繝ｼ螟悶け繝ｪ繝�け
  $(document).on("click", function (event) {
    if (!$(event.target).closest(".c-navi,.js-spnav-button").length) {
      $(".js-spnav-button").removeClass("is-on");
      $(".js-contents-header, .js-spnav").removeClass("is-show");
    }
  });
  // pcドロップダウンメニュー
  $(".js-pc-navi-dropdown").hover(function () {
    $(this).toggleClass("is-show");
    if ($(this).hasClass("is-show")) {
      $(this).find(".pc-first-navi-submenu").addClass("is-show");
    } else {
      $(this).find(".pc-first-navi-submenu").removeClass("is-show");
    }
  });

  //スマホメニュー　スクロール制御
  var state = false;
  var scrollpos;
  $(".p-header-btn").on("click", function () {
    $("ul").toggleClass("open");
    if (state == false) {
      scrollpos = $(window).scrollTop();
      $("body").addClass("fixed").css({ top: -scrollpos });
      state = true;
    } else {
      $("body").removeClass("fixed").css({ top: 0 });
      window.scrollTo(0, scrollpos);
      state = false;
    }
  });
}

$(".c-qa-list dd").hide();
$(".c-qa-list").on("click", function(e){
    $('dd',this).slideToggle('fast');
    if($(this).hasClass('open')){
        $(this).removeClass('open');
    }else{
        $(this).addClass('open');
    }
});

// headerをスクロールすると、色が変わる
jQuery(window).on('scroll', function () {
  if (jQuery('h2').height() < jQuery(this).scrollTop()) {
      jQuery('.js-nav').addClass('change-color');
  } else {
      jQuery('.js-nav').removeClass('change-color');
  }
});
