/*global $,alert,jquery*/
$(document).ready(function () {
    "use strict";
    
    $("html").niceScroll();
    $("#thisdiv").niceScroll({cursorwidth : "100px"});
    $('.carousel').carousel({
        interval: 5000
    });


    $(window).on('load', function () {
        $("body").css("overflow", "auto");
        $(".loading-overlay").fadeOut(2000, function () {
            $(this).remove();
        });
    });
    //change option box
    $(function () {
        $('.gear-check').click(function () {
            $('.option-box').toggleClass('gear-clicked');
        });
    });

    var colorLi = $(".color-option ul li"), scrol = $(".scroll-up");

    colorLi
        .eq(0).css("backgroundColor", "#e41b17").end()
        .eq(1).css("backgroundColor", "#8808c7").end()
        .eq(2).css("backgroundColor", "#18b5f9");

    colorLi.click(function () {
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
    });
    
    //show and hide button scroll top
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 1757) {
            scrol.show();
        } else {
            scrol.hide();
        }
    });
    
    //when button scroll top clicked
    scrol.click(function () {
        $("html,body").animate({scrollTop : 0}, 2000);
    });
    
});