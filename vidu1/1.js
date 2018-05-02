$(document).ready(function() {
	//$('.dangky').animate({opacity: 0,marginLeft:-100})
	$('.nutso2').click(function(){
		//$('.dangky').animate({opacity: 0,marginLeft:-100});
		$('.dangky').hide();
		//$('.dangnhap').animate({opacity: 1,marginLeft:0})
		$('.dangnhap').show();
	});
	$('.nutso1').click(function(){
		$('.dangnhap').hide();
		//$('.dangnhap').animate({opacity: 0,marginLeft:-100});
		//$('.dangky').animate({opacity: 1,marginLeft:0});
		$('.dangky').show();
	});
});