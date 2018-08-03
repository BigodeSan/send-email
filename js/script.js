$(function($){

	$("form").submit(function(event) {

		event.preventDefault();

		$.ajax({
	    url: "https://formspree.io/sensualmdintima@gmail.com", 
	    method: "POST",
	    data: {
	    	name: $("#nome").val(),
	    	email: $("#email").val(),
            telefone: $("telefone").val(),
	    	message: $("#mensagem").val()
	    },
	    dataType: "json"
		}).done(function(){
			$('#mensagem').html("<div class='alert alert-danger'>");
            		$('#mensagem > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
            		.append("</button>");
         		 $('#mensagem > .alert-danger').append($("<strong>").text("Email enviado com sucesso!"));
          		$('#mensagem > .alert-danger').append('</div>');
            
           	 $('#form').trigger("reset");
		}).fail(function(){
			alert("Erro ao enviar email!");
		});
	});

}) ;
