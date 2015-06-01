// $(document).ready(function(){
//   // var about = $("a[href$='#about']");
//   var about = $('a[href="' + document.location.hash + '"]')
//   $(document).on("click", $('a[href="' + document.location.hash + '"]'), function(event){
//   // // event.preventDefault();
//   // // console.log($("a[href$='#about']"));
//   // // var about = $("a[href$='#about']");
//   // console.log(event.target);
//   // console.log($("a[href='" + document.location.hash + "]'"));
//   about.parent().addClass("active");
//   });
// // $('ul.nav > li > a[href="' + document.location.hash + '"]').click(function(){  $('ul.nav > li').removeClass('active'); $(this).parent().addClass('active'); });

// });
$(document).ready(function(){
  $("a[href^='#']").on("click", function(event) {
      event.preventDefault();

      var target = this.hash;
      var $target = $(target);

      $('html, body').stop().animate({
          'scrollTop': $target.offset().top
      }, 900, 'swing', function () {
          window.location.hash = target;
      });
  });
});