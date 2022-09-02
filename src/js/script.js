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
    
    const links = $(".navItem2 a, .menuContent a");

    links.click(function() {
        links.removeClass("active");
        $(this).addClass("active")

        mobileNavBackground.css({
            opacity: "0",
        })

        mobileNavParent.css({
            left: "-1500px",
        })

        setTimeout(function() {

        mobileNavBackground.css({
            display: "none",
        })

        }, 200)
    })

    const navBtn = $(".navBtn");
    const mobileNavBackground = $(".mobileNavBackground");
    const mobileNavParent = $(".mobileNavParent");
    const closeMobile = $(".closeMobile");

    navBtn.click(() => {

        mobileNavBackground.css({
            display: "block",
        })

        setTimeout(function() {

            mobileNavBackground.css({
                opacity: "1",
            })

            mobileNavParent.css({
                left: "0px",
            })

        }, 100)

    })

    closeMobile.click(() => {

        mobileNavBackground.css({
            opacity: "0",
        })

        mobileNavParent.css({
            left: "-1500px",
        })

        setTimeout(function() {

        mobileNavBackground.css({
            display: "none",
        })

        }, 200)

    })

    mobileNavBackground.click(() => {

        mobileNavParent.click(function() {
            return false;
        })

        mobileNavBackground.css({
            opacity: "0",
        })

        mobileNavParent.css({
            left: "-1500px",
        })

        setTimeout(function() {

        mobileNavBackground.css({
            display: "none",
        })

        }, 200)

    })

})