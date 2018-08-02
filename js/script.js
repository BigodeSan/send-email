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
        }).done(function(){
                $("#nome").val("");
                $("#email").val("");
                $("#telefone").val(""),    
                $("#mensagem").val("");
            document.getElementById('teste').innerHTML = "<div class="alert alert-success">Envio Realizado!</div>";    
            //alert("Email enviado com sucesso!");
        }).fail(function(){
                alert("Não foi possivel enviar seu email, tente mais tarde!");
        });
        
    });
    
});