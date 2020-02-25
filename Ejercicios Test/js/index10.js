$(function(){
	$("#boton1").click(function() {
		$("ul li:first").fadeOut();
	});
	$("#boton2").click(function() {
		$("ul li:first-child").fadeOut();
	});

	$(".borrar").click(function(){
		$(this).parent().parent().fadeOut("slow",function(){
			$(this).remove();
		});
	});

	$(".modificar").click(function(){
		$(this).parent().siblings().eq(1).text("sazrazaaa");
		});
	
});


