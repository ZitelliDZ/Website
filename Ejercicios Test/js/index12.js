$(function () {
	$("#buscar").click(function () {
		$.ajax({
			method: "GET",
			url: "http://api.openweathermap.org/data/2.5/weather",
			data:{
				q:"Posadas",
				appid: "b70f86d5810e46674cc836901dc5f938",
				mode:"json",
				units: "metric"
			},
			beforeSend: function () {
				console.log("estoy por mandar request");
			},
			success: function (respuesta) {
				var texto = respuesta.text();
				var objeto= JSON.parse(texto);
				console.log(respuesta);
			},
			error: function () {
				console.log("error");
			}
		});
	});
});