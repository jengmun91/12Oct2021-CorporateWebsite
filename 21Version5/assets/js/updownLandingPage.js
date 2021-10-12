var $currentElement = $(".test").first();

$(".scroll-button-up").click(function () {
    
    var $prevElement = $currentElement.prev('.test');
    if($prevElement.length) {
        $currentElement = $prevElement;
        $('html, body').stop(true).animate({
            scrollTop: $prevElement.offset().top
        }, 1000);
    }
    return false;  
});

$(".scroll-button-down").click(function () {
    var $nextElement = $currentElement.next('.test');
    if($nextElement.length) {
        $currentElement = $nextElement;
        $('html, body').stop(true).animate({
            scrollTop: $nextElement.offset().top
        }, 1000);
    }
    return false;
}); 