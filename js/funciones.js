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
//nuevo.php
function ver_formulario(cual){
	//$('.PasoDos').clone().prependTo('.conte');
	$('.conte').empty();
	$('.'+cual).clone().prependTo('.conte');
}

//ver articulos 
function arti(bloque,dato){
	var articulo_anterior = articulo;
	switch(bloque){
			case 1:				
				tipo_articulo = dato;
			break;
			case 2:
				categoria = dato;
			break;
			case 3:				
				cliente = dato;
			break;
			case 4:				
				articulo = dato;
			break;
	}
		
	if(tipo_articulo !=="" && categoria !=="" && cliente !==""){
			//alert("holaa");
			//if(articulo_anterior !== articulo){
				GetUserDetails(tipo_articulo,categoria,cliente);
			//}
	}
}

var seleccionados = new Array();  
  var seleccionadosLinea = new Array();  
  var seleccionadosNombre = new Array();  
  var correosSelec = new Array();  
  var seleccionadosCli = new Array();  
  var gente = "";  
  var gente2 = "";  
  var gente3 = "";  
  var Linea = "";
  var correos = "";  
  var CodCliente = "";  
  var p = 0;
  function apuntar(q,nombre){  
		var borrado = "no";			
		e = 0;			
		if(seleccionadosLinea.length == '0'){  // lo pongo a cero la primera vez, y si marco mas de uno lo dejo q el contador siga aumentando
			p = 0;
		}		
			
		for(var i=0; i<seleccionadosLinea.length; i++){ //lo  recorro todo x si ya lo habian marcado, hacer un desmcarcado y que no lo borre
			if(seleccionadosLinea[i] == q){					
				seleccionadosLinea.splice(i, 1);					
				seleccionadosNombre.splice(i, 1);					
				borrado = "si";
				p--;
			}
		}
			
			if(borrado == 'no'){ // si ya esta marcado q no lo borre
				seleccionadosLinea[p] = q;					
				seleccionadosNombre[p] = " "+nombre;					
				p++;
			}				
}

