$(document).ready(function() {
	var flag = false;
	var scroll;

	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		var $logo = $('header nav .logo');
		var $header = $('header');
		var $a = $('header nav ul li a');
		var $div = $('#body div');
		var $footer = $('footer');
		var scrollBar = $('.scrollbar');

		var wintop = $(window).scrollTop(), docheight = $('html').height(), winheight = $(window).height();
		var totalScroll = (wintop/(docheight-winheight))*100;
		scrollBar.css("width",totalScroll+"%");

		if(scroll > 50) {
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