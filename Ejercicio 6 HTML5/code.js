function carga(){
    
    var video = document.getElementById("video");
    
}
function colorChange(){
    var col = document.getElementById("kolore");
    var koloreVal=col.value;
    console.log(koloreVal);
    document.body.setAttribute('style','background:'+koloreVal);
    
}
function play(){
    video.play();
}

function pause(){
    video.pause();
}

function stop(){
    video.pause();

    video.currentTime=0;
}
   
function avanzar(){
    
    video.currentTime=video.currentTime+10;
    var progreso = document.getElementById("progress");
    var tiempo = (video.currentTime/video.duration)*100;
    progreso.value = tiempo;
}
    
function retroceder(){
    
    video.currentTime=video.currentTime-10;
    var progreso = document.getElementById("progress");
    var tiempo = (video.currentTime/video.duration)*100;
    progreso.value = tiempo;
}
    
function inicio(){
    
    video.currentTime=0;
    var progreso = document.getElementById("progress");
    var tiempo = (video.currentTime/video.duration)*100;
    progreso.value = tiempo;
}
    
function fin(){
    
    video.currentTime=video.duration;
    var progreso = document.getElementById("progress");
    var tiempo = (video.currentTime/video.duration)*100;
    progreso.value = tiempo;
}
    
function pantallaCompleta(){
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.msRequestFullscreen) {
        video.msRequestFullscreen();
    } else if (video.mozRequestFullScreen) {
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
        video.webkitRequestFullscreen();
    }
}
  
function volumen(){
    var range = document.getElementById("range");
    
    video.volume = range.value/100;
}
    
function progreso(){
    
    var progreso = document.getElementById("progress");
    var tiempo = (video.currentTime/video.duration)*100;
    progreso.value = tiempo;
}
function changeVideo(ruta){
    var sources = video.getElementsByTagName('source');
    sources[0].src = "video/"+ruta;
    video.load();
}
 


window.onload = carga;
