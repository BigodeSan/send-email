(function($) {
    'use strict';

    $("form").on('submit', function(e) {
        e.preventDefault();

        $.ajax({
            url: "https://formspree.io/sensualmdintima@gmail.com", 
            method: "POST",
            data: {
                nome: $("#nome").val(),
                email: $("#email").val(),
                telegone: $("#telefone").val(),
                mensagem: $("#mensagem").val()
            },
            dataType: "json"
        }).done(function(result) {
            console.log(result); // < DEBUG

            $("#send").html("<div class='alert alert-success'>");
            $("#send > .alert-success").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
            $("#send > .alert-success").append($("<strong>").text("Email enviado com sucesso! Retornaremos em breve."));
            $("#send > .alert-success").append('</div>');
            
            $('#form').trigger("reset");
        }).fail(function(err) {
            console.log(err); // << DEBUG

            $("#send").html("<div class='alert alert-danger'>");
            $("#send > .alert-danger").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
            $("#send > .alert-danger").append($("<strong>").text("Desculpe, não foi possivel enviar seu email. Tente mais tarde!!!"));
            $("#send > .alert-danger").append('</div>');
            
            $('#form').trigger("reset");
        });
    });

})(jQuery);
