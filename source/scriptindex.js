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
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
      console.log(data);
    }
  });

  $('#postDati').click(function(){
    
    var persona = {
      "name":{
      "title":"mr",
      "first":"dries",
      "last":"mertens"
      },
    };
  $.post("http://localhost:3000/results", persona)
  .done(function(data){
    alert("Data Loaded:" + data);
  });
});
  



