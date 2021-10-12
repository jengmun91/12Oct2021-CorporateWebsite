$(".dot1").mouseenter(function(e) {
  $('.dot1').addClass("inner-circle");
 $('.line1').addClass("vertical-line");
 $('.smalldot1').addClass("dots1");
  function isEmpty( el ){
    return !$.trim(el.html())
  }
  if (isEmpty($('.text1'))) {
    $('.text1').append("<p><a href=\"index.html#aboutUsSection\" class=\"dot_link\">About</a></p>");
  } 
  $(".clouds").css("animation-play-state", "paused");
})

 $( ".box-1" ).mouseleave(function() {
    $('.dot1').removeClass("inner-circle");
    $('.text1').empty();
    $('.line1').removeClass("vertical-line");
    $('.smalldot1').removeClass("dots1");
    $(".clouds").css("animation-play-state", "running");
 }) 

   
   //dot 2
   $(".dot2").mouseenter(function(e) {
    $('.dot2').addClass("inner-circle2");
   $('.line2').addClass("vertical-line2");
   $('.smalldot2').addClass("dots2");
    function isEmpty( el ){
      return !$.trim(el.html())
    }
    if (isEmpty($('.text2'))) {
      $('.text2').append("<p><a href=\"index.html#portfolio\" class=\"dot_link\">Brands</a></p>");
    } 
    $('.dot2').removeClass("bounce");
    $('.box-content2').css('margin-top',20);
    $(".clouds").css("animation-play-state", "paused");
  })

   $( ".box-3" ).mouseleave(function() {
      $('.dot2').removeClass("inner-circle2");
      $('.text2').empty();
      $('.line2').removeClass("vertical-line2");
      $('.smalldot2').removeClass("dots2");
      $('.dot2').addClass("bounce");
      $('.box-content2').css('margin-top',0);
      $(".clouds").css("animation-play-state", "running");
   }) 

   //dot 2
   $(".dot3").mouseenter(function(e) {
    $('.dot3').addClass("inner-circle3");
   $('.line3').addClass("vertical-line3");
   $('.smalldot3').addClass("dots3");
    function isEmpty( el ){
      return !$.trim(el.html())
    }
    if (isEmpty($('.text3'))) {
      $('.text3').append("<p><a href=\"index.html#contact\" class=\"dot_link\">Contact Us</a></p>");
    } 
    
    $('.dot3').removeClass("bounce1");
    $('.box-content3').css('margin-top',20);
    $(".clouds").css("animation-play-state", "paused");
  })

   $( ".box-5" ).mouseleave(function() {
      $('.dot3').removeClass("inner-circle3");
      $('.text3').empty();
      $('.line3').removeClass("vertical-line3");
      $('.smalldot3').removeClass("dots3");
      $('.dot3').addClass("bounce1");
      $('.box-content3').css('margin-top',0);
      $(".clouds").css("animation-play-state", "running");
   }) 