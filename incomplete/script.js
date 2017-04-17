$(document).ready(function(){
	
	
	$(".title").click(function(){
		var change = $(this).attr("id");
		if(change == "white"){
			$(this).removeAttr('id');
			$(this).attr("id","black");
			$('#background').not().toggleClass('background-black');
			$('form').not().toggleClass('background-black');
		}else{
			$(this).removeAttr('id');
			$(this).attr("id","white");
			$('#background').not().toggleClass('background-black');
			$('form').not().toggleClass('background-black');
		}
	});
	
	$("#background").on('click', function() {
		$('#background').toggleClass('background-black');	$('form').toggleClass('background-black');
	});
	
	
	$("form").click(function(){
		$('#background').not().toggleClass('background-black');
		$('form').not().toggleClass('background-black');
	})
	
	$('#btn_createList').click(function(e){
		var submit = $('<li>', {
         text: $('#manifesto').val()});
	e.preventDefault();
    $('ul').append(submit);
		submit.click(list);
	
});
	function list() {
		$(this).toggleClass("selected");
		$('#background').not().toggleClass('background-black');
		$('form').not().toggleClass('background-black');
	};
	
	$("li").click(list);
});