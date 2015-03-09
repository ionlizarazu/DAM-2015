var aElements = document.getElementsByTagName("a");

console.log("Número de enlaces: "+aElements.length);

console.log("Dirección del penúltimo enlace: "+aElements[aElements.length-2].getAttribute("href"));

function linkCount(aElements){
    var count = 0;
    for(var i =0;i<aElements.length;i++){
    var ref = aElements[i].getAttribute("href");
        if(/^http:\/\/prueba\/$/.test(ref)){
            count++;
        }
    }
    return count;
}

var pruebaRef = linkCount(aElements);
console.log('Número de enlaces con href "http://prueba/": '+pruebaRef);

console.log("Número de enlaces en el tercer párrafo: "+document.getElementsByTagName("p")[2].getElementsByTagName("a").length);
