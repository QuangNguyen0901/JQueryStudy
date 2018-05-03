$(function(){
	$('.ndmotkhoi').slideUp();
	$('.motkhoi h3').addClass('upped');
	$('.motkhoi h3').click(function(event) {
		/* Act on the event */
		//$('.ndmotkhoi').slideToggle();
		$(this).next().slideToggle();
		$(this).toggleClass('upped');

	});


});