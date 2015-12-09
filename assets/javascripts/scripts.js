$(window).scroll(function(){
  if ($(document).scrollTop() > 5){
    $('#header').addClass('shrink');
    $('#header-text').addClass('move');
    $('body').addClass('body-move');
  } else {
    $('#header').removeClass('shrink');
    $('#header-text').removeClass('move');
    $('body').removeClass('body-move');
  }
});

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: (target.offset().top - 325 )
        }, 1000);
        return false;
      }
    }
  });
});
