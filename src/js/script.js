"use strict";

$(document).ready(function() {



    
    $(window).scroll(() => {

        navBar()
        lazyHomeContent()
        aboutAnimation()
        portfolioAnimation()
        activeLinkOnScroll()

    })





// ----- ----- ----- NAVBAR ----- ----- ----- 





    const navParent = $(".navParent");

    function navBar() {

        if($(window).scrollTop() > 0) {
            navParent.addClass("scrolled")
        } else {
            navParent.removeClass("scrolled")
        }

    }
    
    const links1 = $(".navItem2 a");
    const links2 = $(".menuContent a");

    links1.click(function() {

        links1.removeClass("active");
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

    links2.click(function() {

        links2.removeClass("active");
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

    function activeLinkOnScroll() {

        links1.each(function() {

            let sectionOffset = $(this.hash).offset().top;

            if(sectionOffset < $(window).scrollTop() + 5) {

                links1.removeClass("active")
                $(this).addClass("active")

            }

        })

        links2.each(function() {
            
            let sectionOffset2 = $(this.hash).offset().top;

            if(sectionOffset2 < $(window).scrollTop() + 5) {

                links2.removeClass("active")
                $(this).addClass("active")

            }

        })

    }




    
// ----- ----- ----- HOME ----- ----- ----- 




    const homeContent = $(".homeContent");

    function lazyHomeContent() {

        homeContent.css({
            transform: "translateY(" + ($(window).scrollTop() * 0.35) + "px)"
        })

    }




    
// ----- ----- ----- ABOUT ----- ----- ----- 





    function aboutAnimation() {

        var about = $("#about");
        var wScroll = $(window).scrollTop() + $(window).height();
        var aboutAnimationParent = about.offset().top + about.height() / 2;

        if(wScroll >= aboutAnimationParent) {

            $(".aboutAnimationNone").css({
                display: "block",
            })

        }

    }




    
    // ----- ----- ----- PORTFOLIO ----- ----- ----- 
    
    
    
    
    
    const portfolioBtn = $(".portfolioBtnParent button");

    portfolioBtn.each(function() {

        $(this).click(function() {

            portfolioBtn.removeAttr("class");
            $(this).addClass("active")

        })

    })

    function portfolioAnimation() {

        var portfolio = $("#portfolio");
        var wScroll = $(window).scrollTop() + $(window).height();
        var portfolioAnimationParent = portfolio.offset().top + portfolio.height() / 2;

        if(wScroll >= portfolioAnimationParent) {

            $(".portfolioAnimationNone").css({
                display: "block",
            })

        }

    }

    const all = $("#all");
    const foods = $("#foods");
    const drinks = $("#drinks");
    const events = $("#events");
    const pastries = $("#pastries");
    const portfolioImageParent = $(".portfolioImageParent");

    all.click(function() {

        portfolioImageParent.removeClass("foods drinks events pastries");
        portfolioImageParent.addClass("all")

    })

    foods.click(function() {

        portfolioImageParent.removeClass("all drinks events pastries");
        portfolioImageParent.addClass("foods")

    })


})