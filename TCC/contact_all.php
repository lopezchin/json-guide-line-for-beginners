<?php


	header('Access-Control-Allow-Origin: *');

	// $user = isset($_REQUEST['user']) ? $_REQUEST['user'] : null;
	if (isset($_REQUEST['action']) ) {

		$token_key = isset($_REQUEST['tokenKey']) ? $_REQUEST['tokenKey'] : null;
		
	};

	// if(!isset($_SESSION['token_id']) && !isset($_SESSION['user'])){ //check session first if its set 

	$qstring = array(
    'login_id' => 'philweb.seniorprogrammer05@gmail.com',
    'api_key' => '4107a1cf7fba52e49d3257f24693078d4c10f13cf7ff1c2e74417b67fd63b103'
	);

	 //cURL settings
    $curlOptions = array (
        CURLOPT_URL => "https://devapi.thecurrencycloud.com/api/en/v1.0/".$token_key."/contacts",
        CURLOPT_VERBOSE => 1,
        CURLOPT_RETURNTRANSFER => 1,
        CURLOPT_POST => 1,
        CURLOPT_POSTFIELDS => $qstring
    );

	$ch = curl_init();
	curl_setopt_array($ch,$curlOptions);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE); 
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE); 


	//Sending our request - $response will hold the API response
	$contact_all = curl_exec($ch);

	curl_close($ch);

	// $responseArray = array();
	// parse_str($response,$responseArray);
	
	echo $contact_all;

?>
