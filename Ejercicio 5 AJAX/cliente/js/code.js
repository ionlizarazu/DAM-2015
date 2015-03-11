function listeners() {
    
    document.getElementById("comprobar").onclick = comprobarDisponibilidad;
    
}


function comprobarDisponibilidad(){
    var urlText = document.URL;  
    var peticion_http;
    if(window.XMLHttpRequest) {
        peticion_http = new XMLHttpRequest();
    }
    else if(window.ActiveXObject) {
        peticion_http = new ActiveXObject("Microsoft.XMLHTTP");
    }
    peticion_http.onreadystatechange = disponibilidad;
    
    peticion_http.open('POST',"../servidor/compruebaDisponibilidadJSON.php" , true);
    
    peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
    var query_string = crea_query_string();
    peticion_http.send(query_string);
    
    
    
    function disponibilidad() {
          
        var disponible = document.getElementById("disponibilidad");
        if(peticion_http.readyState == 4) {
            if(peticion_http.status == 200) {
                parseaJSON(peticion_http);
                
            }else{
                disponible.textContent = "ERROR";

            }
        }
    }
    
}
function parseaJSON(peticion_http){
    var disponible = document.getElementById("disponibilidad");
    var username = document.getElementById("login").value;
    var alter = document.getElementById("alternativas");
    var respuesta_json = peticion_http.responseText;
    var objeto_json = JSON.parse(respuesta_json);
    if(objeto_json.alternativas){
        var alternativas = objeto_json.alternativas;
  
        disponible.textContent="El nombre de usuario ["+username+"] NO está diponible, pero puedes probar con estas ALTERNATIVAS: "+alternativas;
      
    }else{
        disponible.textContent="El nombre de usuario ["+username+"] está diponible";
    }
}
function crea_query_string() {
        var username = document.getElementById("login");
 
        return "login=" + encodeURIComponent(username.value) + "&nocache=" + Math.random();
}

window.onload = listeners;