"use strict";$(document).ready((function(){$(window).scroll((()=>{var c,e,i;$(window).scrollTop()>0?s.addClass("scrolled"):s.removeClass("scrolled"),a.css({transform:"translateY("+.35*$(window).scrollTop()+"px)"}),c=$("#about"),e=$(window).scrollTop()+$(window).height(),i=c.offset().top+c.height()/2,e>=i&&$(".aboutAnimationNone").css({display:"block"}),t.each((function(){$(this.hash).offset().top<$(window).scrollTop()+5&&(t.removeClass("active"),$(this).addClass("active"))})),o.each((function(){$(this.hash).offset().top<$(window).scrollTop()+5&&(o.removeClass("active"),$(this).addClass("active"))}))}));const s=$(".navParent");const t=$(".navItem2 a"),o=$(".menuContent a");t.click((function(){t.removeClass("active"),$(this).addClass("active"),e.css({opacity:"0"}),i.css({left:"-1500px"}),setTimeout((function(){e.css({display:"none"})}),200)})),o.click((function(){o.removeClass("active"),$(this).addClass("active"),e.css({opacity:"0"}),i.css({left:"-1500px"}),setTimeout((function(){e.css({display:"none"})}),200)}));const c=$(".navBtn"),e=$(".mobileNavBackground"),i=$(".mobileNavParent"),n=$(".closeMobile");c.click((()=>{e.css({display:"block"}),setTimeout((function(){e.css({opacity:"1"}),i.css({left:"0px"})}),100)})),n.click((()=>{e.css({opacity:"0"}),i.css({left:"-1500px"}),setTimeout((function(){e.css({display:"none"})}),200)})),e.click((()=>{e.css({opacity:"0"}),i.css({left:"-1500px"}),setTimeout((function(){e.css({display:"none"})}),200)}));const a=$(".homeContent");const l=$(".portfolioBtnParent button");l.each((function(){$(this).click((function(){l.removeClass("active"),$(this).addClass("active")}))}))}));
//# sourceMappingURL=script.js.map