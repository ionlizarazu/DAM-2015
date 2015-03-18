$(document).ready(function() {
    // Calcular posición

    function showMap(position) {
        var mapcanvas = document.createElement('div');
        mapcanvas.id = 'mapcanvas';
        mapcanvas.style.height = '400px';
        mapcanvas.style.width = '560px';

        document.querySelector('article').appendChild(mapcanvas);

        var latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var myOptions = {
            zoom: 15,
            center: latlng,
            mapTypeControl: false,
            navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL},
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("mapcanvas"), myOptions);
       
        var image = {
            url: 'logo.png',
            scaledSize: new google.maps.Size(50, 50)
        };
        var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            title: "¡Hay un piso disponible aqui!",
            icon: image
        });
    }
    if (navigator.geolocation) {
    
        navigator.geolocation.getCurrentPosition(function (position) {
            showMap(position);
        });
    }
});