<?php

// for single transaction
 	
$gateway_token = '';
$paymentToken = '';
$process_amount = '';
$currency_code = '';

if (isset($_REQUEST['action']) ) {
	$gateway_token = isset($_REQUEST['gateway_token']) ? $_REQUEST['gateway_token'] : null;
	$payment_method_token = isset($_REQUEST['payment_method_token']) ? $_REQUEST['payment_method_token'] : null;
	$process_amount = isset($_REQUEST['process_amount']) ? $_REQUEST['process_amount'] : null;
	$currency_code = isset($_REQUEST['currency_code']) ? $_REQUEST['currency_code'] : null;
};

$apiLogin = '8swOjWN7iUOAozk0w0tj9gvMBY8';
$apiSecret = 'wSC5Xo2cyeyPCbLQgcR9U9eGyq2J1VG5Ig4uKhBiLd17dAfTcd4YLwIEE4q7DK8m';

$qstring = array(
    'payment_method_token'=> $payment_method_token,
	'process_amount'=> $process_amount,
	'currency_code'=> $currency_code
);

$url = 'https://core.spreedly.com/v1/gateways/'.$gateway_token.'/purchase.xml';

// $url = 'https://core.spreedly.com/v1/transactions.xml';
//'https://spreedlycore.com/v1/payment_methods/' . $paymentToken . '/retain.xml';
 
//  Initiate curl_close(ch)
$ch = curl_init();
curl_setopt($ch, CURLOPT_USERPWD, $apiLogin . ':' . $apiSecret);
// Disable SSL verification
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
// Will return the response, if false it print the response
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
// Set the url
curl_setopt($ch, CURLOPT_URL,$url);
// Execute
$processPaymentstr=curl_exec($ch);
// Closing
curl_close($ch);

$processPayment = trim($processPaymentstr);

print_r($processPayment);

?>