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
    $("#trailer-modal").on('hide.bs.modal', function (event) {
        $('.trailer').trigger('pause');
    });
    // Pauses video when switching to a different carousel item
    $('.carousel-control-next').click(function() {
        $(".trailer").each(function () { this.pause() });
        $(".carousel-item > video").each(function () { this.pause() });
    });
    $('.carousel-control-prev').click(function() {
        $(".trailer").each(function () { this.pause() });
        $(".carousel-item > video").each(function () { this.pause() });
    });
});