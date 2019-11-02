<?php session_start(); 

include("js/funcionesPhp.php");

$titulo[] = array();
$descripcion[] = array();
//$imagen[] = array();
$fuente[] = array();
$periodico[] = array();

$contador = 0;

if (isset($_POST['nuevo']) == 'nuevo'){
	$_SESSION['datos_guardados'][] = array("titulo" => $_POST['titulo'],"descripcion" => $_POST['descripcion'],"fuente" => $_POST['fuente'],"periodico" => $_POST['periodico']);
}

if (isset($_POST['editar'])){
	$_SESSION['datos_guardados'][$_POST['editar']] = array("titulo" => $_POST['titulo'],"descripcion" => $_POST['descripcion'],"fuente" => $_POST['fuente'],"periodico" => $_POST['periodico']);
}

$titulo = DameTitulo();
$descripcion = DameDescripcion();
$fuente = DameFuente();
$periodico = DamePeriodico();
?>
<!DOCTYPE html> 
<html lang="es">
  <head>
  <title>Daily Trends</title>
  <link rel="stylesheet" href="js/bootstrap.min.css">  
  <script src="js/jquery-1.12.3.min.js"></script> 
  <script src="js/bootstrap.min.js"></script>
  <link rel="stylesheet" href="css/estilos.css"> 
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
</head>
<script>
$(document).ready(function(){	
	$("#nuevo").click(function(){
		window.location.href = 'nuevoAnuncio.php';
	});		
	$("#editar,#borrar").click(function(){			
			var boton = $(this).parent().parent().attr('id');			
			if($(this).attr('id') == 'editar'){
				window.location.href='editar.php?cual='+boton;
			}else{
				window.location.href='borrar.php?cual='+boton;
			}			
		});
});
</script>
<body>

<div class="container menu2">		
	<div class="row parte_arriba">
		<h1>Principales anuncios del dia: <?php echo date("Y/m/d"); ?></h1>
	</div>
	<div class="col-xs-12 col-sm-12 col-md-12">
		<fieldset>
		<legend><?php echo $periodico[0]; ?></legend>
			<div class="row" id="Pais">				
				<div class="col-xs-12 col-sm-12 col-md-12">											
						  <?php 
							$ht = '<table id="pais" style="width:auto;"><tr><td><h3>Titulo</h3></td><td><h3>Descripcion</h3></td><td><h3>Fuente</h3></td></tr>';										
							for($i=0;$i<5;$i++){ 			
								$ht .= '<tr><td>'.$titulo[$i].'</td><td>'.$descripcion[$i].'</td><td>'.$fuente[$i].'</td></tr>';			
							}
							$ht .= '</table>'; 
							echo $ht;
						  ?>									
				</div>				
				<?php //}?>	
			</div>
		</fieldset>
		<fieldset>
		<legend><?php echo $periodico[1]; ?></legend>
			<div class="row" id="Mundo">				
				<div class="col-xs-12 col-sm-12 col-md-12">
					<?php 
							$ht = '<table id="mundo" style="width:auto;"><tr><td><h3>Titulo</h3></td><td><h3>Descripcion</h3></td><td><h3>Fuente</h3></td></tr>';
							//$ht .= '';				
							for($i=5;$i<10;$i++){ //lo pongo xq el simbolo del euro no lo saca bien			
								$ht .= '<tr><td>'.$titulo[$i].'</td><td>'.$descripcion[$i].'</td><td>'.$fuente[$i].'</td></tr>';			
							}
							$ht .= '</table>'; 
							echo $ht;
						  ?>				
				</div>			
			</div>
		</fieldset>
		<fieldset>
		<legend>Propios</legend>
			<div class="row" id="Propio">				
				<div class="col-xs-12 col-sm-12 col-md-12">					
					<a class="btn btn-info btn-lg" id="nuevo">
          <span class="glyphicon glyphicon-plus"></span> Nuevo anuncio</a>
					<?php if (isset($_SESSION['datos_guardados'])){
							$ht = '<table id="propio" style="width:auto;"><tr><td><h3>Titulo</h3></td><td><h3>Descripcion</h3></td><td><h3>Fuente</h3></td><td><h3>Periodico<h3></td><td></td></tr>';											
							for($i=0;$i<count($_SESSION['datos_guardados']);$i++){ 			
								$ht .= '<tr id="'.$i.'"><td>'.$_SESSION['datos_guardados'][$i]['titulo'].'</td><td>'.$_SESSION['datos_guardados'][$i]['descripcion'].'</td><td>'.$_SESSION['datos_guardados'][$i]['fuente'].'</td><td>'.$_SESSION['datos_guardados'][$i]['periodico'].'</td><td><a class="btn btn-warning btn-lg" id="editar" ><span class="glyphicon glyphicon-pencil"></span>Editar</a><a class="btn btn-danger btn-lg" id="borrar"><span class="glyphicon glyphicon-remove"></span>Eliminar</a></td></tr>';			
							}
							$ht .= '</table>'; 
							echo $ht;
						}	
					?>	
				</div>				
			</div>
		</fieldset>
	</div>  
</div>  
</body>
</html>
