
$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    $('.quick-btn').fadeIn();
  }
  else {
    $('.quick-btn').fadeOut();

  }
})
