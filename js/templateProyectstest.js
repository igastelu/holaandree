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

$("[data-fancybox]").fancybox({
    arrows: false,
    share: false,
    fullScreen: false,
    autoSize: false,
    width: '100%',
    height: '100%',
    scrolling: 'no',
});

//Navigation	
	if(isMobile.any()) {
		$('.gutter-sizer').css(' width','5%');

		var height = $(window).height();
		$('ul.slimmenu').css({'height': height + 'px'});
	}

$('ul.slimmenu').on('click touchstar', function() {
	var width = $(window).width();
	if ((width <= 800)) {
		$(this).slideToggle();
		$('.modul_back').removeClass('animat slideOutUp slideInDown').addClass('animat slideOutUp').fadeOut(500);
		activi = true;
	}
});
$('ul.slimmenu').slimmenu({
	resizeWidth: '800',
	collapserTitle: '',
	easingEffect: null,
	animSpeed: 'medium',
	indentChildren: true,
	childrenIndenter: '&raquo;'
});
$(document).ready(
	function() {  
		if(!isMobile.any()) {
		$("html").niceScroll().hide(); 
		}
	}
);


$(document).ready(function() {

    $("body").queryLoader2({
        barColor: "rgb(0, 204, 255)",
        backgroundColor: "#FFFFFF",
        percentage: true,
        barHeight: 10,
        minimumTime: 1000,
        fadeOutTime: 1000,
        zIndex: 5,
        onComplete: function() {
            $('#loader_Andree').fadeOut(1000);
            $('body').removeClass('oculta');
			if(isMobile.any()) {
			}else{
            	$("html").getNiceScroll(0).doScrollTop(0, 100);
			}
            $('.grid').isotope({
                layoutMode: 'packery',
                itemSelector: '.grid-item',
                percentPosition: true,
                packery: {
                    gutter: '.gutter-sizer'
                }
            });
        }
    });

    $('.counter').counterUp({
        delay: 100,
        time: 2000
    });

    $('#home, #video_background').css({
        'height': ($(window).height()) + 'px'
    });
	
	if(isMobile.any()) {
		$('.imageReel').css({'height': (($(window).height()) - 90) + 'px'});
	}else{
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
		$('html, body').animate({scrollTop: target_top},{ duration: 1000, easing: "easeOutExpo"});
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


	$(window).resize(function() {
	    $('#home, #video_background').css({'height': ($(window).height()) + 'px'});
			if(isMobile.any()) {
				$('.imageReel').css({'height': (($(window).height()) - 90) + 'px'});
			}else{
				$('.imageReel').css({'height': (($(window).height()) - 190) + 'px'});
			}
			$('.modul_back').removeClass('animat slideOutUp slideInDown').addClass('animat slideOutUp').fadeOut(500);
			activi = true;
	});


});


$("#videoplay").on('click', function() {
	$('#menu-wrap, .scroll, .logo').css('display', 'none');
	$(".fancybox-button--close").on('click', function() {
		$('#menu-wrap, .scroll, .logo').css('display', 'block');
	});
});



(function($) {"use strict";

    $(function() {"use strict";
        $('#home, #video_background').css({'height': ($(window).height()) + 'px'});
        $(window).resize(function() {
            $('#home, #video_background').css({'height': ($(window).height()) + 'px'});
        });
    });

    var heightPercent = ($('.one').height() / $(window).height()) * 100;

    $('.grid').isotope({
        layoutMode: 'packery',
        itemSelector: '.grid-item',
        percentPosition: true,
        packery: {
            gutter: '.gutter-sizer'
        }
    });


})(jQuery);