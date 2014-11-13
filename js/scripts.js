
$(document).ready(function(){


//determines at which point the navigation will stick.
navHeight();
$(window).resize(navHeight);
 	
$('body').fadeIn();
function navHeight() {
	var windowHeight = $(window).height();
	$('#home-nav').css('top', + windowHeight + 'px');
	var mainHeight = windowHeight + 72;
	$('#home-main').css('margin-top', + mainHeight +'px');
}

$('.down-arrow').click(function(e){
	e.preventDefault();
	var scrollDistance = $(window).height() + 1;
	$("html, body").animate({
			scrollTop: scrollDistance + 'px'
		}, 800);
});
//check to see if nav can stick to top after header img is scrolled past
$(window).scroll(function(e) {
	stickyNav();
});

function stickyNav() {
	var windowHeight = $(window).height();
	var scrollTopDistance = $(window).scrollTop();
	if (scrollTopDistance > windowHeight) {
		$('#home-nav').css({'position':'fixed','top':'0px'});
	}
	else {
		$('#home-nav').css({'position':'absolute','top':windowHeight+'px'});
	}
}
});