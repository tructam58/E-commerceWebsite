//sự kiện scroll chuột hiện header
$(window).scroll(function () {
  if ($(this).scrollTop()) {
    $("header").addClass("sticky");
  }
  else {
    $("header").removeClass("sticky");

  }
})