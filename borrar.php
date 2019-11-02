<?php session_start(); 

if(isset($_GET['cual'])){	
	unset($_SESSION['datos_guardados'][$_GET['cual']]); //elimino la posicion del array
	$_SESSION['datos_guardados'] = array_values($_SESSION['datos_guardados']); // lo redimensiono	
}
 header('Location: menu.php');
   die();

?>