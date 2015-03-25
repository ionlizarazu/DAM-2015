$(function () {
    "use strict";

    // Obtener los elementos del DOM

    // Mi color asignado por el servidor
    var myColor = false;
    // Mi nick
    var myName = false;

    // Comprobar la disponibilidad de Web Socket en el navegador
    if (!Modernizr.websockets) {
        return false;
    }

    window.WebSocket = window.WebSocket || window.MozWebSocket;

    // Abrir la conexion con ws://10.70.1.111:1337
    var connecting = new WebSocket("ws://10.70.1.111:1337");
    
    // 1. Al abrir la conexión, solicitar el nick.
    document.getElementById("input").disabled=false;
    $("#status").html("Nombre:");
    // 2. Controlar posibles errores del servidor.
    // 3. Escucar los mensajes del servidor, y mostrarlos en el elemento "content"
    connecting.onmessage = function (event) {
        //console.log(event.data);
        var objetoJson = JSON.parse(event.data);
        //console.log(objetoJson.data.length);
        for(var i=0;i<objetoJson.data.length;i++){
            //$("#content").html(objetoJson);
            var author = objetoJson.data[i].author;
            var message = objetoJson.data[i].text;
            var color = objetoJson.data[i].color;
            var time = new Date(objetoJson.data[i].time);
            addMessage(author,message,color,time);
        }
    }
    // 4. La estructura del objeto enviado por el servidor es la siguiente:
    //      {
    //          // Contiene el tipo de mensaje recibido
    //          type : @string in ['color', 'history', 'message'],
    //          // Contiene los datos según el tipo de mensaje recibido
    //          data: @Object {author, text, color, time}
    //      }
    // 5. Enviar un mensaje al pulsar enter. El mensaje enviado es únicamente la cadena de caracteres.
    $("#input").bind("keypress",function( event ) {
        if ( event.which == 13 ) {
            
            var name = document.getElementById("input").value;
            var label=document.getElementById("status").textContent;
            if(label=="Nombre:"){
            //console.log(label);
            document.getElementById("status").textContent = name;
            document.getElementById("input").value="";
            }else{
                var mess= $("#input").val();
                //connecting.send(mess);
                console.log(mess);
            
            }
        }
    });
    
    
    /**
     * Añadir el mensaje a la ventana de chat
     */
    function addMessage(author, message, color, dt) {
        $("#content").prepend('<p><span style="color:' + color + '">' + author + '</span> @ ' +
             + (dt.getHours() < 10 ? '0' + dt.getHours() : dt.getHours()) + ':'
             + (dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes())
             + ': ' + message + '</p>');
    }
    

    

});