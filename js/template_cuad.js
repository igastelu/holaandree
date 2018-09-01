
(function($) { "use strict";

    var $container = $('.portfolio-wrap');
    var $filter = $('#filter');
    var $hi = $(window).height();
    var $wi = $(window).width();
    var alt = 100;
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
	

    $.fn.extend({
        animateCss: function(animationName) {
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            this.addClass(animationName).one(animationEnd, function() {
                $(this).removeClass(animationName);
            });
        }
    });


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
			$('ul.slimmenu').css({'height': height + 'px'});
		}
		$('#home, #video_background').css({'height': ($(window).height()) + 'px'});
		if(isMobile.any()) {
			$('.imageReel').css({'height': (($(window).height()) - 90) + 'px'});
		}else{
			$('.imageReel').css({'height': (($(window).height()) - 190) + 'px'});
		}
	});
	
	//Navigation	

	if(isMobile.any()) {
		if (IS_IPAD) {}
		else{
			var height = $(window).height();
			$('ul.slimmenu').css({'height': height + 'px'});
		}  
	}


	$('ul.slimmenu').on('click touchstar',function(){
		var width = $(window).width(); 
		if ((width <= 800)){ 
			$(this).slideToggle(); 
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
                resize();
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
		
		if(isMobile.any()) {
			$('.imageReel').css({'height': (($(window).height()) - 90) + 'px'});
			$('.grid-item .portfolio-boxB img').css('display','none');
			$('.grid-item .portfolio-boxB .mobile_Img').css('display','block');
		}else{
			$('.grid-item .portfolio-boxB .mobile_Img').css('display','none');
			$('.imageReel').css({'height': (($(window).height()) - 190) + 'px'});
		}
		
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
		
		if(!isMobile.any()) { $("html").niceScroll().hide(); }


        function resize() {
            var SW = $(window).width();
            var VH = SW * 0.5625;
            var SH = $(window).height();
            var VW = SH * 1.777;
            if (SW > VW) {
                $("#VideoEmbebed").width(SW).height(VH).css("top", -(VH - SH) / 2);
            } else {
                $("#VideoEmbebed").height(SH).width(VW).css("left", -(VW - SW) / 2);
            }
        }

        $(window).resize(function() {
            resize();
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