<?php
	header("Content-Type: application/json");
	// $folder = "gallery1";
	
	$folder = $_POST["folder"];
	$jsonData = '{';
	$dir = $folder."/";
	$dirHandle = opendir($dir); 
	$i = 0;
	while ($file = readdir($dirHandle)) {
		if(!is_dir($file) && strpos($file, '.jpg')){
			$i++;
			$src = "$dir$file";
	$jsonData .= '"img'.$i.'":{ "num":"'.$i.'","src":"'.$src.'", "name":"'.$file.'" },';
	    }
	}
	closedir($dirHandle);
	$jsonData = chop($jsonData, ",");
	$jsonData .= '}';
	echo $jsonData;
?>