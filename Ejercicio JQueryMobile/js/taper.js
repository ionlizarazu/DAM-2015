
$(document).on("pageshow",function(){
    if(location.hash=="#&ui-state=dialog"){
        
        var s=setSeconds();            
        $( "label.tap" ).bind( "vmousedown vmouseup", tapHandler );
    }
 
    function tapHandler( event){
        event.preventDefault();
        
        if (event.type == 'vmousedown') {
            tapTime = new Date().getTime();
        } else {
            //event.type == 'vmouseup'
            var duration = (new Date().getTime() - tapTime)/1000;
            var liMin = parseFloat(s)-0.2;
            var liMax = parseFloat(s)+0.2;
            if(liMin<duration&&duration<liMax){
                $("label.result").html("WINNER!");
                $("label.result").css("background-color","#8cc63f");
            }else{
                $("label.result").html("LOSER...");
                $("label.result").css("background-color","#fa4248");

            }
            s=setSeconds();
        }
    }

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    function setSeconds(){
        var seconds = getRandomInt(1, 6);
        $("label.tap").html(seconds);
        return seconds;
    }
});


