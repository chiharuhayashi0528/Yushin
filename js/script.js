// JavaScript Document
$(function () {
  naviOpen();
  pageScroll();
  tabControl();
  toggleOpenSwitch();

});



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

  //スマホメニュー スクロール制御
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
// SP採用ページ
//------------------------------------------------//
function toggleOpenSwitch(){
	var toggleBtn = ".js_toggle_btn";
	var toggleArea = ".js_toggle_area";
	var toggleCon = ".js_toggle_con";
	$(toggleBtn).on("click",function(){
		$(this).parents(toggleArea).find(toggleCon).slideToggle();
		$(this).toggleClass("open");
	});
}

// inview animation
//------------------------------------------------//
$(function () {
  $('.fadetxt').each(function () {
    $(this).children().addBack().contents().each(function () {
      if (this.nodeType == 3) {
        $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
      }
    });
    $(this).on('inview', function () {
      $(this).css({ 'opacity': 1 });
      for (var i = 0; i <= $(this).children('span').length; i++) {
        $(this).children('span').eq(i).delay(100 * i).animate({ 'opacity': 1 }, 1500);
      }
    });
  });
  $('.fade_list').on('inview', function () {
    $('.fade_list li').each(function (i) {
      $(this).delay((200 * i) + 500).queue(function () { $(this).addClass('show') });
    });
  });
  $('.fade,.fade-up').on('inview', function () {
    $(this).delay(800).queue(function () { $(this).addClass('show') });
  });
  $('.fade-up-top,.fade-up-top2,.fade-up-top3,.fade-up-top4,.fade-up-top5').on('inview', function () {
    $(this).addClass('show');
  });
});


