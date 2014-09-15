<?php

require_once($_SERVER['DOCUMENT_ROOT'].'/controller/shared/config.php');	

if(isset($_POST) ){
	extract($_POST);

	$query = "SELECT * FROM users WHERE email = '$email'";
	$result = mysql_query($query);

	if(mysql_num_rows($result) >= 1){
		echo "true";
	}
	else{
		echo "false";
	}

}