<?php

	$trade_id = '';

	if (isset($_REQUEST['action']) ) {

		$trade_id = isset($_REQUEST['tradeID']) ? $_REQUEST['tradeID'] : null;
		
	};

	$qstring = array(
	    'deal_ref' => $trade_id,
		'trade_dom_id' => 'undefined',
		'trade_index' => 'undefined'
	);
	 //cURL settings
    $curlOptions = array (
        CURLOPT_URL => "https://clientdemo.thecurrencycloud.com/proxy/transactron/confirm_funds_sent",
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
	$send_fund = curl_exec($ch);

	curl_close($ch);

	// $responseArray = array();
	// parse_str($response,$responseArray);
	
	echo $send_fund;

?>
