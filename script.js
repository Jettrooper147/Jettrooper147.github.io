function getJSON(url) {
    return fetch(url)
        .then(function (response) {
        return response.json();
    })
        .catch(function (error) {
        console.log(error);
    });
}


function getCharacter() {
    var url = "character-info.json";
    getJSON(url).then(function (data) {


        var characterListElement = document.getElementById('characterlist');

        characterListElement.innerHTML = "";
        data.characters.forEach(function(character){
            var listItem = document.createElement('li');
            var link = document.createElement('a');
            link.setAttribute('href', character.url)
            link.innerHTML = character.codename;
            link.addEventListener('click',function(event){
                event.preventDefault();
                getCharacterDetails(character.url);
                document.getElementById('realname').innerHTML = character.realname;
                document.getElementById('codename').innerHTML = character.codename;
                document.getElementById('class').innerHTML = character.class;
                document.getElementById('origin').innerHTML = character.origin;
                document.getElementById('bio').innerHTML = character.bio;
            });
            listItem.appendChild(link);
            characterListElement.appendChild(listItem);
        });

    });
}

function getCharacterDetails(url){

    getJSON(url).then(function (data){
        console.log(data);


    });
}

getCharacter();
