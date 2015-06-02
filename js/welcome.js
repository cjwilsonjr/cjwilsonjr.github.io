$(document).ready(function(){

  var anchor = "a[href^='#']";

  $(document).on("click", anchor, function(event){
    event.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top
      }, 900, 'swing');
    });

  var topButton = $(".return-top");

  $(document).on("scroll", function(event){
    event.preventDefault();

    if ($(window).scrollTop() === 0){
      topButton.fadeOut("fast");
    } else {
      topButton.fadeIn("fast");
    }
  });
});