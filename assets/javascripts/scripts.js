$(window).scroll(function(){
  if ($(document).scrollTop() > 1){
    $('#header').addClass('shrink');
    $('#header-text').addClass('move');
    $('body').addClass('body-move');
  } else {
    $('#header').removeClass('shrink');
    $('#header-text').removeClass('move');
    $('body').removeClass('body-move');
  }
});
