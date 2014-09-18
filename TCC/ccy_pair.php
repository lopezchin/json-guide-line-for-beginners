<?php

	//from Local
	
	header("Content-Type: application/json");

	//BELOW CODE ARE PROVEN AND TESTED THAT RESULT WILL SHOW AND THE ITEM'S WILL BE IN JSON FORMAT
	// header('content-type: application/json; charset=utf-8');
	// header("access-control-allow-origin: *");

	$token_key = '';
	$choice1 = '';
	$choice2 = '';

	if (isset($_REQUEST['action']) ) {

		$token_key = isset($_REQUEST['tokenKey']) ? $_REQUEST['tokenKey'] : null;
		$choice1 = isset($_REQUEST['choice1']) ? $_REQUEST['choice1'] : null;
		$choice2 = isset($_REQUEST['choice2']) ? $_REQUEST['choice2'] : null;
		// $accept_stale = isset($_REQUEST['accept_stale']) ? $_REQUEST['accept_stale'] : null;
		
	}

	$ccy_pair = ($choice1.$choice2);

	// var_dump($ccy_pair."\n\n".$accept_stale);

	$qstring = array(
	    'ccy_pair'=> $ccy_pair,
	);
	
	 //cURL settings
    $curlOptions = array (
        // CURLOPT_URL => "https://devapi.thecurrencycloud.com/api/en/v1.0/".$token_key."/prices/client_quote",
        CURLOPT_URL => "https://devapi.thecurrencycloud.com/api/en/v1.0/".$token_key."/prices/market/".$ccy_pair,
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
	$ccyPair = curl_exec($ch);

	curl_close($ch);

	// $responseArray = array();
	// parse_str($response,$responseArray);
	
	echo $ccyPair;

?>