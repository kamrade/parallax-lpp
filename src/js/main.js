let $ = require('jquery');
window.$ = $;
window.jquery = $;
window.jQuery = $;

$(window).scroll(function() {
  
  let wScroll = $(this).scrollTop();
  
  $('.logo').css({
    'transform': 'translate(0px, ' + wScroll/2 + '%)'
  })

  $('.back').css({
    'transform': 'translate(0px, ' + wScroll/4 + '%)'
  });

  $('.fore').css({
    'transform': 'translate(0px, -' + wScroll/16 + '%)'
  });

})

