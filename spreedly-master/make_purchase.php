<?php

// for single transaction

$gatewayToken = '';
$payment_token = '';
$mount = '';
$currencyCode = '';


if (isset($_REQUEST['action']) ) {
	$gatewayToken = isset($_REQUEST['gatewayToken']) ? $_REQUEST['gatewayToken'] : null;
	$payment_token = isset($_REQUEST['processToken']) ? $_REQUEST['processToken'] : null;
	$mount = isset($_REQUEST['processAmount']) ? $_REQUEST['processAmount'] : null;
	$currencyCode = isset($_REQUEST['currencyCode']) ? $_REQUEST['currencyCode'] : null;
};

$apiLogin = '8swOjWN7iUOAozk0w0tj9gvMBY8';
$apiSecret = 'v284VsNfRilR8LP4zeyqlYn6cnG69WeJZUi4Jit3u7JXtMvtkkxOlI6rep4NGwTA';

$xml_data ='<transaction>
        <payment_method_token>'.$payment_token.'</payment_method_token>
        <amount>'.$mount.'</amount>
        <currency_code>'.$currencyCode.'</currency_code>
    </transaction>';
 
 
$URL = "https://core.spreedly.com/v1/gateways/".$gatewayToken."/purchase.xml";
 
$ch = curl_init($URL);
curl_setopt($ch, CURLOPT_USERPWD, $apiLogin . ':' . $apiSecret);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: text/xml'));
curl_setopt($ch, CURLOPT_POSTFIELDS, "$xml_data");
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
$output = curl_exec($ch);
curl_close($ch);

print_r($output);

?>