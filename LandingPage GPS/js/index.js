$(document).ready(function () {

    $("#rowclima").hide();
    
    var x= false;
    var ciudad;
    $("#boton").click(function () {

        x=true;
        ciudad=$("#ciudad").val();
        $("#rowclima").hide();
        $.ajax({
            method: "GET",
            url: "http://api.openweathermap.org/data/2.5/weather",
            data:{
              q:$("#ciudad").val(),
              appid: "b70f86d5810e46674cc836901dc5f938",
              mode:"html",
              units: "metric"
            },
            beforeSend: function () {
                console.log("estoy por mandar request");
            },
            success: function (respuesta) {
                console.log("exito");
                $("#clima").html(respuesta);             
            },
            error: function () {
                console.log("error");
            }
        });



        $.ajax({
            method: "GET",
            url: "http://api.openweathermap.org/data/2.5/weather",
            data:{
              q:$("#ciudad").val(),
              appid: "b70f86d5810e46674cc836901dc5f938",
              mode:"json",
              units: "metric"
            },
            beforeSend: function () {
                console.log("estoy por mandar request");
            },
            success: function (respuesta) {
                $("#citi").text(respuesta.name + " " + respuesta.sys.country);
                $("#latitud").text(respuesta.coord.lat);
                $("#longitud").text(respuesta.coord.lon);
                $("#tempmax").text(respuesta.main.temp_max);
                $("#tempmin").text(respuesta.main.temp_min);


               
              
            },
            error: function () {
                console.log("error");
            }
        });

        $("#rowclima").slideDown(1500);
    });

    window.setInterval(
        function(){


          if(x){
              $.ajax({
                method: "GET",
                url: "http://api.openweathermap.org/data/2.5/weather",
                data:{
                  q:ciudad,
                  appid: "b70f86d5810e46674cc836901dc5f938",
                  mode:"html",
                  units: "metric"
                },
                beforeSend: function () {
                    console.log("estoy por mandar request");
                },
                success: function (respuesta) {
                    console.log("exito");
                    $("#clima").html(respuesta);             
                },
                error: function () {
                    console.log("error");
                }
              });
          }
         
      }
      // Intervalo de tiempo
    ,30000);
   


});