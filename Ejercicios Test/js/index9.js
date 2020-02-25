//$("#pp").html("<p>saraza</p>");



$(document).ready(function() {
	
$("#mostrar").click(function(){
	$("#pp").show();
});

$("#mostrar2").click(function(){
	$("#pp").hide();
});

$("#mostrar3").click(function(){
	$("#pp").fadeIn("fast");
});
$("#mostrar4").click(function(){
	$("#pp").fadeOut("slow");
});

$("#mostrar5").click(function(){
	$("#pp").slideDown(1500);
});

$("#mostrar6").click(function(){
	$("#pp").slideUp(10000);
});

$("#mostrar7").click(function(){
	$("#pp").toggle(2000);
});
$("#mostrar8").click(function(){
	$("#pp").fadeToggle(500);
});

$("#mostrar9").click(function(){
	$("#pp").fadeTo(1500,0.5, function(){
		alert("holis");
	});
});
$("#mostrar10").click(function(){
	$("#pp").fadeTo("slow",1);
});

$("#mostrar11").click(function(){
	$("#pp")
	.fadeTo("slow",0.35)
	.fadeTo(1000,1)
	.slideUp("slow")
	.fadeIn("slow")
	;
});


});

