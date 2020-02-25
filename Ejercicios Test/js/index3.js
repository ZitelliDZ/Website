function primero(valor, callback) {
	console.log(valor);
	callback();
}

function segundo() {
	console.log("callback");
}

primero("start", segundo);




var a = "hola";
function fun1() {
	console.log(a);
	b="pepe";
}

fun1();
console.log(b);