var nomE = document.getElementById("registro_nombre");
function validarNombre(){
    if(/^\s*$/.test(nomE.value)||!/[a-zA-Z]+/.test(nomE.value)){
       console.log("Campo de Nombre obligatorio");
    }
}
var apeE = document.getElementById("registro_apellido");
function validarApellidos(){
    if(/^\s*$/.test(apeE.value)||!/[a-zA-Z]+/.test(apeE.value)){
       console.log("Campo de Apellidos obligatorio");
    }
}

APP.validarEmail = function validarEmail(){
    var emailRegExp = /[a-zA-Z_\.]+@[a-zA-Z]+\.[a-zA-Z]{2,3}/;
    var emailValue = document.getElementById("registro_email").value;
    if(!emailRegExp.test(emailValue)){
        console.log("Email incorrecto");
    }
}
APP.validarPass = function validarPass(){
    var passValue = document.getElementById("registro_password").value;
    if(/^\s*$/.test(passValue)){
        console.log("Password incorrecto");
    }
}