<?php
function convertir_array_acentos($array){
	for($i=0;$i<count($array);$i++){
		$array2[$i] = array_map('utf8_encode', $array[$i] );
	}
	return $array2;
}

require 'simple_html_dom.php';

$titulo[] = array();
$descripcion[] = array();
$imagen[] = array();
$fuente[] = array();
$periodico[] = array();

function DameTitulo(){
	$pais = file_get_html('http://www.elpais.com/');
	$mundo = file_get_html('https://www.elmundo.es/');
	$contador = 0;
	foreach($pais->find('.articulo-titulo a') as $element){	
		if($contador == 5){
			break;
		}else{				
			$titulo[] = $element->plaintext;
			$contador++;
		}
	}
	
	$contador = 0;
	foreach($mundo->find('.ue-c-cover-content__kicker') as $element){	
		if($contador == 5){
			break;
		}else{				
			$titulo[] = $element->plaintext;
			$contador++;
		}
	}
	
	return $titulo;
}

function DameDescripcion(){
	$pais = file_get_html('http://www.elpais.com/');
	$mundo = file_get_html('https://www.elmundo.es/');
	$contador = 0;
	foreach($pais->find('.articulo-entradilla ') as $element){		
		if($contador == 5){
			break;
		}else{
			$descripcion[] = $element->plaintext;
			$contador++;
		}	
	}
	$contador = 0;
	foreach($mundo->find('.ue-c-cover-content__headline') as $element){		
		if($contador == 5){
			break;
		}else{
			$descripcion[] = $element->plaintext;
			$contador++;
		}	
	}
	return $descripcion;
}

function DameFuente(){
	$pais = file_get_html('http://www.elpais.com/');
	$mundo = file_get_html('https://www.elmundo.es/');
	$contador = 0;
	foreach($pais->find('.autor-nombre') as $element){	
		if($contador == 5){
			break;
		}else{
			$fuente[] = $element->plaintext;
			$contador++;
		}	
	}
	$contador = 0;
	foreach($mundo->find('.ue-c-cover-content__byline-name') as $element){	
		if($contador == 5){
			break;
		}else{
			$fuente[] = $element->plaintext;
			$contador++;
		}	
	}
	return $fuente;
}

function DamePeriodico(){
	$pais = file_get_html('http://www.elpais.com/');
	$mundo = file_get_html('https://www.elmundo.es/');
		$contador = 0;
	foreach($pais->find('title') as $element){	
		$periodico[] = $element->plaintext;			
	}
	$contador = 0;
	foreach($mundo->find('title') as $element){	
		$periodico[] = $element->plaintext;			
	}
	return $periodico;
}

?>