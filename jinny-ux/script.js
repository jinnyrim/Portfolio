//$("document").ready(function($){
//	$(window).onscroll(function() {
//			
//	});
//});

window.onscroll = function (e) { 
	var y = $(this).scrollTop();
	  if (y > 1200 && 7300 > y ) {
	   $('.toptime').addClass('appear');
	  } else {
		$('.toptime').removeClass('appear');
		}
}