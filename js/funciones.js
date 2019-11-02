function verificarNombre(){
		//[a-zA-ZÀ-ÖØ-öø-ÿ]+\s+[a-zA-ZÀ-ÖØ-öø-ÿ]+\.?(( |\-)[a-zA-ZÀ-ÖØ-öø-ÿ]+\.?)*
	if($("#nombre").val().length > 0) {
		var texto=$('#nombre').val(); 
		var reg=/^[a-zA-ZÀ-ÖØ-öø-ÿ]+\s+[a-zA-ZÀ-ÖØ-öø-ÿ]+\.?(( |\-)[a-zA-ZÀ-ÖØ-öø-ÿ]+\.?)*$/;     
		if (!texto.match(reg)) {
			$("#error1").text(" * Introduce tu nombre completo");
			return false;		
		}
	}else{
		$("#error1").text(" * No puede estar vacio");
			return false;
	}
}
function verificarContrasena(){		
	if($("#contra").val().length < 1) {			
		$("#error3").text(" * No puede estar vacio");
		return false;
	}	
}

function marcar_no_seleccionados(){
	$(".error").show();
	var selects=$('select option:selected[value!="-1"]').toArray(); //todos los selects en una lista	
	for(var i=0;i<selects.length;i++){
		if(selects[i]['value'] == ""){			
			$("#"+selects[i]['parentElement']['id']).addClass("no_seleccionado");
		}else{
			$("#"+selects[i]['parentElement']['id']).removeClass("no_seleccionado");
		}
	}	
	var selec_vacio = $('select option:selected[value=""]')
	if(selec_vacio.length > 0){
		return false;
	}else{
		return true;
	}
}

function validar_input(){
	var imputs=$('input[type=number]').toArray();
	var incompleto = false;
	for(var i=0;i<imputs.length;i++){
		if(imputs[i]['value'] == ""){			
			$("#"+imputs[i]['id']).addClass("no_seleccionado");
			incompleto = true;
		}else{
			$("#"+imputs[i]['id']).removeClass("no_seleccionado");
		}
	}	
	if(incompleto == true){return false;}
}
