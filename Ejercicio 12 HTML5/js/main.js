window.onload= function(){
    var $products = $('.product');
    var len = $('.product').length;
    for(var i=0;i<len;i++){
        $products[i].setAttribute("draggable", "true");
    }
    
    function handleDragStart(e) {
        console.log("start dragging...");
    }
    
    function handleDragOver(e) {
        if (e.preventDefault) {
            e.preventDefault(); // Necessary. Allows us to drop.
                    console.log("over dragging...");

        }

        e.dataTransfer.dropEffect = 'move';
        return false;
    }
    
    function handleDragEnter(e) {
        // this / e.target is the current hover target.
        this.classList.add('over');
                console.log("enter dragging...");

    }
    
    function handleDragLeave(e) {
        this.classList.remove('over');  // this / e.target is previous target element.
                console.log("leave dragging...");

    }
    
    function handleDrop(e) {
    // this / e.target is current target element.
    if (e.stopPropagation) {
        e.stopPropagation(); // stops the browser from redirecting.
        var dropped = document.querySelectorAll('#drop');
        dropped.appendChild(this);
    }
    // See the section on the DataTransfer object.
    return false;
    }
 
    function handleDragEnd(e) {
        // this/e.target is the source node.
        [].forEach.call(dropped, function (col) {
            col.classList.remove('over');
        });
    }
 
    var dropped = document.querySelectorAll('#drop');
    [].forEach.call(dropped, function(col) {
        col.addEventListener('dragenter', handleDragEnter, false);
        col.addEventListener('dragover', handleDragOver, false);
        col.addEventListener('dragleave', handleDragLeave, false);
        col.addEventListener('drop', handleDrop, false);
    });
    
    var cols = document.querySelectorAll('.product');
    [].forEach.call(cols, function(col) {
        col.addEventListener('dragstart', handleDragStart, false);
        col.addEventListener('dragend', handleDragEnd, false);


    });
};