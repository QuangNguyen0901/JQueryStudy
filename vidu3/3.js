$(function() {
	$('.menutren ul li:nth-child(1) a').on('click',function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html,body').animate({scrollTop: $('.chapter1').offset().top},1000,"easeOutElastic"); // $('body') -> $('html,body')
	});

	$('.menutren ul li:nth-child(2) a').on('click',function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html,body').animate({scrollTop: $('.chapter2').offset().top},1000,"easeInOutExpo"); // $('body') -> $('html,body')
	});

	$('.menutren ul li:nth-child(3) a').on('click',function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html,body').animate({scrollTop: $('.chapter3').offset().top},1000,"easeInOutBack"); // $('body') -> $('html,body')
	});

	$('.menutren ul li:nth-child(4) a').on('click',function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html,body').animate({scrollTop: $('.chapter4').offset().top},1000); // $('body') -> $('html,body')
	});

	$('.nutlentren').on('click',function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html,body').animate({scrollTop: 0},2000,"easeInOutExpo"); // $('body') -> $('html,body')
	});

});
