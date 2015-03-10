function obtenerUrl(){
    var urlText = document.URL;
    document.getElementById("recurso").value=urlText;
    
    document.getElementById("enviar").onclick = mostrarContenido;
}




function mostrarContenido(){
    var urlText = document.getElementById("recurso").value;
    var contenidos = document.getElementById("contenidos");
    var headersSet = document.getElementById("cabeceras");
    var codeState = document.getElementById("codigo");
    
    if(window.XMLHttpRequest) {
        var peticion_http = new XMLHttpRequest();
    }
    else if(window.ActiveXObject) {
        var peticion_http = new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    peticion_http.onreadystatechange = muestraContenido;
    
    peticion_http.open('GET', 'http://localhost/DAM15/Ejercicio%201%20AJAX/', true);
    peticion_http.send(null);
    
    var now = new Date();
    
    
    function muestraContenido() {
                    
        var estado = document.getElementById("estados");
        var estadosText = ["No inicializado", "Cargando", "Cargado", "Interactivo", "Completado"];
        var estadoAct = document.createTextNode("[tiempo] "+estadosText[peticion_http.readyState]+"\n");
        estado.appendChild(estadoAct);
        
        if(peticion_http.readyState == 4) {
            if(peticion_http.status == 200) {
                contenidos.textContent = peticion_http.responseText;
                headersSet.textContent = peticion_http.getAllResponseHeaders();
                codeState.textContent = peticion_http.status+"\nOK";
            }else{
                codeState.textContent = peticion_http.status+"\nNOT OK";
            }
        }
    }
    
}



window.onload = obtenerUrl;