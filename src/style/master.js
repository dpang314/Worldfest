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
    $('.carousel-control-next').click(function() {
        $(".trailer").each(function () { this.pause() });
    });
    $('.carousel-control-prev').click(function() {
        $(".trailer").each(function () { this.pause() });
    });
});