"use strict";


jQuery(document).ready(function ($) {

    /*---------------------------------------------*
     * Mobile menu
     ---------------------------------------------*/
    $(document).on('click', '.navbar-collapse.in', function (e) {
        if ($(e.target).is('a')) {
            $(this).collapse('hide');
        }
    });

    $('ul.navbar-nav li').hover(function () {
        $(this).children('ul').stop(true, false, true).fadeToggle(300);
    });

    /*---------------------------------------------*
     * STICKY scroll
     ---------------------------------------------*/
    $("").localScroll();

    /*---------------------------------------------*
     * Main Menu Scroll
     ---------------------------------------------*/
    jQuery(window).scroll(function () {
        var top = jQuery(document).scrollTop();
        var height = 5;
        //alert(batas);

        if (top > height) {
            jQuery('.navbar-fixed-top').addClass('menu-scroll');
        } else {
            jQuery('.navbar-fixed-top').removeClass('menu-scroll');
        }
    });
});







