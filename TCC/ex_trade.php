<?php

	//from Local
	
	header("Content-Type: application/json");

	//BELOW CODE ARE PROVEN AND TESTED THAT RESULT WILL SHOW AND THE ITEM'S WILL BE IN JSON FORMAT
	// header('content-type: application/json; charset=utf-8');
	// header("access-control-allow-origin: *");

	$tokenKey = "";
    $ex_amount = "";
    $ex_ben = "";
    $ex_buy_currency = "";
    $ex_side = "";
    $ex_payment_reference = "";
    $ex_payment_type = "";
    $ex_reason = "";
    $ex_sell_currency = "";
    $ex_term_agreement = "";
    $ex_contact_ref = "";


	if (isset($_REQUEST['action']) ) {

		$token_key = isset($_REQUEST['tokenKey']) ? $_REQUEST['tokenKey'] : null;
		$ex_amount = isset($_REQUEST['ex_amount']) ? $_REQUEST['ex_amount'] : null;
		$ex_ben = isset($_REQUEST['ex_ben']) ? $_REQUEST['ex_ben'] : null;
		$ex_buy_currency = isset($_REQUEST['ex_buy_currency']) ? $_REQUEST['ex_buy_currency'] : null;
		$ex_side = isset($_REQUEST['ex_side']) ? $_REQUEST['ex_side'] : null;
		$ex_payment_reference = isset($_REQUEST['ex_payment_reference']) ? $_REQUEST['ex_payment_reference'] : null;
		$ex_payment_type = isset($_REQUEST['ex_payment_type']) ? $_REQUEST['ex_payment_type'] : null;
		$ex_reason = isset($_REQUEST['ex_reason']) ? $_REQUEST['ex_reason'] : null;
		$ex_sell_currency = isset($_REQUEST['ex_sell_currency']) ? $_REQUEST['ex_sell_currency'] : null;
		$ex_side = isset($_REQUEST['ex_side']) ? $_REQUEST['ex_side'] : null;
		$ex_term_agreement = isset($_REQUEST['ex_term_agreement']) ? $_REQUEST['ex_term_agreement'] : null;
		$ex_contact_ref = isset($_REQUEST['ex_contact_ref']) ? $_REQUEST['ex_contact_ref'] : null;
		
	}

	// var_dump('value = '.$token_key.'<br/>'.$buyCurrency.'<br/>'.$sellCurrency.'<br/>'.$amount.'<br/>'.$side.'<br/>'.$termAgreement.'<br/>'.$reason);
		
	$qstring = array(
	    'amount'=> $ex_amount,
		'beneficiary_id'=> $ex_ben,
		'buy_currency'=> $ex_buy_currency,
		'payment_reference'=>$ex_payment_reference,
		'payment_type'=>$ex_payment_type,
		'reason'=>$ex_reason,
		'sell_currency'=>$ex_sell_currency,
		'side'=> $ex_side,
		'term_agreement'=> $ex_term_agreement,
		'your_contact_ref'=> $ex_contact_ref
	);
	
	 //cURL settings
    $curlOptions = array (
        CURLOPT_URL => "https://devapi.thecurrencycloud.com/api/en/v1.0/".$token_key."/trade/execute_with_payment",
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
	$ex_trade = curl_exec($ch);

	curl_close($ch);

	// $responseArray = array();
	// parse_str($response,$responseArray);
	
	echo $ex_trade;

?>