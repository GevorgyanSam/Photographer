"use strict";

$(function() {

    const navParent = $(".navParent");

    function navBar() {

        if($(window).scrollTop() > 0) {
            navParent.addClass("scrolled")
        } else {
            navParent.removeClass("scrolled")
        }

    }

    $(window).scroll(() => {

        navBar()

    })
    
    const links = $(".navItem2 a");

    links.click(function() {
        links.removeClass("active");
        $(this).addClass("active")
    })

})