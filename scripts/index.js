$(document).ready(function (){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if(scroll > 10){
            $("nav").removeClass("navTransparent");
            $("nav").addClass("navColor");
        }
        else{
            $("nav").removeClass("navColor");
            $("nav").addClass("navTransparent");
        }
    });
});