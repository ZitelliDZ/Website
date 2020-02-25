document.getElementById("boton").addEventListener("click",funcion1);
document.getElementsByTagName("button")[1].addEventListener("click",funcion1);

function funcion1() {
	var x = document.getElementsByClassName("clasico");
	var y = document.getElementsByClassName("clasico").length;

	console.log("x", x);
	console.log("y", y);


	x[0].style.background = "blue";

	for (var i = 0; i < x.length; i++) {
		x[i].style.background = "grey";				
	}
}


