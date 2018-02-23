$('#invioDati').click(function(){
        var firstname= $('#firstname').val();
        var lastname = $('#lastname').val();
        var email = $('#email').val();
        var phone = $('#phone').val();

        var persona = {
            "name": {
                "first": name,
                "last": lastname
            },
            "email":email
                
            },
        };
        $post('http://localhost:3000/results');
})
