var lorem = [
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ac purus blandit, hendrerit lorem vel, viverra arcu. Cras in neque ullamcorper, gravida justo eget",
		"suscipit justo. Cras vestibulum nisi vitae aliquet euismod. Curabitur nulla nisi, egestas id cursus vel",
		" hendrerit in nisi. Ut et magna vehicula, vestibulum neque sed, dignissim ligula. Duis mollis lacinia dui",
		" sed pulvinar ipsum iaculis a. Morbi iaculis dui congue pulvinar pulvinar. Mauris bibendum ex aliquam lectus posuere accumsan. Aenean maximus ultricies nunc",
		" Pellentesque sagittis ligula et consectetur mollis. Mauris ac erat ut quam congue bibendum vel sit amet nulla. Integer eu felis tortor. Sed ligula ex, viverra id faucibus a, viverra a elit. Donec sodales at urna eget sollicitudin",
		"Fusce aliquet mauris eu commodo viverra. Donec id nisl volutpat, viverra justo sed, congue felis. Vestibulum facilisis quam a lacus hendrerit, convallis molestie odio vulputate. Integer sit amet fermentum urna. Proin molestie dui malesuada diam luctus gravida. Cras viverra accumsan ex",
		" eget egestas tortor maximus malesuada. Praesent eget tristique urna. Donec rutrum est in risus porttitor tristique. Nunc eget felis a risus pharetra hendrerit sodales a massa. Donec nulla augue",
		" ullamcorper et metus sed, aliquam dictum sapien. Morbi ipsum ex, feugiat sed tincidunt vel, condimentum vel ex. Nulla ac sagittis nulla.ae vestibulum ipsum, eget rutrum felis. Fusce eu justo venenatis, interdum felis in, condimentum massa."
]


document.getElementById("btngenerar").addEventListener("click", generarLorem);

function generarLorem() {
	var radios = document.getElementsByName('inputtipo');

	for (var i = 0; i < radios.length; i++) {
		if (radios[i].checked) {
			var tipo = radios[i].value;
			break;
		}	
	}
	console.log(radios);
	var cantidad = document.getElementById("inputcantidad").value;

	var tipo = document.querySelector('input[name=inputtipo]:checked').value;

	var cantidad = document.getElementById("inputcantidad").value;

	switch(tipo){
		case"1":
			resultado = loremPalabras(cantidad);
			break;
		case"2":
			resultado = loremParrafos(cantidad);
			break;
		case"3":
			resultado = loremLista(cantidad);
			break;
		default:
			resultado = "La pecheaste papu";
			break;
	}
	document.getElementById("textoresultado").innerHTML = resultado;


	function loremRandom() {
	var i = Math.floor(Math.random()*lorem.length);
	return lorem[i];
}

function loremPalabras(cantidad) {
	var resultado = "";
	var termino = false;

	while (termino == false){
		resultado += loremRandom();
		var arrayDePalabras = resultado.split('');

		if (arrayDePalabras.length > cantidad) {
			arrayDePalabras.length = cantidad;
			resultado = arrayDePalabras.join('');
			termino = true;
		}
	}
	return resultado;
}

function loremParrafos() {
	var resultado = "";

	for (var i = 0; i < cantidad; i++) {
		for (var j = 0; j < 4; i++) {
			resultado += loremRandom();
			resultado += " ";
			
		}
		resultado += "<br><br>" 
	}
	return resultado;
}

function loremLista() {
	var resultado = "<ul>";

	for (var i = 0; i < cantidad; i++) {
		resultado += "<li>" + loremRandom() + "</li>";
	}
	resultado += "</ul>"
	return resultado;
}
}

