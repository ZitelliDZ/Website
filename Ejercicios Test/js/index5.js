var frase = [
	{
		frase: "Baila que ritmo te sobra",
		autor: "Pablo Coelho"
	},
	{
		frase: "Aserejé, ja, deje, tejebe tudejebere sebiunouba",
		autor: "Ghandi"
	},
	{
		frase: "Una cinta en tus cabellooooos, una flor en tu ventana",
		autor: "Albert Einstein"
	},
	{
		frase: "Sabalé, Sabalé, la culpa es de este pueblo Sabalero",
		autor: "Freddy Mercury"
	}
]


function mostrarFrase() {
	var i = Math.floor(Math.random()*frase.length);
	console.log("i", i);

	document.getElementById("textofrase").textContent = frase[i].frase;
	
	document.getElementById("textoautor").innerHTML = frase[i].autor;
}

document.getElementById("btngenerar").addEventListener("click",mostrarFrase);