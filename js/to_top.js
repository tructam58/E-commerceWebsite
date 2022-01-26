const HEIGHT_SCROLL_SCREEN_WILL_SHOW = 300;
const HEIGHT_TOP = 0;
const SPEED_TO_TOP = 800;
//to top

// hiện lên khi scroll xuống độ cao la 300

const showButtonToTop = () => {
  const position = $(window).scrollTop();
  if (position > HEIGHT_SCROLL_SCREEN_WILL_SHOW) {
    $(".to-top").fadeIn().css("display", "flex");
  }
  else {
    $(".to-top").fadeOut();
  }
}
$(window).scroll(showButtonToTop);

$(".to-top").click(function (e) {
  e.preventDefault();
  $("html, body").animate({
    scrollTop: HEIGHT_TOP,
  },
    SPEED_TO_TOP
  );
});
