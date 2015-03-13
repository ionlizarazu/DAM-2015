"use strict";
//objeto global.

var MYAPP = MYAPP||{};
//Usar "use strict".
//esperar a que el DOM este cargado.
$(document).ready(function(){
    
    /*MYAPP.fila = 3;
    MYAPP.columna = 3;*/
    
    
    $('#carga').click(function(){
        MYAPP.fila = parseInt($('#filas').val());
        MYAPP.columna = parseInt($('#columnas').val());
        var total = MYAPP.fila*MYAPP.columna;
        MYAPP.net.peticion(total,addImgs);
        

        
    });

// Iniciaremos las variables privadas que sean necesarias.

});
// Necesitaremos una funcion que cree objetos DOM de clase img y todos los atributos necesarios.
    function createImg(animal, ancho,timer,color,nombre){

        var $img =$('<img/>',{src:"img/"+animal+".png",width:ancho+"%",'data-time':timer,'data-color':color,'data-nombre':nombre});
        $('#contenedor').removeClass('hidden');
        $('#botones').addClass('hidden');
        //$('#eliminados').removeClass('hidden');
        
        return $img;
    }
// Necesitaremos una funcion que agrege el array de img al DOM (no se realizaran cambios de DOM dentro de ningun bucle).
    function addImgs(json){
        var ancho = 100/MYAPP.columna;
        var animales = [];
        var total = MYAPP.fila*MYAPP.columna;
        for(var i =0;i<total;i++){
            var animal = json[i].animal;

            var nombre = json[i].nombre;
            var color = json[i].color;
            var timer = json[i].timer;
            animales[i] = createImg(animal,ancho,timer,color,nombre);
        }
        
        $('#contenedor').append(animales);
        MYAPP.globalTimer=1;
        setInterval(timeControl,1000);

    }
// Necesitaremos una o varias funcion(es) que controle(n) el paso del tiempo.
    var timeControl=function(){
        console.log("AA");
        var $(imgs) = $('img');
        var len=$imgs.length;
        if( len>0){
            for(var i=0;i<len;i++){
                var dataTimer = $imgs.data('timer');
                $('body').css('background-color','pink');
                
            }
    
        }
        
    };
// Necesitaremos añadir los eventos necesarios en el momento adecuado.
    function addEvent(){
        
    }
// Necesitaremos las funciones de callback para los eventos.

// Necesitaremos una funcion encargada de llamar al modulo que se define en el fichero net.js con los parametros adecuados para realizar la llamada y capturar la respuesta AJAX.

// Necesitaremos una funcion que controle el final del juego.

// Necesitaremos una funcion que controle la lista de eliminados.

// Cualquier otra funcion que sea necesaria.



