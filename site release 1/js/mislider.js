﻿!function(e,t,i,s,n){var a=function(i,n){var a=this;return a.optionsInit={speed:700,pause:4e3,increment:1,stageHeight:!1,slidesOnStage:1,slidesContinuous:!0,slidePosition:"left",slideStart:"beg",slideWidth:!1,slideScaling:100,offsetV:0,centerV:!1,navList:!0,navButtons:!0,navButtonsShow:!1,navButtonsOpacity:.5,randomize:!1,slidesLoaded:!1,beforeTrans:!1,afterTrans:!1,classStage:"mis-stage",classSlider:"mis-slider",classSlide:"mis-slide",classNavButtons:"mis-nav-buttons",classNavList:"mis-nav-list",selectorSlider:"ol",selectorSlide:"li",modernizrBool:!1},a.options={},a.stage=!1,a.slider=!1,a.slides=!1,a.navButtons=!1,a.prev=!1,a.next=!1,a.navList=!1,a.navListItems=!1,a.slideCurrent=!1,a.animatedElements=e(),a.stageWidth=0,a.stageHeight=0,a.sliderWidth=0,a.slideWidth=0,a.slideWidthCurrent=0,a.slideScaling=a.optionsInit.slideScaling,a.scalingWidth=0,a.scalingMargin=0,a.offsetV=a.optionsInit.offsetV,a.slidesLengthOrig=0,a.slidesLength=0,a.indexCurrent=0,a.indexFirst=0,a.indexLast=0,a.increment=a.optionsInit.increment,a.slidesOnStage=a.optionsInit.slidesOnStage,a.speed=a.optionsInit.speed,a.navButtonsOpacity=a.optionsInit.navButtonsOpacity,a.navButtonsFade=!1,a.slidesContinuous=a.optionsInit.slidesContinuous,a.pause=a.optionsInit.pause,a.timer=!1,a.resizeTimer=!1,a.after=!1,a.classSlideClone="mis-clone",a.classSlideContainer="mis-container",a.classCurrent="mis-current",a.classPrev="mis-prev",a.classNext="mis-next",a.init=function(i,n){return a.options=e.extend({},a.optionsInit,n),a.stage=e(i),a.stage.fadeTo(0,0),a.slider=a.stage.children(a.options.selectorSlider).first(),a.slides=a.slider.children(a.options.selectorSlide),a.slidesLengthOrig=a.slides.length,a.animatedElements=a.animatedElements.add(a.slider),"beg"===String(a.options.slideStart)?a.indexCurrent=0:"mid"===String(a.options.slideStart)?a.indexCurrent=s.ceil(a.slidesLengthOrig/2)-1:"end"===String(a.options.slideStart)?a.indexCurrent=a.slidesLengthOrig-1:e.isNumeric(a.options.slideStart)&&parseInt(a.options.slideStart)<=a.slidesLengthOrig&&parseInt(a.options.slideStart)>0?a.indexCurrent=parseInt(a.options.slideStart)-1:a.indexCurrent=0,a.options.randomize&&a.randomize(),a.stage.hasClass(a.options.classStage)||a.stage.addClass(a.options.classStage),a.slider.hasClass(a.options.classSlider)||a.slider.addClass(a.options.classSlider),a.options.speed&&e.isNumeric(a.options.speed)&&(a.speed=s.abs(parseInt(a.options.speed))),a.options.pause===!1?a.pause=!1:e.isNumeric(a.options.pause)&&(a.pause=s.abs(parseInt(a.options.pause))),e.isNumeric(a.options.offsetV)&&(a.offsetV=Number(a.options.offsetV)),e.isNumeric(a.options.navButtonsOpacity)&&Number(a.options.navButtonsOpacity)>=0&&Number(a.options.navButtonsOpacity)<=1&&(a.navButtonsOpacity=Number(a.options.navButtonsOpacity)),e.isNumeric(a.options.slideScaling)&&Number(a.options.slideScaling)>=100&&(a.slideScaling=Number(a.options.slideScaling)),a.supportTransform(a.options.modernizrBool,i)||(a.slideScaling=100),a.optionsInit.slideScaling=a.slideScaling,e.isNumeric(a.options.increment)&&0!==parseInt(a.options.increment)&&(a.increment=parseInt(a.options.increment),a.optionsInit.increment=a.increment),a.options.navButtons&&(a.addNavButtons(a.stage),a.animatedElements=a.animatedElements.add(a.navButtons),a.options.navButtonsShow||(a.navButtonsFade=!0)),a.options.navList&&a.addNavList(),a.setup(),a.slidesOnStage>1&&a.slider.on("click",a.options.selectorSlide,function(t){e(this).index()!==a.indexCurrent&&(t.preventDefault(),a.autoplayOff(),a.transition(e(this).index(),!1,a.autoplayOn(a.increment)))}),(a.pause!==!1||a.navButtonsFade)&&a.stage.on({mouseenter:function(){if(a.pause!==!1&&a.autoplayOff(),a.navButtonsFade)if(a.animatedElements.is(":animated"))if(e.isFunction(a.after)){var t=a.after;a.after=function(){t(),a.navButtons.fadeTo(400,a.navButtonsOpacity)}}else a.after=function(){a.navButtons.fadeTo(400,a.navButtonsOpacity)};else a.navButtons.fadeTo(400,a.navButtonsOpacity)},mouseleave:function(){a.pause!==!1&&a.autoplayOn(a.increment),a.navButtonsFade&&a.navButtons.fadeTo(100,0)}}),e(t).on({load:function(){a.slideSetup(),a.updateNavButtons(),a.stage.fadeTo(600,1),a.autoplayOn(a.increment),e.isFunction(a.options.slidesLoaded)&&a.options.slidesLoaded()},resize:function(){a.autoplayOff(),clearTimeout(a.resizeTimer),a.resizeTimer=setTimeout(function(){a.resetSlider()},500)}}),this},a.setup=function(){a.slidesLength=a.slidesLengthOrig,a.indexLast=a.slidesLength-1,a.slides.each(function(){var t=e(this);t.hasClass(a.options.classSlide)||t.addClass(a.options.classSlide),t.children().hasClass(a.classSlideContainer)||t.wrapInner('<div class="'+a.classSlideContainer+'"></div>');var i=t.outerWidth(),s=t.outerHeight();i>a.slideWidthCurrent&&(a.slideWidthCurrent=i),s>a.stageHeight&&(a.stageHeight=s)}),e.isNumeric(a.options.slideWidth)&&parseInt(a.options.slideWidth)>0&&(a.slideWidthCurrent=parseInt(a.options.slideWidth)),e.isNumeric(a.options.stageHeight)&&parseInt(a.options.stageHeight)>0&&(a.stageHeight=parseInt(a.options.stageHeight)),a.indexCurrent=a.normalizeIndex(a.indexCurrent),a.stage.css({height:a.stageHeight}),a.stageWidth=a.stage.outerWidth();var t=s.floor((a.stageWidth-a.slideWidthCurrent)/(100*a.slideWidthCurrent/a.slideScaling))+1;t=1>t?1:t,a.slidesOnStage=t,e.isNumeric(a.options.slidesOnStage)&&parseInt(a.options.slidesOnStage)>=1&&parseInt(a.options.slidesOnStage)<=t&&(a.slidesOnStage=parseInt(a.options.slidesOnStage)),"center"===a.options.slidePosition&&(a.slidesOnStage=2*s.ceil(a.slidesOnStage/2)-1);var i=(a.increment+a.slidesOnStage)/2;i>a.slidesOnStage?a.increment=a.slidesOnStage:0>i&&(a.increment=-a.slidesOnStage),a.slidesOnStage>1?(a.slideWidth=(a.stageWidth-a.slideWidthCurrent)/(a.slidesOnStage-1),a.slideWidthCurrent<a.slideWidth&&!a.options.slideWidth&&(a.slideWidth=a.stageWidth/a.slidesOnStage,a.slideWidthCurrent=a.slideWidth)):(a.slideWidth=a.stageWidth,a.slideWidthCurrent=a.slideWidth,a.slideScaling=100),a.scalingWidth=a.slideWidth*a.slideScaling/100,a.scalingMargin=(a.slideWidth-a.scalingWidth)/2;var n=a.slidesLengthOrig-a.slidesOnStage;return n>=0&&a.options.slidesContinuous?(a.slidesContinuous=!0,a.slidesToClone=a.slidesOnStage+s.abs(a.increment)-1,a.slides.slice(a.slidesLength-a.slidesToClone).clone().addClass(a.classSlideClone).removeAttr("id").prependTo(a.slider).find("*").removeAttr("id"),a.slides.slice(0,a.slidesToClone).clone().addClass(a.classSlideClone).removeAttr("id").appendTo(a.slider).find("*").removeAttr("id"),a.indexFirst=a.slidesToClone,a.indexLast=a.slidesLength+a.slidesToClone-1,a.indexCurrent=a.indexCurrent+a.slidesToClone,a.slides=a.slider.children(a.options.selectorSlide),a.slidesLength=a.slides.length):a.slidesContinuous=!1,a.slideCurrent=a.slides.eq(a.indexCurrent),a.animatedElements=a.animatedElements.add(a.slides),a.sliderWidth=a.slideWidthCurrent+a.slideWidth*(a.slidesLength-1)+1,a.slider.css({left:a.leftOffset(a.indexCurrent),width:a.sliderWidth}),a.updateNavList(a.indexCurrent),this},a.transition=function(t,i,s,n){if(!a.animatedElements.is(":animated")&&t!==a.indexCurrent){var r=t,d=a.indexCurrent;a.slidesContinuous?(t<a.indexFirst?r=t+a.slidesLengthOrig:t>a.indexLast&&(r=t-a.slidesLengthOrig),r!==t&&(d=a.indexCurrent+a.slidesLengthOrig,t>r&&(d=a.indexCurrent-a.slidesLengthOrig))):r=a.normalizeIndex(t);var o=a.normalizeIndex(r)-a.normalizeIndex(d);if(o){e.isFunction(i)&&i(),e.isFunction(a.options.beforeTrans)&&a.options.beforeTrans();var l=function(){e.isFunction(s)&&s(),e.isFunction(a.options.afterTrans)&&a.options.afterTrans(),e.isFunction(a.after)&&(a.after(),a.after=!1)};if(a.slidesContinuous&&d!==a.indexCurrent){var u=a.slides.eq(d);100!==a.slideScaling&&(u.css({transform:"scale(1)",width:a.slideWidthCurrent,marginLeft:"0",marginRight:"0",borderSpacing:"100px"}),a.options.centerV&&u.children().first().css("marginTop",u.data("slideMarginTopCurrent"))),u.addClass(a.classCurrent).siblings().removeClass(a.classCurrent),a.slider.css("left",a.leftOffset(d)),100!==a.slideScaling&&(a.slideCurrent.css({transform:"scale("+100/a.slideScaling+")",width:a.scalingWidth,marginLeft:a.scalingMargin,marginRight:a.scalingMargin,borderSpacing:a.slideScaling}),a.options.centerV&&a.slideCurrent.children().first().css("marginTop",a.slideCurrent.data("slideMarginTop"))),a.indexCurrent=d,a.slideCurrent=a.slides.eq(a.indexCurrent)}a.navButtons?a.navButtons.fadeTo(100,n?a.navButtonsOpacity:0,function(){a.navButtons.fadeTo(100,0,function(){a.animateSlides(r,function(){a.stage.find(":hover").length||a.options.navButtonsShow?a.navButtons.fadeTo(400,a.navButtonsOpacity,l):l()})})}):a.animateSlides(r,l)}}return this},a.animateSlides=function(t,i){a.slideCurrent.removeClass(a.classCurrent);var s=a.slides.eq(t);return 100!==a.slideScaling&&(s.animate({marginLeft:"0",marginRight:"0",width:a.slideWidthCurrent},{duration:a.speed,queue:!1}).animate({borderSpacing:"100px"},{step:function(t){e(this).css({transform:"scale("+100/t+")"})},duration:a.speed,queue:!1}),a.slideCurrent.animate({marginLeft:a.scalingMargin,marginRight:a.scalingMargin,width:a.scalingWidth},{duration:a.speed,queue:!1}).animate({borderSpacing:a.slideScaling},{step:function(t){e(this).css({transform:"scale("+100/t+")"})},duration:a.speed,queue:!1}),a.options.centerV&&(s.children().first().animate({marginTop:s.data("slideMarginTopCurrent")},{duration:a.speed,queue:!1}),a.slideCurrent.children().first().animate({marginTop:a.slideCurrent.data("slideMarginTop")},{duration:a.speed,queue:!1}))),a.slider.animate({left:a.leftOffset(t)},{duration:a.speed,queue:!1,complete:function(){a.indexCurrent=t,a.slideCurrent=s,a.updateNavList(t),a.slideCurrent.addClass(a.classCurrent).siblings().removeClass(a.classCurrent),e.isFunction(i)&&i()}}),this},a.autoplayOn=function(e){return a.pause!==!1&&(a.timer=clearInterval(a.timer),a.stage.find(":hover").length||(a.timer=setInterval(function(){a.animatedElements.is(":animated")||a.transition(a.indexCurrent+e)},a.pause))),this},a.autoplayOff=function(){return a.timer=clearInterval(a.timer),this},a.addNavButtons=function(t){var i=e(t),n=e('<div class="'+a.options.classNavButtons+'"><a href="#" class="'+a.classPrev+'">Prev</a><a href="#" class="'+a.classNext+'">Next</a></div>');return n.css({opacity:a.options.navButtonsShow?a.navButtonsOpacity:0}).children("a").on("click",function(e){e.preventDefault(),this.className===a.classPrev?(a.autoplayOff(),a.transition(a.indexCurrent-s.abs(a.increment),!1,a.autoplayOn(a.increment),!0)):this.className===a.classNext&&(a.autoplayOff(),a.transition(a.indexCurrent+s.abs(a.increment),!1,a.autoplayOn(a.increment),!0))}),i.append(n),a.navButtons=i.find("."+a.options.classNavButtons),a.prev=a.navButtons.find("."+a.classPrev),a.next=a.navButtons.find("."+a.classNext),this},a.updateNavButtons=function(){a.navButtons&&a.navButtons.css({width:a.slideWidthCurrent,left:a.slideCurrent.offset().left-a.stage.offset().left}).children("a").css({height:a.stageHeight,paddingTop:(50+a.offsetV)*a.stageHeight/100})},a.addNavList=function(){var t='<ol class="'+a.options.classNavList+'">';a.slides.each(function(i){var s=i+1,n=e(this).find(":header").sort(function(t,i){var s=e(t).prop("tagName"),n=e(i).prop("tagName");return parseInt(s.match(/\d+/),10)-parseInt(n.match(/\d+/),10)}).eq(0).html();n?s=n:(n=e(this).find("figcaption").eq(0).html(),n?s=n:(n=e(this).find("img").eq(0).attr("title"),n&&(s=n))),t+='<li><a href="#" title="'+s+'">'+s+"</a></li>"}),t+="</ol>";var i=e(t).on("click","li",function(t){t.preventDefault(),e(this).index()!==a.indexCurrent-a.indexFirst&&(a.autoplayOff(),a.transition(e(this).index()+a.indexFirst,!1,a.autoplayOn(a.increment)))});return a.stage.prepend(i),a.navList=a.stage.children().first(),a.navListItems=a.navList.children("li"),this},a.updateNavList=function(e){a.navListItems.length&&a.navListItems.eq(e-a.indexFirst).addClass(a.classCurrent).siblings().removeClass(a.classCurrent)},a.randomize=function(){return a.slides.sort(function(){return.5-s.random()}),a.slides.detach().appendTo(a.slider),this},a.leftOffset=function(e){var t=a.slideWidth*e*-1,i=t;return"center"===a.options.slidePosition?i=t+s.floor(a.slidesOnStage/2)*a.slideWidth:"right"===a.options.slidePosition&&(i=t+(a.slidesOnStage-1)*a.slideWidth),i},a.resetSlider=function(){if(a.animatedElements.is(":animated"))if(e.isFunction(a.after)){var t=a.after;a.after=function(){t(),a.resetSlider}}else a.after=a.resetSlider;else a.autoplayOff(),a.stage.removeAttr("style"),a.slider.removeAttr("style"),a.slides.removeAttr("style"),a.slides.filter("."+a.classSlideClone).remove(),a.slides=a.slider.children(a.options.selectorSlide),a.stageHeight=0,a.slideWidthCurrent=0,a.slideScaling=a.optionsInit.slideScaling,a.indexCurrent-=a.slidesToClone,a.indexFirst=0,a.increment=a.optionsInit.increment,a.after=!1,a.setup(),a.slideSetup(),a.updateNavButtons(),a.autoplayOn(a.increment);return this},a.normalizeIndex=function(e){return e=(e%a.slidesLengthOrig+a.slidesLengthOrig)%a.slidesLengthOrig},a.slideSetup=function(){a.slides.each(function(t){var i=e(this);i.css({"transform-origin":"50% "+String(50+a.offsetV)+"%",width:a.slideWidthCurrent}),a.options.centerV&&a.getMarginTop(i,"slideMarginTopCurrent"),i.css({width:a.scalingWidth}),100!==a.slideScaling&&i.css({marginLeft:a.scalingMargin,marginRight:a.scalingMargin,transform:"scale("+100/a.slideScaling+")",borderSpacing:a.slideScaling}),a.options.centerV&&i.children().first().css("marginTop",a.getMarginTop(i,"slideMarginTop")),t===a.indexCurrent&&(i.css({borderSpacing:"100px",width:a.slideWidthCurrent,marginLeft:0,marginRight:0,transform:"scale(1)"}).addClass(a.classCurrent).siblings().removeClass(a.classCurrent),a.options.centerV&&i.children().first().css("marginTop",a.getMarginTop(i,"slideMarginTopCurrent")))})},a.getMarginTop=function(e,t){var i=0,s=e.children().first().outerHeight();return s>a.stageHeight&&(i=(a.stageHeight-s)/2),e.data(t,i),i},a.supportTransform=function(e,t){var i=!1;if(e&&Modernizr)Modernizr.csstransforms&&(i=!0);else{var s=t.style;("undefined"!=typeof s.transform||"undefined"!=typeof s.WebkitTransform||"undefined"!=typeof s.msTransform)&&(i=!0)}return i},a.init(i,n),this};e.fn.miSlider=function(t){return this.each(function(){var i=e(this);i.data("miSlider")||i.data("miSlider",new a(this,t))})}}(jQuery,window,document,Math);