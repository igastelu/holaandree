$.fn.extend({
  animateCss: function(animationName, callback) {
    var animationEnd = (function(el) {
      var animations = {animation: 'animationend', OAnimation: 'oAnimationEnd', MozAnimation: 'mozAnimationEnd', WebkitAnimation: 'webkitAnimationEnd',};
      for (var t in animations) {
        if (el.style[t] !== undefined) {return animations[t];}
      }
    })(document.createElement('div'));
    this.addClass('animated ' + animationName).one(animationEnd, function() {
      $(this).removeClass('animated ' + animationName);
      if (typeof callback === 'function') callback();
    });
    return this;
  },
});


(function($) { "use strict";

    var $container = $('.portfolio-wrap');
    var $filter = $('#filter');
    var $hi = $(window).height();
    var $wi = $(window).width();
    var alt = 100;
	var activi = true;

    var bod = document.documentElement
	
    function cool() {
        return window.pageYOffset || bod.scrollTop;
    }
	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};
	
	var IS_IPAD = navigator.userAgent.match(/iPad/i) != null;
	if (IS_IPAD) {
		var cbpAnimatedHeader = (function() {
			var b = document.documentElement,
				g = document.querySelector(".cbp-af-header"),
				e = false,
				a = 100;
		
			function f() {
				window.addEventListener("scroll", function(h) {
					if (!e) {
						e = true;
						setTimeout(d, 250)
					}
				}, false)
			}
		
			function d() {
				var h = c();
				if (h >= a) {
					classie.add(g, "cbp-af-header-shrink")
				} else {
					classie.remove(g, "cbp-af-header-shrink")
				}
				e = false
			}
		
			function c() {
				return window.pageYOffset || b.scrollTop
			}
			f()
		})();		
	}



    $("[data-fancybox]").fancybox({
        arrows: false,
        share: false,
        fullScreen: false,
        autoSize: false,
        width: '100%',
        height: '100%'
    });
	
	$(window).resize(function() {
		if(isMobile.any()) {
			var height = $(window).height();
			console.log('respira');
			//$('ul.slimmenu').css({'height': height + 'px'});
		}
		$('#home, #video_background').css({'height': ($(window).height()) + 'px'});
		if(isMobile.any()) {
			$('.imageReel').css({'height': (($(window).height()) - 90) + 'px'});
		}else{
			$('.imageReel').css({'height': (($(window).height()) - 190) + 'px'});
		}
	});

	if(isMobile.any()) {
		if (IS_IPAD) {}
		else{
			var height = $(window).height();
			//$('ul.slimmenu').css({'height': height + 'px'});
		}  
	}

	$('ul.slimmenu').on('click touchstar',function(){ 
		var width = $(window).width(); 
		if ((width <= 800)){ 
			if(isMobile.any()) {
				$(this).slideToggle(); 
				$('.modul_back').removeClass('animat slideOutUp slideInDown').addClass('animat slideOutUp').fadeOut(500);
				activi = true;
			}
		}			
	});
				
	$('ul.slimmenu').slimmenu({
		resizeWidth: '800',
		collapserTitle: '&nbsp;',
		easingEffect:'easeOutExpo',
		animSpeed:'medium',
		indentChildren: true,
		childrenIndenter: '&raquo;'
	});	
	
	$(".videoplay1").on('click', function() {
	$('#menu-wrap, .scroll, .logo').css('display', 'none');
	$(".fancybox-button--close").on('click', function() {
		$('#menu-wrap, .scroll, .logo').css('display', 'block');
	});
});

    $(document).ready(function() {

        $("body").queryLoader2({
            barColor: "rgb(0, 204, 255)",
            backgroundColor: "#FFFFFF",
            percentage: false,
            barHeight: 0,
            minimumTime: 1000,
            fadeOutTime: 1000,
            zIndex: 5,
            onComplete: function() {
                $('#loader_Andree').fadeOut(1000);
                $('#content').fadeIn(1000);
                resize_A();
                $('body').removeClass('oculta');
                $('.parallax').parallax("50%", 0.12);

                $('.grid').isotope({
                    layoutMode: 'packery',
                    itemSelector: '.grid-item',
                    percentPosition: true,
                    packery: {
                        gutter: '.gutter-sizer'
                    }
                });
                $('#showdown').delay(1000).css('display', 'block').animateCss('animated fadeInDown');
                $('#showup').delay(1000).css('display', 'block').animateCss('arriba_anim');
            }
        });

        $('#home, #video_background').css({
            'height': ($(window).height()) + 'px'
        });
				
		
		$(".scroll").click(function(event){
			event.preventDefault();
			var full_url = this.href;
			var parts = full_url.split("#");
			var trgt = parts[1];
			var target_offset = $("#"+trgt).offset();
			if(isMobile.any()) {
			   var target_top = target_offset.top;
			}else{
				var target_top = target_offset.top - 60;
			}
			$('html, body').animate({scrollTop:target_top},{ duration: 1000, easing: "easeOutExpo"});
		});

		$('.collapse-button') .click(function(){
			if(activi){
				$('.modul_back').removeClass('animat slideOutUp slideInDown').addClass('animat slideInDown').show();
				//$('.modul_back').stop(true).animate({height: $hi},250);
				activi = false;			
			}else{
				$('.modul_back').removeClass('animat slideOutUp slideInDown').addClass('animat slideOutUp').fadeOut(500);
				//$('.modul_back').stop(true).animate({height: 0},250);
				activi = true;
			}
		});
		
		
		if(!isMobile.any()) { $("html").niceScroll().hide(); }


        function resize_A() {
            var SW = $(window).width();
            var VH = SW * 0.5625;
            var SH = $(window).height();
            var VW = SH * 1.777;
            if (SW > VW) {
                $("#VideoEmbebed").width(SW).height(VH).css("top", -(VH - SH) / 2);
            } else {
                $("#VideoEmbebed").height(SH).width(VW).css("left", -(VW - SW) / 2);
            }

	   		if(isMobile.any()) {
				$('.imageReel').css({'height': (($(window).height()) - 90) + 'px'});
			}else{
				$('.imageReel').css({'height': (($(window).height()) - 190) + 'px'});
			}
			
			$('.modul_back').removeClass('animat slideOutUp slideInDown').addClass('animat slideOutUp').fadeOut(500);
			activi = true;

     	}

        $(window).resize(function() {
            resize_A();
        });

        var container = $('.portfolio-wrap');

        function splitColumns() {
            var winWidth = $(window).width(),
                columnNumb = 1;
            if (winWidth > 1280) {
                columnNumb = 4;
            } else if (winWidth > 1024) {
                columnNumb = 3;
            } else if (winWidth > 900) {
                columnNumb = 2;
            } else if (winWidth > 479) {
                columnNumb = 1;
            } else if (winWidth < 479) {
                columnNumb = 1;
            }
            return columnNumb;
        }

        function setColumns() {
            var winWidth = $(window).width(),
                columnNumb = splitColumns(),
                postWidth = Math.floor(winWidth / columnNumb);
        }

        container.imagesLoaded(function() {
            setColumns();
        });

        function setProjects() {
            setColumns();
            //container.isotope('reLayout');
        }

        $(window).bind('resize', function() {
            setProjects();
        });

        $(window).load(function() {
            setProjects();
        });


        $('.backTop').on('click', function() {
            $('html, body').animate({scrollTop: 0},{ duration: 1200, easing: "easeInOutCubic"});
        });


        $('.view-more').on('click', function() {
            $("#myList .portfolio-boxB").removeClass('hiddenMC');
            $(this).hide();

			$('.grid').isotope({
				layoutMode: 'packery',
				itemSelector: '.grid-item',
				percentPosition: true,
				packery: {
					gutter: '.gutter-sizer'
				}
			});
        });


        $('#navigation').slimmenu({
            resizeWidth: '800',
            collapserTitle: '&nbsp;',
            animSpeed: 'medium',
            easingEffect: null,
            indentChildren: false,
            childrenIndenter: '&nbsp;'
        });
		
		$('.parallax').parallax("50%", 0.4);
		$('.parallax2').parallax("50%", 0.4);
		$('.parallax1').parallax("50%", 0.4);


        $(window).resize(function() {
            $('.parallax').parallax("50%", 0.4);
            $('.parallax2').parallax("50%", 0.4);
            $('.parallax1').parallax("50%", 0.4);
        });

    });

    /*global $:false */
    $(function() {"use strict";
        $('#home, #video_background').css({'height': ($(window).height()) + 'px'});
		if(isMobile.any()) {
			$('.imageReel').css({'height': (($(window).height()) - 90) + 'px'});
		}else{
			$('.imageReel').css({'height': (($(window).height()) - 190) + 'px'});
		}
        $(window).resize(function() {
            $('#home, #video_background').css({'height': ($(window).height()) + 'px'});
			if(isMobile.any()) {
				$('.imageReel').css({'height': (($(window).height()) - 90) + 'px'});
			}else{
				$('.imageReel').css({'height': (($(window).height()) - 190) + 'px'});
			}
        });
    });

    //Portfolio filter 

    /*global $:false */
    $(window).load(function() {
        // Initialize isotope 
        $container.isotope({
            filter: '*',
            layoutMode: 'fitRows',
            animationOptions: {
                duration: 500,
                easing: 'linear'
            }
        });
    });

    //Counter 

    jQuery(document).ready(function($) {
        $('.counter').counterUp({
            delay: 100,
            time: 2000
        });
    });

})(jQuery);