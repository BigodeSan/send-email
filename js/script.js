$(function($){
    $("form").submit(function(event){
        
        event.preventDefault();
        
        $.ajax({
        url: "https://formspree.io/sensualmdintima@gmail.com", 
        method: "POST",
        data: {
            name: $("#name").val(),
            email: $("#email").val(),
            message: $("#message").val(),
        },
        dataType: "json"
        }).done(function(){
                $("#name").val("");
                $("#email").val("");
                $("#message").val("");
                alert("Email enviado com sucesso!");
        }).fail(function(){
                alert("Não foi possivel enviar seu email, tente mais tarde!");
        });
        
    });
    
});