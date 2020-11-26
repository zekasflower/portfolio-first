$(function () {
  $("header .menu-toggler").on("click", function () {
    $(this).toggleClass("open");
    $("header .top-nav").toggleClass("open");
  });
  $("header .top-nav .nav-link").on("click", function () {
    $(".menu-toggler").removeClass("open");
    $(".top-nav").removeClass("open");
  });
  $('header nav a[href*="#"], .contents .conts a[href*="#"]').on(
    "click",
    function () {
      $("html, body").animate(
        {
          scrollTop: $($(this).attr("href")).offset().top,
        },
        2000
      );
    }
  );
  let scrollUp = $(".scroll-to-top");
  $(window).on("scroll", function () {
    if ($(window).scrollTop() >= 2160) {
      scrollUp.fadeIn(400);
    } else {
      scrollUp.fadeOut(400);
    }
  });
  scrollUp.on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      2000
    );
  });
  AOS.init({
    easing: "ease",
    duration: 1600,
    once: true,
  });
  $("html, body").niceScroll();
});
