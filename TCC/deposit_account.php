<?php

	header('Access-Control-Allow-Origin: *');

	$trade_id = '';
	
	if (isset($_REQUEST['action']) ) {

		$token_key = isset($_REQUEST['tokenKey']) ? $_REQUEST['tokenKey'] : null;
		$trade_id = isset($_REQUEST['tradeID']) ? $_REQUEST['tradeID'] : null;
		
	};

	$qstring = array(
	    'trade_id' => $trade_id
	);

	 //cURL settings
    $curlOptions = array (
        CURLOPT_URL => "https://devapi.thecurrencycloud.com/api/en/v1.0/".$token_key."/trade/".$trade_id."/deposit_account",
        // CURLOPT_URL => "https://devapi.thecurrencycloud.com/api/en/v1.0/".$token_key."/trade/".$trade_id."/settlement_account",
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
	$depositAccount = curl_exec($ch);

	curl_close($ch);

	// $responseArray = array();
	// parse_str($response,$responseArray);
	
	echo $depositAccount;

?>
