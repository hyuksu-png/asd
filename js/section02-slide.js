$(function(){
    $(".guidemap-btn01").click(function(e){
        $(".guidemodal-01").css("display","block");
        var swiper = new Swiper('.swiper-container', {
           spaceBetween: 30,
           centeredSlides: true,
           autoplay: {
             delay: 2800,
             disableOnInteraction: false,
           },
           pagination: {
               el: '.swiper-pagination',
               dynamicBullets: true,
             },
         spaceBetween: 30,
         effect: 'fade',
       
         
         });
       return false;               
    });
    $(".guide-menu01").click(function(e){
       $(".guidemodal-01").css("display","block");
       var swiper = new Swiper('.swiper-container', {
           spaceBetween: 30,
           centeredSlides: true,
           autoplay: {
             delay: 2800,
             disableOnInteraction: false,
           },
           pagination: {
               el: '.swiper-pagination',
               dynamicBullets: true,
             },
         spaceBetween: 30,
         effect: 'fade',
       
         
         });
      return false;               
   });

   $(".madal-close-text").click(function(){
       $(".guidemodal-01").css("display","none");
       return false;
   });