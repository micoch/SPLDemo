$(document).ready(function(){
  $(window).scroll(function(){
    if ($(document).scrollTop() > 50){
      $('#header').addClass('shrink');
      $('#header-text').addClass('move');
      //$('#body-content').addClass('body-move');
    } else {
      $('#header').removeClass('shrink');
      $('#header-text').removeClass('move');
      //$('#body-content').removeClass('body-move');
    }
  });

  $('html').niceScroll();

  smoothScroll.init({
    selectorHeader: '[nav]',
    speed: 1000,
    updateURL: false,
    easing: 'easeInOutCubic',
    offset: 170
  });

});
