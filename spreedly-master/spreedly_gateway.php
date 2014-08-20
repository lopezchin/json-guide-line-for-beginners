<?php

	$qstring = array(
		'environment_key' => '8swOjWN7iUOAozk0w0tj9gvMBY8',
		'access_token' => 'v284VsNfRilR8LP4zeyqlYn6cnG69WeJZUi4Jit3u7JXtMvtkkxOlI6rep4NGwTA'
		
		// $apiLogin = 'EMEvbbib9rlMhq2EDOJawI73dnk',
		// $apiSecret = 'Z5f98Julb4ZFxC1j1djy4NND1UcQZKt9Xb3hbZHF72gtfhTu35a2IjEiCOPSCx1L'

	);
	 //cURL settings
    $curlOptions = array (
        CURLOPT_URL => "https://core.spreedly.com/v1/gateways.xml",
        CURLOPT_VERBOSE => 1,
        CURLOPT_RETURNTRANSFER => 1,
        CURLOPT_POST => 1,
        CURLOPT_POSTFIELDS => $qstring
    );

	$ch = curl_init();
	curl_setopt_array($ch, $curlOptions);
	
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE); 
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE); 


	//Sending our request - $response will hold the API response
	$xml_respond = curl_exec($ch);

	curl_close($ch);

	// $responseArray = array();
	// parse_str($response,$responseArray);
	
	// echo $xml_respond;

	$xml = trim($xml_respond);

	print_r($xml);

?>