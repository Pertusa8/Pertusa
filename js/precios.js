function GetUserDetails(IdMoneda) { 	 
    $.post("ajax/readUserDetails.php", {
            IdMoneda: IdMoneda
        },
        function (data, status) {			            
            var user = JSON.parse(data);			
			if(user.length > 0){				
				$("#cambio").attr("value",user[0]['cambio']);
			}else{ //borro el contenido del campo
				$("#cambio").attr("value","");
			}
      }
    );  		
}

var semanas_encontrado = false;
function GetUserDetails2(IdCli,IdArt) { 
	//alert("entra");
	var cursos = $("#tabla_datos");  
    $.post("ajax/readUserDetails.php", {            
            idCli: IdCli,
            idCod: IdArt,
			bloque: 2
        },
        function (data, status) {			            
            var user = JSON.parse(data); 									
		
			if(user == null){				
				$(".error").text("No hay datos de ese Artículo");				
				$(".error").css("display","block");				
			}else{
		
		/*	// cuando me devuelven los datos de un producto si no tiene datos en semanas altas (de la 40 a la 52/53) no tengo manera de saber si tiene 52 o 53 semanas 
			for(i=0;i<user.length;i++){
				if(user[i]['Semana'] > "40" && user[i]['Semana'] <= "49"){ //si le pongo 50 y algo, no se xq pero se mete en la semana 5 y m sale mal.
					var num_sem = user[i]['Semanas'];
					semanas_encontrado = true;				
				}
			}
				
			if(semanas_encontrado == false){  //si no le devuelven la semana que busco antes, le pongo cualquiera de la otra y ya está. 
				var num_sem = user[0]['Semanas'];
			}
		*/	
			
			var info = [];
		//	if(num_sem == '53'){
				var datos = ['40','41','42','43','44','45','46','47','48','49','50','51','52','53','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39'];
		/*	}else{
				var datos = ['40','41','42','43','44','45','46','47','48','49','50','51','52','1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39'];
			}*/
			var total = 0;
			var encontrado = false;
		//	for(i=0;i<num_sem;i++){ //busco la semana que me devuelve la base de datos 
			for(i=0;i<datos.length;i++){ //busco la semana que me devuelve la base de datos 
				for(j=0;j<user.length;j++){				
					if(user[j]['Semana'] == datos[i]){
						info[i] = user[j]['Volumen']; //hago un array con los datos que me devuelve mas las semanas q no me duelve nada, le pongo un cero.
						encontrado = true;
						total = total + parseFloat(user[j]['Volumen']);
					}
				}
				if(encontrado == false){
					info[i] = 0;
				}
				encontrado = false;			
			}
				//$('#refrescar').button('reset');
				//$('#refrescar').data('loading-text','Hecho!').button('loading');
				//$('#refrescar').button('reset');
				$("#tabla_datos td.nuevaLineatd").remove();
				cursos.append('<tr>');
				$(info).each(function(i, v){ // indice, valor  
					
					cursos.append('<td class="nuevaLineatd"><input type="text" step="any" value="' + Math.round(info[i] * 1000) / 1000 + '" id="' + Math.round(info[i] * 1000) / 1000 + '" readonly="readonly"></td>');				
					//cursos.append('<td class="nuevo"><input type="text" step="any" value="' + info[i] + '" readonly="readonly"></td>');				
				});	
				//cursos.append('<td><input type="text" step="any" value="' + Math.round(total * 1000) / 1000 + '" readonly="readonly"></td>'); //le añado el presupuesto			
				cursos.append('<td class="nuevaLineatd"><input type="text" step="any" value="' + Math.round(total * 1000) / 1000 + '" id="' + Math.round(total * 1000) / 1000 + '" readonly="readonly"></td></tr></tbody></table>'); //le añado el presupuesto			
			}
			$('#refrescar').button('reset');
		}
    );  		
}
var sexo="Hombre";
	var depor=1;
	var letra="c";
function mostrar(bloque,id) {
	$('#division').empty();	
	
	switch (bloque){
		case 1: //sexo
			 sexo = id;			
		break;
		case 2: //deporte
			 depor = id;
		break;
		case 3: //categoria						
			 letra = id.charAt(0).toLowerCase();			
		break;
	}
	
	if(sexo == 'Hombre'){
		if(depor == '1' || depor == 'Futbol'){ //futbol 
			switch (letra){				
				case 'c':					
					$('#fhc').clone().prependTo( "#division" ).show();
				break;
				case 'j':									
					$( "#fhj" ).clone().prependTo( "#division" ).show();					
				break;
				case 's':
					$('#fhs').clone().prependTo( "#division" ).show();
				break;
			}		
		}else{ //futsal
			switch (letra){				
				case 'c':					
					$('#shc').clone().prependTo( "#division" ).show();
				break;
				case 'j':									
					$( "#shj" ).clone().prependTo( "#division" ).show();					
				break;
				case 's':
					$('#shs').clone().prependTo( "#division" ).show();
				break;
			}			
		}
	}else{
		if(depor == '1' || depor == 'Futbol'){ //futbol
			switch (letra){				
				case 'c':					
					$('#fmc').clone().prependTo( "#division" ).show();
				break;
				case 'j':									
					$( "#fmj" ).clone().prependTo( "#division" ).show();					
				break;
				case 's':
					$('#fms').clone().prependTo( "#division" ).show();
				break;
			}		
		}else{ //futsal
			switch (letra){				
				case 'c':					
					$('#smc').clone().prependTo( "#division" ).show();
				break;
				case 'j':									
					$( "#smj" ).clone().prependTo( "#division" ).show();					
				break;
				case 's':
					$('#sms').clone().prependTo( "#division" ).show();
				break;
			}			
		}
	}		
}