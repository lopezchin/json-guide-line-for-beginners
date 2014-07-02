<?php

	$qstring = array(
		'environmentKey' => '8swOjWN7iUOAozk0w0tj9gvMBY8',
		'SigningSecret' => 'hpJZL6wsf1I4fotf61bpMiomyxUF3I2SadNGf5GbnoCfsl4jzN1Ps5eQ09e94CbC'
	);
	 //cURL settings
    $curlOptions = array (
        CURLOPT_URL => "https://core.spreedly.com/v1/gateways/Au93n8EJGRnukoU5MNG7270mMJc.xml",
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
	$xml_respond = curl_exec($ch);

	curl_close($ch);

	// $responseArray = array();
	// parse_str($response,$responseArray);
	
	echo $xml_respond;

?>
