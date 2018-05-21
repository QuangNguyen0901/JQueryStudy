$(function () {
	$('.tdkhoi').click(function(event) {
		/* Act on the event */
		$(this).toggleClass('xanh');

		$(this).next().slideToggle(400);

		$('html,body').animate({scrollTop: $(this).offset().top});
	});

	// code cho phan phong to anh 
	$('.vaicaianh a').fancybox(); 

	$('.ndkhoi').slideUp();
});