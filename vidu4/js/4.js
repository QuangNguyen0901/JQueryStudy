$(function() {
	$('.tinloadthem').slideUp(0);
	// TweenMax.from($('.tinto'),1,{top:100,opacity:0})
	TweenMax.staggerFrom($('.tinbandau .tinto'),1,{top:100,opacity:0},0.4);

	$('.btnloadthem').click(function(event) {
		/* Act on the event */
		$('.tinloadthem').slideDown(0);
		TweenMax.staggerFrom($('.tinloadthem .tinto'),0.5,{top:100,opacity:0},0.1);
	});

});