"use strict";

var APP = APP|| {};

window.addEventListener("load", setListeners, false);

function setListeners(){
    
    document.getElementById("registro_email").addEventListener("blur",APP.validarEmail, false);
    
    document.getElementById("registro_password").addEventListener("blur",APP.validarPass, false);
    
}
