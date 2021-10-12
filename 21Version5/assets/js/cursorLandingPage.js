$(document).mousemove(function(e) {
    $('.cursor')
      .eq(0)
      .css({
        left: e.pageX,
        top: e.pageY,
      });
    setTimeout(function() {
      $('.cursor')
        .eq(1)
        .css({
          left: e.pageX,
          top: e.pageY,
        });
    }, 120);
  })

$('a').on({
  mouseenter: function () { 
    $('.cursor').addClass('big'); 
  },
  mouseleave: function () { 
    $('.cursor').removeClass('big'); 
  }
});

/* cursor menu */
$(".height-full-viewport").mousemove(function(e) {
  $('.cursor1')
    .eq(0)
    .css({
      left: e.pageX,
      top: e.pageY,
    });
  setTimeout(function() {
    $('.cursor1')
      .eq(1)
      .css({
        left: e.pageX,
        top: e.pageY,
      });
  }, 120);
})

$( ".height-full-viewport" ).mouseleave(function() {
    $(".cursor1").hide();
})

$(".height-full-viewport").mouseenter(function(e) {
  $(".cursor1").show();
})

 $(".hamburger").click(function(){
  if ($(".is-active").length){
    $(".cursor1").show();
    $(".hamburger").mouseenter(function(e) {
      $(".cursor1").show();
      $('.hamburger-label').addClass("active1"); 
      $('.hamburger-inner').addClass("active2"); 
      $('.hamburger-inner-after').addClass("active3"); 
      $('.hamburger-line').append("━━"); 
    })
    $( ".hamburger" ).mouseleave(function() {
      $(".cursor1").hide();
      $('.hamburger-label').removeClass("active1");
      $('.hamburger-inner').removeClass("active2");
      $('.hamburger-inner-after').removeClass("active3");
      $('.hamburger-line').empty(); 
     })
  } else {
    $(".cursor1").hide();
    $('.hamburger-label').removeClass("active1");
    $('.hamburger-inner').removeClass("active2");
    $('.hamburger-inner-after').removeClass("active3");
    $('.hamburger-line').empty();
    $(".hamburger").mouseenter(function(e) {
      $(".cursor1").hide();
      $('.hamburger-label').removeClass("active1");
      $('.hamburger-inner').removeClass("active2");
      $('.hamburger-inner-after').removeClass("active3");
      $('.hamburger-line').empty();
    })
    $( ".hamburger" ).mouseleave(function() {
      $(".cursor1").hide();
      $('.hamburger-label').removeClass("active1");
      $('.hamburger-inner').removeClass("active2");
      $('.hamburger-inner-after').removeClass("active3");
      $('.hamburger-line').empty();
     })
  }
}); 




