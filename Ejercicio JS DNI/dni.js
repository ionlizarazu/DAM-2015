function calcula(){
    var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
    var dni = document.getElementById("dni").value;
    if(dni < 0 || 99999999 < dni){
            document.getElementById("letra").textContent = "número incorrecto";
    }else{
        var resto = dni % 23;
        var letra = letras[resto];
        document.getElementById("letra").textContent = letra;
    }


}