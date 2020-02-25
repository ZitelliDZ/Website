document.getElementById("btnbuscar").addEventListener("click",buscarDatos);
document.getElementById("btnbuscar2").addEventListener("click",buscarDatos2);

function buscarDatos() {
	var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			document.getElementById("demo").innerHTML = this.responseText;		
		}
	};
	xhttp.open("GET", "https://jsonplaceholder.typicode.com/users",true);
	xhttp.send();

}


function buscarDatos2() {
	var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			
			var objeto = JSON.parse(this.responseText);
			document.getElementById("demo2").innerHTML = objeto[0].name;
		}
	};

	xhttp.open("GET", "https://jsonplaceholder.typicode.com/users",true);
	xhttp.send();
}