function getJSON(url) {
    return fetch(url)
        .then(function (response) {
        return response.json();
    })
        .catch(function (error) {
        console.log(error);
    });
}


function fetchShips() {
    var url = "//swapi.co/api/starships/";
    getJSON(url).then(function (data) {

        var results = data.results;
        var shipListElement = document.getElementById('shiplist');
        shipListElement.innerHTML = "";
        results.forEach(function(ship){
            var listItem = document.createElement('li');
            var link = document.createElement('a');
            link.setAttribute('href', ship.url)
            link.innerHTML = ship.name;
            link.addEventListener('click',function(event){
                event.preventDefault();
                getShipDetails(ship.url);
                document.getElementById('name').innerHTML = ship.name;
                document.getElementById('model').innerHTML = ship.model;
                document.getElementById('class').innerHTML = ship.starship_class;
                document.getElementById('manufacturer').innerHTML = ship.manufacturer;
            });
            listItem.appendChild(link);
            shipListElement.appendChild(listItem);
        });

    });
}

function getShipDetails(url){

    getJSON(url).then(function (data){
        console.log(data);


    });
}

fetchShips();

// I worked with Wilson
