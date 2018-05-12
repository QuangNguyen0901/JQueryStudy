$( document ).ready(function() {
	
	$('.menutren ul li a').on('click', function(event) {
		/* Act on the event */
		// console.log('chay chua ha cac ban ');
		$('body').animate({scrollTop:1500},500);
	});
});