function cuantos_borrar(bloque){
var borrar_algo = false;	
	for(var i=0; i<seleccionadosLinea.length; i++){
		if(i == (seleccionadosLinea.length-1)){
			Linea = Linea + seleccionadosLinea[i];						
		}else{
			Linea = Linea + seleccionadosLinea[i] + ",";			
		}
		borrar_algo = true;
	}				
		if(borrar_algo){
			window.location.href = "eliminar.php?linea="+Linea+"&bloque="+bloque;	
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

function marcar_no_seleccionados_editar(){
	$(".error").show();
	var parar = false;
	var selects=$('select').toArray(); //todos los selects en una lista	
	for(var i=0;i<selects.length;i++){
		if(selects[i]['value'] == ""){			
			$("#"+selects[i]['id']).addClass("no_seleccionado");			
			parar = true;
		}else{
			$("#"+selects[i]['id']).removeClass("no_seleccionado");
		}
	}	
	
	if(parar){
		return false;
	}
}

function cargar_datos(){
	$('#loading').css("display","block");
	$('#mostrar_datos').empty();
	$('#loading').clone().prependTo('#mostrar_datos');	
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

function sacar_botones(bloque){
	if(bloque == 1){ //editar
		$('#acciones').attr("value","Edit");
		$('.accion').css("display","block");
		$('#ver_formu').find('tr').each(function(){				  
				$(this).find('td:last-child').find("button").val("edit").text("Edit");
				$(this).find('td:last-child').find("button").css("display","block").css("background-color", "#dddddd"); //rgb(183, 48, 48); 
				$(this).find('td:last-child').css("display","block"); 
		});
	}else{ //borrar
		$('#acciones').attr("value","Delete");
		$('.accion').css("display","block");
		$('#ver_formu').find('tr').each(function(){				  
				$(this).find('td:last-child').find("button").val("delete").text("Delete"); 
				$(this).find('td:last-child').find("button").css("display","block").css("background-color", "#b73030"); 
				$(this).find('td:last-child').css("display","block"); 
		});
	}
}

function ver_direccion(cual){
	//var Idsuper = $('#idsupermecado').val();
	//var cual= 200000001;
	$.post("ajax/readUserDetails.php", {
            Idsuper: cual, 
		  // Idarticulo: cual,
			bloque: 2
			//bloque: 1
        },
        function (data, status) {			            
            var user = JSON.parse(data);
			//alert(user);
			$('#iddirec').empty(); //borro la lista de personas.			
			//$('#iddirec').append('<option value="" selected></option>')
			$('#iddirec').append('<option value="0">Other</option>');
			$(user).each(function(i, v){ // indice, valor                        
                //cursos.append('<option value="' + v.Id + '">' + v.Articulo + '</option>');
                $('#iddirec').append('<option value="' + v.IdDireccion + '">' + v.Direccion + '</option>');
            });	
      }
    ); 
}

function cargar_variedad(cual){
	//alert(cual);
	$.post("ajax/readUserDetails.php", {
            Idarticulo: cual,
			bloque: 1
        },
        function (data, status) {			            
            var user = JSON.parse(data);
			//alert(user);
			$("#idvariedad").empty(); //borro la lista de personas.			
			$("#idvariedad").append('<option value="" selected></option>')
			$("#idvariedad").append('<option value="-1">Unknown</option>');
			$(user).each(function(i, v){ // indice, valor                        
                //cursos.append('<option value="' + v.Id + '">' + v.Articulo + '</option>');
                $("#idvariedad").append('<option value="' + v.IdVariedades + '">' + v.Descript + '</option>');
            });	
      }
    );  		
}
function cargar_variedad_seleccionar(cual,num){
	//alert(cual);
	$.post("ajax/readUserDetails.php", {
            Idarticulo: cual,
			bloque: 1
        },
        function (data, status) {			            
            var user = JSON.parse(data);
			//alert(user);
			$("#idvariedad").empty(); //borro la lista de personas.				
			if(num == '-1'){
				$("#idvariedad").append('<option value=""></option>')
				$("#idvariedad").append('<option value="-1" selected>Unknown</option>');
			}else{
				$("#idvariedad").append('<option value="" selected></option>')
				$("#idvariedad").append('<option value="-1">Unknown</option>');
			}
			$(user).each(function(i, v){ // indice, valor                        
                //cursos.append('<option value="' + v.Id + '">' + v.Articulo + '</option>');
				if(v.IdVariedades == num){
					$("#idvariedad").append('<option value="' + v.IdVariedades + '" selected>' + v.Descript + '</option>');
				}else{
					$("#idvariedad").append('<option value="' + v.IdVariedades + '">' + v.Descript + '</option>');
				}
            });	
      }
    );  		
}


function ver_direccion_seleccionar(cual,num){
	//var Idsuper = $('#idsupermecado').val();
	//var cual= 200000001;
	$.post("ajax/readUserDetails.php", {
            Idsuper: cual, 
		  // Idarticulo: cual,
			bloque: 2
			//bloque: 1
        },
        function (data, status) {			            
            var user = JSON.parse(data);
			//alert(user);
			$('#iddirec').empty(); //borro la lista de personas.			
			//$('#iddirec').append('<option value="" selected></option>')
			$('#iddirec').append('<option value="0">Other</option>');
			$(user).each(function(i, v){ // indice, valor                
				if(v.IdDireccion == num){
					$('#iddirec').append('<option value="' + v.IdDireccion + '" selected>' + v.Direccion + '</option>');
				}else{
					$('#iddirec').append('<option value="' + v.IdDireccion + '">' + v.Direccion + '</option>');
				}
            });	
      }
    ); 
}
function validar_fecha(texto){
	if(texto.length > 1){
		let partes = (texto || '').split('/'),
			fechaGenerada = new Date(partes[2], --partes[1], partes[0]);
		
		if (partes.length == 3 && fechaGenerada && partes[0] == fechaGenerada.getDate() && partes[1] == fechaGenerada.getMonth() && partes[2] == fechaGenerada.getFullYear()) {
			return true;
		}
		alert("you must introduced the date: dd/mm/yyyy");
		return false; //Inválida
	}
}
function validar_hora(texto){
	if(texto.length > 1){
		let partes = (texto || '').split(':'),
			diaGenerado = new Date(partes[0], partes[1]);
		
		if (partes.length == 2 && diaGenerado && partes[0].length == 2 && partes[0] < 24 && partes[1].length == 2 && partes[1] < 60) {
			return true;
		}
		alert("you must introduced the time: hh:mm");
		return false; //Inválida
	}
}
var usuario = "";
var supermer = "";
var arti = "";
var fecha = "";
function fotos_filtros(bloque,dato){	
	switch(bloque){
			case 1:				//usuario				
				$.post("ajax/readUserDetails_foto.php", {
						pais: dato,
						bloque: bloque
					},
					function (data, status) {			            
						var user = JSON.parse(data);
						//alert(user);
						$("#supermecado").empty(); //borro la lista de personas.
						$("#articulo").empty(); //borro la lista de personas.
						
						$("#supermecado").append('<option value="" selected></option>')						
						$(user).each(function(i, v){ // indice, valor                        
							//cursos.append('<option value="' + v.Id + '">' + v.Articulo + '</option>');
							$("#supermecado").append('<option value="' + v.IdSupermercado + '">' + v.Supermercado + '</option>');
						});	
				  }
				); 
				arti = dato;
			break;
			case 2:
			fecha = $('#desde').val();
			if(arti !== ""){				
				$.post("ajax/readUserDetails_foto.php", {
						pais: arti,
						IdSuper: dato,
						bloque: bloque,
						desde : fecha
					},
					function (data, status) {			            
						var user = JSON.parse(data);
						//alert(user);
						$("#articulo").empty(); //borro la lista de personas.			
						$("#articulo").append('<option value="" selected></option>')						
						$(user).each(function(i, v){ // indice, valor                        
							//cursos.append('<option value="' + v.Id + '">' + v.Articulo + '</option>');
							$("#articulo").append('<option value="' + v.IdArticulo + '">' + v.Descrip + '</option>');
						});	
				  }
				);
			}
			break;			
	}
	//GetUserDetails(usuario,supermer,cliente);
}

//select a.IdArticulo,a.Descrip from Lineas l
//inner join Articulos a on a.IdArticulo=l.IdArticulo where Idusuario='9'
//group by a.Descrip,a.IdArticulo