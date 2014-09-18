<?php

	$qstring = array(
		'environmentKey' => '8swOjWN7iUOAozk0w0tj9gvMBY8',
		'SigningSecret' => 'wSC5Xo2cyeyPCbLQgcR9U9eGyq2J1VG5Ig4uKhBiLd17dAfTcd4YLwIEE4q7DK8m'
	);
	 //cURL settings
    $curlOptions = array (
        CURLOPT_URL => "https://core.spreedly.com/v1/gateways/NBnYYNnA8Tqc8iBrpkvJQI2YORD.xml",
        CURLOPT_VERBOSE => 1,
        CURLOPT_RETURNTRANSFER => 1,
        CURLOPT_POST => 1,
        CURLOPT_POSTFIELDS => $qstring
    );

	$ch = curl_init();
	curl_setopt($ch, CURLOPT_USERPWD, $qstring);
	
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
