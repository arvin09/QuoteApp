'use strict';

$(document).ready(function () {
  $('.quote-container').css({height: window.screen.height + 'px'});	
  $('[data-toggle="offcanvas"]').click(function () {
    $('.row-offcanvas').toggleClass('active');
  });
});