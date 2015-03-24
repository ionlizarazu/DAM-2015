
var points=0;
var timer=10000;
$(document).on("pageshow",function(){
    if(location.hash=="#&ui-state=dialog"){
        startTime = new Date().getTime();
        currentTime = new Date().getTime();
        
        
        $("div.swipe").on("swipeleft",swipeLeftHandler);
        $("div.swipe").on("swiperight",swipeRightHandler);
        function swipeRightHandler( event ){
            event.target.textContent="Right swipe done!";
            $( event.target ).css("margin-left","10em");
            $( event.target ).css("text-align", "right");
            points++;
            $("#points").html( "Swipped: "+points+" times" );

        }
        
        
        function swipeLeftHandler( event ){
            event.target.textContent="Left swipe done!";
            $( event.target ).css("margin-left","0");
            $( event.target ).css("text-align", "left");
            points++;
            $("#points").html( "Swipped: "+points+" times" );
        }
        setTimeout(function() {
            console.log("ya");
            $("div.swipe").unbind();
            
            $("#sps").html("Swips per second: "+points/(timer/1000));
        }, timer);
            
    }
    
    
});