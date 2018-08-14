$(function($){

	$("form").submit(function(event) {

		event.preventDefault();

		$.ajax({
			url: "https://simple-form.com/sensualmdintima@gmail.com?json",
			 method: "POST",
			 data: {
			name: $("#name").val(),
			email: $("#email").val(),
			message: $("#message").val()
	    	},
	    	dataType: "json"
		}).done(function(){
			$("#name").val("");
			$("#email").val("");
			$("#message").val("");
			alert("Email enviado com sucesso!!");
		}).fail(function(){
			$("#mensagem").html("<div class='alert alert-danger'>");
           $("#mensagem > .alert-danger").html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            .append("</button>");
          $("#mensagem > .alert-danger").append($("<strong>").text("Desculpe, não foi possivel enviar seu email. Tente mais tarde!"));
          $("#mensagem > .alert-danger").append('</div>');
            
            $('#form').trigger("reset");
		});
	});

}) ;
