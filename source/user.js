


function loading(){
    'use strict';
    $.getJSON('https://randomuser.me/api/', function(persona) {
        document.getElementById('figuregen').src=persona.results[0].picture.large;
        document.getElementById('namegen1').textContent=persona.results[0].name.first + ' ' +persona.results[0].name.last;
        document.getElementById('namegen2').textContent=persona.results[0].name.first + ' ' + persona.results[0].name.last;
        document.getElementById('emailgen').textContent=persona.results[0].email ;
        document.getElementById('city').textContent=persona.results[0].location.city ;
        document.getElementById('phonegen').textContent=persona.results[0].cell;
        document.getElementById('addressgen').textContent=persona.results[0].location.street;

    });
}