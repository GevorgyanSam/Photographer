"use strict";$(document).ready((function(){$(window).scroll((()=>{var e,a,i;$(window).scrollTop()>0?s.addClass("scrolled"):s.removeClass("scrolled"),r.css({transform:"translateY("+.35*$(window).scrollTop()+"px)"}),e=$("#about"),a=$(window).scrollTop()+$(window).height(),i=e.offset().top+e.height()/2,a>=i&&$(".aboutAnimationNone").css({display:"block"}),function(){var s=$("#portfolio"),o=$(window).scrollTop()+$(window).height(),t=s.offset().top+s.height()/2;o>=t&&$(".portfolioAnimationNone").css({display:"block"})}(),function(){var s=$("#gallery"),o=$(window).scrollTop()+$(window).height(),t=s.offset().top+s.height()/2;o>=t&&$(".galleryAnimationNone").css({display:"block"})}(),function(){var s=$("#services"),o=$(window).scrollTop()+$(window).height(),t=s.offset().top+s.height()/2;o>=t&&$(".servicesAnimationNone").css({display:"block"})}(),o.each((function(){$(this.hash).offset().top<$(window).scrollTop()+5&&(o.removeClass("active"),$(this).addClass("active"))})),t.each((function(){$(this.hash).offset().top<$(window).scrollTop()+5&&(t.removeClass("active"),$(this).addClass("active"))}))}));const s=$(".navParent");const o=$(".navItem2 a"),t=$(".menuContent a");o.click((function(){o.removeClass("active"),$(this).addClass("active"),a.css({opacity:"0"}),i.css({left:"-1500px"}),setTimeout((function(){a.css({display:"none"})}),200)})),t.click((function(){t.removeClass("active"),$(this).addClass("active"),a.css({opacity:"0"}),i.css({left:"-1500px"}),setTimeout((function(){a.css({display:"none"})}),200)}));const e=$(".navBtn"),a=$(".mobileNavBackground"),i=$(".mobileNavParent"),n=$(".closeMobile");e.click((()=>{a.css({display:"block"}),setTimeout((function(){a.css({opacity:"1"}),i.css({left:"0px"})}),100)})),n.click((()=>{a.css({opacity:"0"}),i.css({left:"-1500px"}),setTimeout((function(){a.css({display:"none"})}),200)})),a.click((()=>{a.css({opacity:"0"}),i.css({left:"-1500px"}),setTimeout((function(){a.css({display:"none"})}),200)}));const c=$("#theme"),l=$(".logo");c.click((function(){c.hasClass("fa-moon")?(c.removeClass("fa-moon"),c.addClass("fa-sun"),l.attr("src","C:/Users/User/Desktop/Photographer/img/logo-light.png"),$("body").addClass("light")):c.hasClass("fa-sun")&&(c.removeClass("fa-sun"),c.addClass("fa-moon"),l.attr("src","C:/Users/User/Desktop/Photographer/img/logo.png"),$("body").removeAttr("class"))}));const r=$(".homeContent");const d=$(".portfolioBtnParent button");d.each((function(){$(this).click((function(){d.removeAttr("class"),$(this).addClass("active")}))}));const f=$("#all"),p=$("#foods"),h=$("#drinks"),v=$("#events"),m=$("#pastries"),u=$(".portfolioImageParent");f.click((function(){u.removeClass("foods drinks events pastries"),u.addClass("all")})),p.click((function(){u.removeClass("all drinks events pastries"),u.addClass("foods")})),h.click((function(){u.removeClass("all foods events pastries"),u.addClass("drinks")})),v.click((function(){u.removeClass("all foods drinks pastries"),u.addClass("events")})),m.click((function(){u.removeClass("all foods drinks events"),u.addClass("pastries")}))}));
//# sourceMappingURL=script.js.map