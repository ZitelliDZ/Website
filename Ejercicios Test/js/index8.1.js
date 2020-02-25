document.getElementById("btnbuscar").addEventListener("click",function(){ buscarDatos(1);});
document.getElementById("btnbuscar2").addEventListener("click",function(){ buscarDatos(2);});

function buscarDatos(num) {
	var xhttp = new XMLHttpRequest();

	xhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			
			if (num == 1) {
				document.getElementById("demo").innerHTML = this.responseText;
			}else{
				var objeto = JSON.parse(this.responseText);
				document.getElementById("demo2").innerHTML = objeto[0].name;
			}

			

			
		}
	};
	

	xhttp.open("GET", "https://jsonplaceholder.typicode.com/users",true);
	xhttp.send();

}
