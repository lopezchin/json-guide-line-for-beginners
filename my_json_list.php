<?php 
	header("Content-Type: application/json");
	$var1 = $_POST["var1"];
	$var2 = $_POST["var2"];

	$jsonData = '{
		"obj1": { "propertyA":"'.$var1.'", "propertyB":"'.$var2.'" }
	}';


	// tutorial 3 
	//grabbing data dynamically 
	
	// $jsonData = '{
	// 	"u1":{ "user":"John", "age":21, "country":"United State" },
	// 	"u2":{ "user":"Wayne", "age":21, "country":"United Kingdom" },
	// 	"u3":{ "user":"Chris", "age":22, "country":"Las Vegas" },
	// 	"u4":{ "user":"Lawrence", "age":22, "country":"Mexico" },
	// 	"u5":{ "user":"Michael", "age":23, "country":"Egypt" },
	// 	"u6":{ "user":"Rene", "age":23, "country":"Europe" },
	// 	"u7":{ "user":"Gabriel", "age":24, "country":"Norland" },
	// 	"u8":{ "user":"Stephen", "age":24, "country":"Usop Land" },
	// 	"u9":{ "user":"Rafael", "age":33, "country":"Luffy Land"}
	// }';

	//grabbing list on json file
	// $jsonData_jsonfile = file_get_contents("mylist.json");
	echo $jsonData;
?>