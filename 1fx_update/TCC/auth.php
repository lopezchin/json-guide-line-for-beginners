<?php
  
  header("Content-Type: application/json");
  header("Access-Control-Allow-Origin: *");

  $data = array();

  session_start();

  $email = isset($_REQUEST['email']) ? $_REQUEST['email'] : null;

  if (isset($_REQUEST['action']) ) {

    $logged_email = isset($_REQUEST['logged_email']) ? $_REQUEST['logged_email'] : null;

  }

  // var_dump($logged_email);
  // var_dump($email);

  if(!isset($_SESSION['token_id'])){ //check session first if its set 

    $qstring = array(
      'login_id' => 'philweb.seniorprogrammer05@gmail.com',
      'api_key' => '4107a1cf7fba52e49d3257f24693078d4c10f13cf7ff1c2e74417b67fd63b103'
    );
     //cURL settings
    $curlOptions = array (
        CURLOPT_URL => "https://devapi.thecurrencycloud.com/api/en/v1.0/authentication/token/new",
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
    $response = curl_exec($ch);

    curl_close($ch);

    // $responseArray = array();
    // parse_str($response,$responseArray);
    
    // echo $response;

    $obj = json_decode($response,true);

    $_SESSION['token_id'] = $obj['data'];

    $_SESSION['email'] = $logged_email;

    // echo 'Token_key : '.$_SESSION['token_id'];

    //header('Location: http://localhost/update2/dashboard.html');
    // header('Location: http://1fx.philwebservicesdev.com/update2/dashboard.html');

    echo json_encode(array(
          'status' => 'success', 
          'token_id' => $_SESSION['token_id'], 
          'email' => $_SESSION['email'], 
          'redirect' => 'dashboard.html'
        ));

  }else if(isset($_SESSION['token_id']) && isset($_SESSION['email'])) { // check both token and email if set
    //session set so show sesssion using json_encode
    echo json_encode(array('status' => 'success', 'token_id' => $_SESSION['token_id'], 'email' => $_SESSION['email']));

  }else if(!isset($_SESSION['email'])) { // check session email if not set

    // var_dump($_SESSION); die();
    echo json_encode(array(         
      'status' => 'not_login',
      // 'redirect' => 'http://1fx.philwebservicesdev.com/controller/logout.php',
      // 'redirect' => 'http://localhost/controller/logout.php',
      'redirect' => 'http://192.168.1.41/1fx/controller/logout.php',
      'message' => "Please Login!"
    ));


  } 
  
?>

