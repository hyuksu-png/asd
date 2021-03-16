$(function(){
    $('.menus>div').mouseover(function(){
        $(this).children('ul').stop().slideDown();
    });
    $('.menus>div').mouseout(function(){
        $(this).children('ul').stop().slideUp();
    });
    $('.event01-contents').click(function(){
        $('.modal').css("display","block");
    });
        $('.modal-close').click(function(){
        $('.modal').css("display","none");
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