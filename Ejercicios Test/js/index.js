
document.getElementById('divpropina').style.display = "none";


function calcularpropina() {
	var costototal= document.getElementById("inputcostoTotal").value;
	    console.log("costototal", costototal);
	var calidad = document.getElementById("selectatencion").value;
		console.log("calidad", calidad);
	var cantidad= document.getElementById("inputpersonas").value;
		console.log("cantidad", cantidad);

	if(costototal == "" || calidad == 0 || cantidad == "" || cantidad<1){
		alert("ingresa valores validos");
		return;
	}

	var totalcabeza= (costototal * calidad)/ cantidad;

	totalcabeza= Math.round(totalcabeza * 100)/100;
	totalcabeza= totalcabeza.toFixed(2);

	document.getElementById("spanresultado").innerHTML = totalcabeza;
	document.getElementById("divpropina").style.display = "block";



}

document.getElementById("btncalcular").addEventListener("click",calcularpropina);

