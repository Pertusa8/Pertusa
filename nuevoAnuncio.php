<?php
session_start();

?>
<!DOCTYPE html> 
<html lang="es" class="html_main">
  <head>
  <title>Daily Trends</title>  
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">    
    <meta charset="utf-8">  
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">    
	<link rel="stylesheet" href="js/bootstrap.min.css"> 
	<link rel="stylesheet" href="css/estilos.css">
  <script src="js/jquery-1.12.3.min.js"></script> 
   <script src="js/bootstrap.min.js"></script>
   <style>
   
   </style>
</head>
<script>
$(document).ready(function(){
	$(".error").hide();
	<?php 
		if(isset($_GET['a'])){ ?>
			$(".error").show();
			$("#password").addClass("no_seleccionado_gordo").focus();
			
			$("#password").keypress(function(){
				$("#password").removeClass("no_seleccionado_gordo");
				$(".error").hide();
			});
	<?php	}  	?>	
});
</script>
<body>

<div class="registro_menu">
<div class="main_formulario">
	<h1>Nuevo Anuncio</h1>
  <div class="row main">  
    <div class="col-xs-3 col-sm-3 col-md-3">  
	
		<form action="menu.php" method="post" class="formu_main">
		<table class="tablaAcciones"><tr><td>Título:</td><td><input type="text" name="titulo" id="titulo" required></td></tr>
	</div>
  <div class="col-xs-3 col-sm-3 col-md-3">
	  <tr><td>Descripción:</td><td>
	  <textarea name="descripcion" rows="2" cols="50" required></textarea></td></tr><br>
  </div>
  <div class="col-xs-3 col-sm-3 col-md-3">
	  <tr><td>Fuente:</td><td>
	  <input type="text" name="fuente" id="fuente" required></td></tr><br>
  </div>
  <div class="col-xs-3 col-sm-3 col-md-3">
	  <tr><td>Periódico:</td><td>
	  <input type="text" name="periodico" id="periodico" required></td></tr><br>
  </div>
 <tr><td></td><td><button type="submit" class="btn btn-primary entrar">Crear anuncio</button><input type="text" name="nuevo" id="nuevo" value="nuevo" hidden></td></tr></table> 
</form>
</div>
</div>
</br>
</div>
<h3><span class="error" hidden>* Incorrect password</span></h3>
</body>
</html>