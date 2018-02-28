$('#invioDati').click(function(){
        var fname= $('#fname').val();
        var lname = $('#lname').val();
        var email = $('#email').val();
        var phone = $('#phone').val();

        var persona = {
            "name": {
                "first": fname,
                "last": lname,
            },
            "email":email,
             
        
            "phone":phone,
            
    
                
            
         };
        $.post("http://localhost:3000/results", persona)
         .done(function(data){
          alert("Data Loaded:" + data);
  });
});
