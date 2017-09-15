let $ = require('jquery');
window.$ = $;
window.jquery = $;
window.jQuery = $;

$(document).ready(function() {
  $('.text-block').addClass('my-animated my-fade-down');
  $('.fore').addClass('my-animated my-fade-left');
})

$(window).scroll(function() {
  
  let wScroll = $(this).scrollTop();
  
  $('.logo').css({
    'transform': 'translate(0px, ' + wScroll/2 + '%)'
  })

  $('.text-block').css({
    'transform': 'translate(0px, ' + wScroll/8 + '%)'
  })

  $('.back').css({
    'transform': 'translate(0px, ' + wScroll/4 + '%)'
  });

  $('.fore').css({
    'transform': 'translate(0px, ' + wScroll/16 + '%)'
  });

})

