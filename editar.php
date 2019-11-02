<?php
session_start();
var_dump($_SESSION['datos_guardados'][$_GET['cual']]['titulo']);
echo $_GET['cual'];
?>
<!DOCTYPE html> 
<html lang="es" class="html_main">
  <head>
  <title>Daily Trends</title>  
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">    
    <meta charset="utf-8">  
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">    
<!--   <link href="css/custom.css" rel="stylesheet"> -->
	<link rel="stylesheet" href="js/bootstrap.min.css"> 
	<link rel="stylesheet" href="css/estilos.css">
	<link rel="stylesheet" href="css/animate.css">
  <script src="js/jquery-1.12.3.min.js"></script> 
   <script src="js/bootstrap.min.js"></script>
   <style>
   </style>
   <script>
$(document).ready(function(){		
	$('#titulo').val(<?php echo $_SESSION['datos_guardados'][$_GET['cual']]['titulo'];?>);
	$('#titulo').text(<?php echo $_SESSION['datos_guardados'][$_GET['cual']]['titulo'];?>);
	$('#descripcion').val(<?php echo $_SESSION['datos_guardados']['gente']['descripcion'];?>);
	$('#fuente').val(<?php echo $_SESSION['datos_guardados']['exposito']['fuente'];?>);
	$('#periodico').val(<?php echo $_SESSION['datos_guardados']['disponible']['periodico'];?>);	
	document.getElementById("descripcion").value = "Fifth Avenue, New York City";
});	
</script>
</head>
<body>

<div class="registro_menu">
<div class="main_formulario">
	<h1>Editar Anuncio</h1>
  <div class="row main">  
    <div class="col-xs-3 col-sm-3 col-md-3">  
	
		<form action="menu.php" method="post" class="formu_main">
		<table class="tablaAcciones"><tr><td>Titulo:</td><td><input type="text" name="titulo" id="titulo" value="<?php echo $_SESSION['datos_guardados'][$_GET['cual']]['titulo'];?>" required></td></tr>
	</div>
  <div class="col-xs-3 col-sm-3 col-md-3">
	  <tr><td>Descripción:</td><td>
	  <textarea name="descripcion" id="descripcion" rows="2" cols="50"  required><?php echo $_SESSION['datos_guardados'][$_GET['cual']]['descripcion'];?></textarea></td></tr><br>
  </div>
  <div class="col-xs-3 col-sm-3 col-md-3">
	  <tr><td>Fuente:</td><td>
	  <input type="text" name="fuente" id="fuente" value="<?php echo $_SESSION['datos_guardados'][$_GET['cual']]['fuente'];?>" required></td></tr><br>
  </div>
  <div class="col-xs-3 col-sm-3 col-md-3">
	  <tr><td>Periódico:</td><td>
	  <input type="text" name="periodico" id="periodico" value="<?php echo $_SESSION['datos_guardados'][$_GET['cual']]['periodico'];?>" required></td></tr><br>
  </div>
 <tr><td></td><td><button type="submit" class="btn btn-primary entrar">Crear anuncio</button><input type="text" name="editar" id="editar" value="<?php echo $_GET['cual'];?>" hidden></td></tr></table> 
</form>
</div>
</div>
</br>
</div>
</body>
</html>