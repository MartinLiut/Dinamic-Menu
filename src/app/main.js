import $ from 'jquery';
import csshake from 'csshake';
import fullpage from 'fullpage.js';
import animate from 'animate.css';

$(document).ready(function() {
	$('#fullpage').fullpage({
		navigation: true,
		navigationPosition: 'right',
		scrollBar:true,
		scrollingSpeed: 450,
		slidesNavigation: true,
		slidesNavPosition: 'bottom',
		anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage'],
		menu: '#myMenu'
	});

	var flag = false;
	var scroll;
	var $logo = $('header nav .logo');
	var $header = $('header');
	var $a = $('header nav ul li a');
	var $div = $('#body div');
	var $footer = $('footer');
	var scrollBar = $('.scrollbar');

	$(window).scroll(function() {
		var scroll = $(window).scrollTop();

		var wintop = $(window).scrollTop(), docheight = $('html').height(), winheight = $(window).height();
		var totalScroll = (wintop/(docheight-winheight))*100;
		if(scroll > 50) {
			totalScroll = totalScroll + 20;
			scrollBar.css("width",totalScroll+"%");
			if(!flag) {
				$logo.removeClass('logo-up').addClass('logo-down');
				$header.addClass('header-grey');
				$a.addClass('a-down');
				$div.css({opacity: 0, bottom: "150px"});
				$footer.css({opacity: 0, bottom: "150px", "font-size": ".5em"});
				flag = true;
			}
		}
		else {
			scrollBar.css("width", 0);
			if(flag) {
				$logo.removeClass('logo-down').addClass('logo-up');
				$header.removeClass('header-grey');
				$a.removeClass('a-down');
				$div.css({opacity: 1});
				$div.css({opacity: ".95", bottom: "50px"});
				$footer.css({opacity: ".95", bottom: "50px", "font-size": "1em"});
				flag = false;
			}
		}
		
	});
});