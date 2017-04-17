$(document).ready(function(){
	
	
	$(".title").click(function(){
		var change = $(this).attr("id");
		if(change == "white"){
			$(this).removeAttr('id');
			$(this).attr("id","black");
			$('form').not().toggleClass('background-black','background-white');
			$('#background').not().toggleClass('background-black','background-white');
		}else{
			$(this).removeAttr('id');
			$(this).attr("id","white");
			$('form').not().toggleClass('background-black','background-white');
			$('#background').not().toggleClass('background-black','background-white');
		}
	});
	
	$("#background").on('click', function() {
		$('#background').toggleClass('background-black',"background-white");	$('form').toggleClass('background-black','background-white');
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
		
		$('form').not().toggleClass('background-black','background-white');
		$('#background').not().toggleClass('background-black','background-white');
	};
	
	$("li").click(list);
});