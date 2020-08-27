$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".menu").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".menu").removeClass("active");
        }
    });
});