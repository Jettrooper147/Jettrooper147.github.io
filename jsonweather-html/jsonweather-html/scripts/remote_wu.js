// Current Location Scripts
(function () {

    var status = document.getElementById('status');

    (function getGeoLocation() {
        status.innerHTML = 'Getting Location...';
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var lat = position.coords.latitude;
                var long = position.coords.longitude;

                // Call the getData function, send the lat and long
                getData(lat, long);

            });
        } else {
            status.text("Your browser doesn't support Geolocation or it is not enabled!");
        }

    }());

    function getJSON(url) {
        return fetch(url)
            .then(function (response) {
            return response.json();
        })
            .catch(function (error) {
            console.log(error);
        });
    }

    // Get the data from the wunderground API
    function getData(lat, long) {
        var url = "http://api.wunderground.com/api/0d452c18d36b5b80/geolookup/conditions/q/" + lat + ',' + long + '.json'; //change this to the correct URL for wunderground

        getJSON(url).then(function (data) {
            console.log(data);
            var local = data.location;
            var weather = data.current_observation;
            //add the code necessary here to update the page with all of the correct data points.
            document.getElementById('cityDisplay').innerHTML = local.city + ', ' + local.state;

            document.getElementById('currentTemp').innerHTML = Math.round(weather.temp_f) + '&deg;';

            document.getElementById('summary').innerHTML = weather.weather;

            document.getElementById('add1').innerHTML= "humidity: " + weather.relative_humidity ;

            document.getElementById('add2').innerHTML= 'Wind: ' + weather.wind_mph + 'MPH';

            document.getElementById('add3').innerHTML= 'Wind Direction: ' + weather.wind_dir;

            //this line will cause the Loading message to fade away.
            document.getElementById("cover").classList.add('fadeout');



        });


    }

    // A function for changing a string to TitleCase
    function toTitleCase(str) {
        return str.replace(/\w+/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
}());
