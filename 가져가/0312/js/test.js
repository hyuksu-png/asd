$(function(){
    $('.menus').mouseover(function(){
        $(this).children('ul').stop().slideDown();
    });
});





setInterval(function(){
    $(".slide>ul").delay(2500);
    $(".slide>ul").animate({marginLeft:"-1200px"},500);
        $(".slide>ul").delay(2500);
    $(".slide>ul").animate({marginLeft:"-2400px"},500);
        $(".slide>ul").delay(2500);
    $(".slide>ul").animate({marginLeft:"0"},500);
});