$(function() {
    $('.question').click(function() {
      $(this).toggleClass('open');
      $(this).next().slideToggle();
      $('.question').not($(this)).next().slideUp(); //クリックされていない質問の答えは非表示
      $('.question').not($(this)).removeClass('open'); //クリックされていない質問の矢印は元に戻す
    });
  });