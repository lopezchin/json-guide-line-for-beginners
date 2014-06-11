<?php

	//from Local
	
	header("Content-Type: application/json");

	//BELOW CODE ARE PROVEN AND TESTED THAT RESULT WILL SHOW AND THE ITEM'S WILL BE IN JSON FORMAT
	// header('content-type: application/json; charset=utf-8');
	// header("access-control-allow-origin: *");

	$tokenKey = '';
	$account_ccy = '';
	$beneficiary_name = '';
	$back_name = '';
	$bank_address = '';
	$account_number = '';
	$sort_code = '';
	$destination_code = '';
	$beneficiary = '';
	$source = ''

	if (isset($_REQUEST['action']) ) {

		$token_key = isset($_REQUEST['tokenKey']) ? $_REQUEST['tokenKey'] : null;
		$account_ccy = isset($_REQUEST['account_ccy']) ? $_REQUEST['account_ccy'] : null;
		$beneficiary_name = isset($_REQUEST['beneficiary_name']) ? $_REQUEST['beneficiary_name'] : null;
		$back_name = isset($_REQUEST['back_name']) ? $_REQUEST['back_name'] : null;
		$bank_address = isset($_REQUEST['bank_address']) ? $_REQUEST['bank_address'] : null;
		$account_number = isset($_REQUEST['account_number']) ? $_REQUEST['account_number'] : null;
		$sort_code = isset($_REQUEST['sort_code']) ? $_REQUEST['sort_code'] : null;
		$destination_code = isset($_REQUEST['destination_code']) ? $_REQUEST['destination_code'] : null;
		$beneficiary = isset($_REQUEST['beneficiary']) ? $_REQUEST['beneficiary'] : null;
		$source = isset($_REQUEST['source']) ? $_REQUEST['source'] : null;
		
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