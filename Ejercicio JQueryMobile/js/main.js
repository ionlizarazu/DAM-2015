$(document).ready(function(){
    var count=0;
    
    
    $( "div.tap" ).bind( "vmousedown vmouseup", tapHandler );
    $( window ).on( "throttledresize", throttledresizeHandler );
 
    
    
 
    function tapHandler( event ){
        event.preventDefault();
        if (event.type == 'vmousedown') {
            tapTime = new Date().getTime();
        } else {
            //event.type == 'vmouseup'
            var margin = (new Date().getTime() - tapTime)/100;
            var duration = (new Date().getTime() - tapTime)/1000;
            $( event.target ).css("margin-left",margin+"%");
            event.target.textContent="Tapped by "+duration+" seconds";
        }
    }
    
 
    function throttledresizeHandler( event ) {
        $( "#output-text" ).html( "Throttledresize Count: " + ++count );
    }
 
    // You can also manually force this event to fire.
    $( window ).trigger( "throttledresize" );
});
