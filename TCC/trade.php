<?php

	//from Local
	
	header("Content-Type: application/json");

	//BELOW CODE ARE PROVEN AND TESTED THAT RESULT WILL SHOW AND THE ITEM'S WILL BE IN JSON FORMAT
	// header('content-type: application/json; charset=utf-8');
	// header("access-control-allow-origin: *");

	// 'token_key': token_key,
	// 'buyCurrency': buy_currency,
	// 'sellCurrency': sell_currency,
	// 'amount': amount,
	// 'side': side,
	// 'termAgreement': term_agreement,
	// 'reason': reason,
	// '_token': "",
	// 'action': 'trade'
	$token_key = '';
	$buyCurrency = '';
	$sellCurrency = '';
	$amount = '';
	$side = '';
	$termAgreement = '';
	$reason = '';

	if (isset($_REQUEST['action']) ) {

		$token_key = isset($_REQUEST['tokenKey']) ? $_REQUEST['tokenKey'] : null;
		$buyCurrency = isset($_REQUEST['buyCurrency']) ? $_REQUEST['buyCurrency'] : null;
		$sellCurrency = isset($_REQUEST['sellCurrency']) ? $_REQUEST['sellCurrency'] : null;
		$amount = isset($_REQUEST['amount']) ? $_REQUEST['amount'] : null;
		$side = isset($_REQUEST['side']) ? $_REQUEST['side'] : null;
		$termAgreement = isset($_REQUEST['termAgreement']) ? $_REQUEST['termAgreement'] : null;
		$reason = isset($_REQUEST['reason']) ? $_REQUEST['reason'] : null;
		
	}

	// var_dump('value = '.$token_key.'<br/>'.$buyCurrency.'<br/>'.$sellCurrency.'<br/>'.$amount.'<br/>'.$side.'<br/>'.$termAgreement.'<br/>'.$reason);
		
	$qstring = array(
	    'buy_currency'=> $buyCurrency,
		'sell_currency'=> $sellCurrency,
		'amount'=> $amount,
		'side'=>$side,
		'term_agreement'=> $termAgreement,
		'reason'=> $reason
	);
	
	 //cURL settings
    $curlOptions = array (
        // CURLOPT_URL => "https://devapi.thecurrencycloud.com/api/en/v1.0/".$token."/trade/execute",
        CURLOPT_URL => "https://devapi.thecurrencycloud.com/api/en/v1.0/".$token_key."/trade/execute",
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
	$trade = curl_exec($ch);

	curl_close($ch);

	// $responseArray = array();
	// parse_str($response,$responseArray);
	
	echo $trade;

?>