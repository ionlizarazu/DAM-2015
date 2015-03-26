
var points=0;
var times=5;
var squares=3;

$(document).on("pagehide",function(){
$("#sps").html("hidden");

});
$(document).on("pageshow",function(){
    if(location.hash=="#&ui-state=dialog"){
        
        $("#startSwipe").on("click",startSwipe);
                    
    }

    function startSwipe(){
        var lastActive=0;
        $("label.swipe").css("background-color","#fa4248");
        $("label.swipe").off();
        $("#startSwipe").css("display","none");
        var nowActive=getRandomInt(1, squares+1);
        changeSwipper(nowActive,lastActive);
        lastActive=nowActive;
        timeout(times,times,lastActive);
    }

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }

    function timeout(times,timestotal,lastActive){
        var timer=4000;
        if(times>0){
            setTimeout(function() {
                    var nowActive=getRandomInt(1, squares+1);
                    changeSwipper(nowActive,lastActive);
                    times=times-1;
                    lastActive=nowActive;
                    timeout(times,timestotal,lastActive);
            }, timer);
        }else{
            $("label.swipe").css("background-color","#fa4248");
            $("label.swipe").off();   
            $("#sps").html("Total swipes per second: "+((points*1000)/(timer*timestotal)));
        }
    
    }
    function changeSwipper(now,last){
        if(last!=0){
            $("label#swipe"+last).css("background-color","#fa4248");
            $("label#swipe"+last).off();
        }
        $("label#swipe"+now).on("swipeleft",swipeLeftHandler);
        $("label#swipe"+now).on("swiperight",swipeRightHandler);
        $("label#swipe"+now).css("background-color","#8cc63f");
        
        //$("#points").html( "Last not zero: "+(last!=0)+" ||last: "+last+" ||now: "+now+" ||last not now: "+(last!=now) );
            
    }
    
    function swipeRightHandler( event ){
            //event.target.textContent="<--";
            if($(event.target).css("margin-left")=="0px"){
                $( event.target ).css("margin-left","70%");
            }
            points++;
    }
    
    function swipeLeftHandler( event ){
            //event.target.textContent="-->";
            if($(event.target).css("margin-left")!="0px"){
                $(event.target).css("margin-left","0px");
            }
            points++;
    }
});

