"use strict";

$(document).ready(function() {



    
    $(window).scroll(() => {

        navBar()
        lazyHomeContent()
        aboutAnimation()
        portfolioAnimation()
        galleryAnimation()
        servicesAnimation()
        contactAnimation()
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

    const theme = $("#theme");
    const logo = $(".logo");

    theme.click(function() {

        if(theme.hasClass("fa-moon")) {
            theme.removeClass("fa-moon")
            theme.addClass("fa-sun")
            logo.attr("src", "img/logo-light.png")
            $("body").addClass("light")
        } else if (theme.hasClass("fa-sun")) {
            theme.removeClass("fa-sun")
            theme.addClass("fa-moon")
            logo.attr("src", "img/logo.png")
            $("body").removeAttr("class")
        }

    })




    
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

    drinks.click(function() {

        portfolioImageParent.removeClass("all foods events pastries");
        portfolioImageParent.addClass("drinks")

    })

    events.click(function() {

        portfolioImageParent.removeClass("all foods drinks pastries");
        portfolioImageParent.addClass("events")

    })

    pastries.click(function() {

        portfolioImageParent.removeClass("all foods drinks events");
        portfolioImageParent.addClass("pastries")

    })




    
    // ----- ----- ----- GALLERY ----- ----- ----- 
    
    
    
    
    

    function galleryAnimation() {

        var gallery = $("#gallery");
        var wScroll = $(window).scrollTop() + $(window).height();
        var galleryAnimationParent = gallery.offset().top + gallery.height() / 2;

        if(wScroll >= galleryAnimationParent) {

            $(".galleryAnimationNone").css({
                display: "block",
            })

        }

    }




    
    // ----- ----- ----- SERVICES ----- ----- ----- 
    
    
    
    
    

    function servicesAnimation() {

        var services = $("#services");
        var wScroll = $(window).scrollTop() + $(window).height();
        var servicesAnimationParent = services.offset().top + services.height() / 2;

        if(wScroll >= servicesAnimationParent) {

            $(".servicesAnimationNone").css({
                display: "block",
            })

        }

    }




    
    // ----- ----- ----- CONTACT ----- ----- ----- 
    
    
    
    
    

    function contactAnimation() {

        var contact = $("#contact");
        var wScroll = $(window).scrollTop() + $(window).height();
        var contactAnimationParent = contact.offset().top + contact.height() / 2;

        if(wScroll >= contactAnimationParent) {

            $(".contactAnimationNone").css({
                display: "block",
            })

        }

    }

    function contactFocus() {

        const firstName = $("#firstName")
        const lastName = $("#lastName")
        const email = $("#email")
        const subject = $("#subject")
        const message = $("#message")
        const forFirstName = $("#forFirstName")
        const forLastName = $("#forLastName")
        const forEmail = $("#forEmail")
        const forSubject = $("#forSubject")
        const forMessage = $("#forMessage")

        firstName.focus(function() {

            if(theme.hasClass("fa-moon")) {

                firstName.css({
                    borderBottom: "1px solid #34e3c9"
                })

                forFirstName.css({
                    left: "0px",
                    top: "-10px",
                    fontSize: "14px",
                })

            }

        })

        firstName.blur(function() {

            if(theme.hasClass("fa-moon")) {

                if(firstName.val() == "") {

                    firstName.css({
                        borderBottom: "1px solid #c8c9cd"
                    })
    
                    forFirstName.css({
                        left: "5px",
                        top: "15px",
                        fontSize: "18px",
                    })

                }

            }

        })

        lastName.focus(function() {

            if(theme.hasClass("fa-moon")) {

                lastName.css({
                    borderBottom: "1px solid #34e3c9"
                })

                forLastName.css({
                    left: "0px",
                    top: "-10px",
                    fontSize: "14px",
                })

            }

        })

        lastName.blur(function() {

            if(theme.hasClass("fa-moon")) {

                if(lastName.val() == "") {
                    
                    lastName.css({
                        borderBottom: "1px solid #c8c9cd"
                    })
    
                    forLastName.css({
                        left: "5px",
                        top: "15px",
                        fontSize: "18px",
                    })

                }

            }

        })

        email.focus(function() {

            if(theme.hasClass("fa-moon")) {

                email.css({
                    borderBottom: "1px solid #34e3c9"
                })

                forEmail.css({
                    left: "0px",
                    top: "-10px",
                    fontSize: "14px",
                })

            }

        })

        email.blur(function() {

            if(theme.hasClass("fa-moon")) {

                if(email.val() == "") {

                    email.css({
                        borderBottom: "1px solid #c8c9cd"
                    })
    
                    forEmail.css({
                        left: "5px",
                        top: "15px",
                        fontSize: "18px",
                    })

                }

            }

        })

        subject.focus(function() {

            if(theme.hasClass("fa-moon")) {

                subject.css({
                    borderBottom: "1px solid #34e3c9"
                })

                forSubject.css({
                    left: "0px",
                    top: "-10px",
                    fontSize: "14px",
                })

            }

        })

        subject.blur(function() {

            if(theme.hasClass("fa-moon")) {

                if(subject.val() == "") {

                    subject.css({
                        borderBottom: "1px solid #c8c9cd"
                    })
    
                    forSubject.css({
                        left: "5px",
                        top: "15px",
                        fontSize: "18px",
                    })

                }

            }

        })

        message.focus(function() {

            if(theme.hasClass("fa-moon")) {

                message.css({
                    borderBottom: "1px solid #34e3c9"
                })

                forMessage.css({
                    left: "0px",
                    top: "-10px",
                    fontSize: "14px",
                })

            }

        })

        message.blur(function() {

            if(theme.hasClass("fa-moon")) {

                if(message.val() == "") {

                    message.css({
                        borderBottom: "1px solid #c8c9cd"
                    })
    
                    forMessage.css({
                        left: "5px",
                        top: "15px",
                        fontSize: "18px",
                    })

                }

            }

        })

        firstName.focus(function() {

            if(theme.hasClass("fa-sun")) {

                firstName.css({
                    borderBottom: "1px solid #32abff"
                })

                forFirstName.css({
                    left: "0px",
                    top: "-10px",
                    fontSize: "14px",
                })

            }

        })

        firstName.blur(function() {

            if(theme.hasClass("fa-sun")) {

                if(firstName.val() == "") {

                    firstName.css({
                        borderBottom: "1px solid rgb(139, 131, 131)"
                    })
    
                    forFirstName.css({
                        left: "5px",
                        top: "15px",
                        fontSize: "18px",
                    })

                }

            }

        })

        lastName.focus(function() {

            if(theme.hasClass("fa-sun")) {

                lastName.css({
                    borderBottom: "1px solid #32abff"
                })

                forLastName.css({
                    left: "0px",
                    top: "-10px",
                    fontSize: "14px",
                })

            }

        })

        lastName.blur(function() {

            if(theme.hasClass("fa-sun")) {

                if(lastName.val() == "") {
                    
                    lastName.css({
                        borderBottom: "1px solid rgb(139, 131, 131)"
                    })
    
                    forLastName.css({
                        left: "5px",
                        top: "15px",
                        fontSize: "18px",
                    })

                }

            }

        })

        email.focus(function() {

            if(theme.hasClass("fa-sun")) {

                email.css({
                    borderBottom: "1px solid #32abff"
                })

                forEmail.css({
                    left: "0px",
                    top: "-10px",
                    fontSize: "14px",
                })

            }

        })

        email.blur(function() {

            if(theme.hasClass("fa-sun")) {

                if(email.val() == "") {

                    email.css({
                        borderBottom: "1px solid rgb(139, 131, 131)"
                    })
    
                    forEmail.css({
                        left: "5px",
                        top: "15px",
                        fontSize: "18px",
                    })

                }

            }

        })

        subject.focus(function() {

            if(theme.hasClass("fa-sun")) {

                subject.css({
                    borderBottom: "1px solid #32abff"
                })

                forSubject.css({
                    left: "0px",
                    top: "-10px",
                    fontSize: "14px",
                })

            }

        })

        subject.blur(function() {

            if(theme.hasClass("fa-sun")) {

                if(subject.val() == "") {

                    subject.css({
                        borderBottom: "1px solid rgb(139, 131, 131)"
                    })
    
                    forSubject.css({
                        left: "5px",
                        top: "15px",
                        fontSize: "18px",
                    })

                }

            }

        })

        message.focus(function() {

            if(theme.hasClass("fa-sun")) {

                message.css({
                    borderBottom: "1px solid #32abff"
                })

                forMessage.css({
                    left: "0px",
                    top: "-10px",
                    fontSize: "14px",
                })

            }

        })

        message.blur(function() {

            if(theme.hasClass("fa-sun")) {

                if(message.val() == "") {

                    message.css({
                        borderBottom: "1px solid rgb(139, 131, 131)"
                    })
    
                    forMessage.css({
                        left: "5px",
                        top: "15px",
                        fontSize: "18px",
                    })

                }

            }

        })

    }

    

    contactFocus()


})
