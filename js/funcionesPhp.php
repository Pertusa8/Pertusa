<?php
function convertir_array_acentos($array){
	for($i=0;$i<count($array);$i++){
		$array2[$i] = array_map('utf8_encode', $array[$i] );
	}
	return $array2;
}


?>