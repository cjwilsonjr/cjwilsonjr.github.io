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

  $(document).on("click", ".modal-image", function(event){
    event.preventDefault();

    var id = $(this).attr("id");
    var targetModal = $("#" + id + "-modal");
    targetModal.modal("toggle");
  });

  $(".modal-image").hover(function(event){
    event.preventDefault();

    $(this).css("opacity", ".5");

  }, function(event){
    event.preventDefault();

    $(this).css("opacity", "1");
  });
});