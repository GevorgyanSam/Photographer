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

    function mobileMenu() {

        $(".mobileNavParent").css({
            top: $(window).scrollTop(),
        })

    }

    $(window).scroll(() => {

        navBar()
        mobileMenu()

    })
    
    const links = $(".navItem2 a, .menuContent a");

    links.click(function() {
        links.removeClass("active");
        $(this).addClass("active")
    })

    const navBtn = $(".navBtn");
    const mobileNavParent = $(".mobileNavParent");
    const closeMobile = $(".closeMobile");

    navBtn.click(() => {

        mobileNavParent.css({
            left: "0px",
        })

    })

    closeMobile.click(() => {

        mobileNavParent.css({
            left: "-1500px",
        })

    })

})