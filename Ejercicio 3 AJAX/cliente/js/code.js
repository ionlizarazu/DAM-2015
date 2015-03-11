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
    
    peticion_http.open('POST',"../servidor/compruebaDisponibilidad.php" , true);
    
    peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
    var query_string = crea_query_string();
    peticion_http.send(query_string);
    
    
    
    function disponibilidad() {
          
        var disponible = document.getElementById("disponibilidad");
        var username = document.getElementById("login").value;
        if(peticion_http.readyState == 4) {
            if(peticion_http.status == 200) {
                if("si" == peticion_http.responseText){
                    disponible.textContent="El nombre de usuario ["+username+"] SI diponible";
                }else{
                    disponible.textContent="El nombre de usuario ["+username+"] NO diponible";

                }
            }else{
                disponible.textContent = "peticion_http.responseText";

            }
        }
    }
    
}
function crea_query_string() {
        var username = document.getElementById("login");
 
        return "login=" + encodeURIComponent(username.value) +
         "&nocache=" + Math.random();
}

window.onload = listeners;