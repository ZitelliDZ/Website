
/*  Accediendo a un Atributo Json
*/
var jsonString = '{"nombre" : "Juan", "edad":23 , "ciudad": "Posadas"}';

var objeto = JSON.parse(jsonString);

document.getElementById("pp").innerHTML = objeto.nombre;


var Persona = {
	"nombre":"pepe",
	"edad":23
};

console.log(Persona.edad);
console.log(Persona["nombre"]);

var data = {"personas":["Nico", "Pocho", "Augusto"]};

for (var i = 0; i < data.personas.length; i++) {

	console.log(data.personas[i]);	
}


/*  Recibiendo un Json
*/
var jsonString2 = '{"nombre" : "Juan", "edad":23 , "ciudad": "Posadas"}';


var objeto2 = JSON.parse(jsonString2);


document.getElementById("pp").innerHTML = objeto.nombre;


/*	Enviando un Json
*/
var objeto3 = {
	nombre : "Juan", 
	edad:23 , 
	ciudad: "Posadas"
};

var objeto4 = {
	"nombre" : "Juan", 
	"edad":23 , 
	"ciudad": "Posadas",
	"autos":[
		{"marca":"Fiat","modelos":["500","Panda"]},
		{"marca":"BMW","modelos":["X3","X5"]}
	]

};

var jsonString3 = JSON.stringify(objeto3);

document.getElementById("pp").innerHTML = jsonString3;
console.log(jsonString3);
console.log(objeto4.autos[1]);
var jsonString4 = JSON.stringify(objeto4.autos[1]);
console.log(jsonString4);
console.log(objeto4.autos[0].modelos[1]);


