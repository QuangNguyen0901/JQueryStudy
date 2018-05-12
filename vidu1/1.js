$(function() {
	$('.nutso1').click(function(event) {
		/* Act on the event */
		$('.dangnhap').animate({opacity: 0});
		$('.dangky').animate({opacity: 1});
	});

	$('.nutso2').click(function(event) {
		/* Act on the event */
		$('.dangky').animate({opacity: 0});
		$('.dangnhap').animate({opacity: 1});
	});
});
