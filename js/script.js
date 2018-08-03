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
		}).done(function send(){
			$("#nome").val("");
			$("#email").val("");
            $("#telefone").val("");
			$("#mensagem").val("");
			alert("Email enviado com sucesso!!!");
		}).fail(function(){
			alert("Erro ao enviar email!");
		});
	});

}) ;