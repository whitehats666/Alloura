var google;
var map;

function init() {
    // Check if geolocation is supported
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var myLatlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

            var mapOptions = {
                zoom: 10,
                center: myLatlng,
                scrollwheel: false,
                styles: [
                    {
                        "featureType": "administrative.country",
                        "elementType": "geometry",
                        "stylers": [
                            {
                                "visibility": "simplified"
                            },
                            {
                                "hue": "#ff0000"
                            }
                        ]
                    }
                ]
            };

            var mapElement = document.getElementById('map');
            map = new google.maps.Map(mapElement, mapOptions);

            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                icon: 'images/loc.png'
            });
        });
    } else {
        console.log('Geolocation is not supported by this browser.');
    }
}

google.maps.event.addDomListener(window, 'load', init);
