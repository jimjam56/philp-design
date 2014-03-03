
//determines at which point the navigation will stick.
navHeight();
$(window).resize(navHeight);
 	

function navHeight() {
	var windowHeight = $(window).height();
	$('#nav').css('top', + windowHeight + 'px');
	var mainHeight = windowHeight + 100;
	console.log(windowHeight);
	console.log(mainHeight);
	$('#main').css('margin-top', + mainHeight +'px');
}


//check to see if nav can stick to top after header img is scrolled past
$(window).scroll(function(e) {
	stickyNav();
});

function stickyNav() {
	var windowHeight = $(window).height();
	var scrollTopDistance = $(window).scrollTop();
	if (scrollTopDistance > windowHeight) {
		$('#nav').css({'position':'fixed','top':'0px'});
	}
	else {
		$('#nav').css({'position':'absolute','top':windowHeight+'px'});
	}
}