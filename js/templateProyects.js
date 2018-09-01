(function($) { "use strict";

//Home fit screen	
		
	/*global $:false */
	$(function(){"use strict";
		$('#home, #video_background').css({'height':($(window).height())+'px'});
		$('.imageReel').css({'height':(($(window).height()) - 190)+'px'});
		$(window).resize(function(){
			$('#home, #video_background').css({'height':($(window).height())+'px'});
			$('.imageReel').css({'height':(($(window).height()) - 190)+'px'});
		});
	});


//Scrolling	
		
	$(document).ready(
	function() {  
		$("html").niceScroll();
		}
	);
	
	
//Navigation	

$('ul.slimmenu').on('click',function(){
var width = $(window).width(); 
if ((width <= 800)){ 
    $(this).slideToggle(); 
}	
});				
$('ul.slimmenu').slimmenu(
{
    resizeWidth: '800',
    collapserTitle: '',
    easingEffect:'easeInOutQuint',
    animSpeed:'medium',
    indentChildren: true,
    childrenIndenter: '&raquo;'
});	



/*global $:false */
$(document).ready(function(){"use strict";
	$(".scroll").click(function(event){

		event.preventDefault();

		var full_url = this.href;
		var parts = full_url.split("#");
		var trgt = parts[1];
		var target_offset = $("#"+trgt).offset();
		var target_top = target_offset.top - 60;

		$('html, body').animate({scrollTop:target_top}, 800);
	});

	var html = "<iframe src=''; style='height: 100%; width: 100%;' frameborder='0' scrolling='no'  webkitallowfullscreen mozallowfullscreen allowfullscreen id='iframevideo'>...</iframe><div id='closeVideo'></div>";

	$("#videoplay").click(function(){
		$('.tap-video').empty();
		var url = $(this).attr('data-url');
		$('.tap-video').css('display','block');
		$('.tap-video').append(html);
		$('#iframevideo').attr('src', url);
		$('#menu-wrap, .scroll').css('display','none');
		$('html, body').animate({scrollTop:0}, 500);

		$("#closeVideo").click(function(){
			$('.tap-video').css('display','none');
			$('#iframevideo').attr('src', '');
			$('#menu-wrap, .scroll').css('display','block');
			$('.tap-video').empty();
		});

	});


});

 
	
	
//Tooltip

$(document).ready(function() {
	$(".tipped").tipper();
});	
 

//Portfolio filter 

/*global $:false */
	$(window).load(function () {
	    var $container = $('.portfolio-wrap');
	    var $filter = $('#filter');
	    // Initialize isotope 
	    $container.isotope({
	        filter: '*',
	        layoutMode: 'fitRows',
	        animationOptions: {
	            duration: 750,
	            easing: 'linear'
	        },
	        masonry: {
				//columnWidth: 200,
				//isFitWidth: true,
				//gutter: 20
			}
	    });


	    // Filter items when filter link is clicked
	    $filter.find('a').click(function () {
	        var selector = $(this).attr('data-filter');
	        $filter.find('a').removeClass('current');
	        $(this).addClass('current');
	        $container.isotope({
	            filter: selector,
	            animationOptions: {
	                animationDuration: 750,
	                easing: 'linear',
	                queue: false,
	            }
	        });
	        return false;
	    });	
	});

// Portfolio Isotope
	
  jQuery(document).ready(function($){  
  
	var container = $('.portfolio-wrap');

		function splitColumns() { 
			var winWidth = $(window).width(), 
				columnNumb = 1;
			if (winWidth > 1280) {
				columnNumb = 4;
			} else if (winWidth > 1024) {
				columnNumb = 4;
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
			
			container.find('.portfolio-box').each(function () { 
				$(this).css( { 
					width : (postWidth-24) + 'px' ,
					margin: '10px'
				});
			});
		}		
		
		container.imagesLoaded(function () { 
			setColumns();
		});
		
		function setProjects() { 
			setColumns();
			container.isotope('reLayout');
		}		
	
		$(window).bind('resize', function () { 
			setProjects();			
		});

		
		$(window).on( 'scroll', function(){
		   setProjects();
		});

});	
  

$(document).ready(function() {

			$(".fancybox-effects-d").fancybox({
				padding: 0,

				openEffect : 'elastic',
				openSpeed  : 150,

				closeEffect : 'elastic',
				closeSpeed  : 150,

				closeClick : true
			});	
});
 
 
 
 //Counter 
	
    jQuery(document).ready(function( $ ) {
        $('.counter').counterUp({
            delay: 100,
            time: 2000
        });
    });	
 
 
  })(jQuery); 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 





	