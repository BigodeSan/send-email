$(function($){
    $("form").submit(function(event){
        
        event.preventDefault();
        
        $.ajax({
        url: "https://formspree.io/sensualmdintima@gmail.com", 
        method: "POST",
        data: {
            name: $("#nome").val(),
            email: $("#email").val(),
            telefone: $("#telefone").val(),
            message: $("#mensagem").val(),
        },
        dataType: "json"
        },
                
                cache: false,
                success: function()  {
                    // Success message
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("<strong>Sua Mensagem foi enviada. </strong>");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#contactForm').trigger("reset");
                })
        }).fail(function(){
                alert("Não foi possivel enviar seu email, tente mais tarde!");
        });
        
    });
    
});