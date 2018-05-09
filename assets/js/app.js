$(document).ready(function() {
	var flag = false;
	var scroll;

	$(window).scroll(function() {
		scroll = $(window).scrollTop();
		var $logo = $('header nav .logo');
		var $header = $('header');
		var $a = $('header nav ul li a');

		if(scroll > 200) {
			if(!flag) {
				$logo.removeClass('logo-up').addClass('logo-down');
				$header.addClass('header-grey');
				$a.addClass('a-down');
				flag = true;
			}
		}
		else {
			if(flag) {
				$logo.removeClass('logo-down').addClass('logo-up');
				$header.removeClass('header-grey');
				$a.removeClass('a-down');
				flag = false;
			}
		}
		
	});
});