function loadInformation(){
    var persona = extractRandomUser('It');

    
    
    document.getElementById('namegen1').textContent = persona.name.first + ' ' + persona.name.last;  
    document.getElementById('namegen2').textContent = persona.name.first + ' ' + persona.name.last;  
    document.getElementById('figuregen').src = persona.picture.large; 
    document.getElementById('addressgen').textContent = persona.location.street + ', ' + persona.location.city + ' ' + persona.location.postcode + ', ' + persona.location.state; 
    document.getElementById('emailgen').textContent = persona.email;   
    document.getElementById('phonegen').textContent = persona.phone;   
    
}

$.ajax({
    url: 'https://randomuser.me/api/?results=12&format=json',

    success: function(data){
        employees = data.results;
        displayEmployees(employees);
        console.log(employees);
    }
});



