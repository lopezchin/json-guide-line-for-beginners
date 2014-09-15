<?php

  //from Local

  // header("Content-Type: application/json");
  require_once($_SERVER['DOCUMENT_ROOT'].'/controller/shared/config.php');  

  // $email = 'philweb.seniorprogrammer05@gmail.com';

  //query email logged in

  if (isset($_REQUEST['action']) ) {

    $email = isset($_REQUEST['email']) ? $_REQUEST['email'] : null;
    $status = isset($_REQUEST['status']) ? $_REQUEST['status'] : null;

  }


  if($status == "pending"){

    $loggedInSqlString = "SELECT * FROM users WHERE email = '$email'";

    //fetch query for the email logged in
    $LoginQuery = mysql_query($loggedInSqlString) or die (mysql_error()); 
    $Loginrow = mysql_fetch_array($LoginQuery);

    // get logged in ID
    
    $loginId = $Loginrow["id"];

    $i = 0;
    $jsonData = '{';

    // query contact table using logged in email ID and compare
    $contactSQLstring = "SELECT * FROM contacts WHERE contact_id = '$loginId' AND status = 'pending'" ;

    // query contact information using while loop
    $contactQuery = mysql_query($contactSQLstring) or die (mysql_error()); 
    while ($contactRow = mysql_fetch_array($contactQuery)) {

      // get all contact_id's for the one unique user_id
      $sqlString = "SELECT * FROM users WHERE id = '".$contactRow["user_id"]."'" ;

      $query = mysql_query($sqlString) or die (mysql_error()); 
      while ($row = mysql_fetch_array($query)) {
        $i++;
        $id = $row["id"]; 
        $fullname = $row["fullname"];
        $company  = $row["company"];
        $address  = $row["address"];
        $email  = $row["email"];
        $avatar = $row["avatar"];
        $request_status = $contactRow["status"];
        $status = true;
        $jsonData .= '"contact'.$i.'":{ "id":"'.$id.'","fullname":"'.$fullname.'", "company":"'.$company.'",  "address":"'.$address.'", "email":"'.$email.'", "avatar":"'.$avatar.'", "request_status":"requesting" },';
      }
    }


    $jsonData = chop($jsonData, ",");
    

    $jsonData .= '}';

    echo $jsonData;

  }else if($status == "requesting"){

    $loggedInSqlString = "SELECT * FROM users WHERE email = '$email'";

    //fetch query for the email logged in
    $LoginQuery = mysql_query($loggedInSqlString) or die (mysql_error()); 
    $Loginrow = mysql_fetch_array($LoginQuery);

    // get logged in ID
    
    $loginId = $Loginrow["id"];

    $i = 0;
    $jsonData = '{';

    // query contact table using logged in email ID and compare
    $contactSQLstring = "SELECT * FROM contacts WHERE user_id = '$loginId' AND status = 'pending'" ;

    // query contact information using while loop
    $contactQuery = mysql_query($contactSQLstring) or die (mysql_error()); 
    while ($contactRow = mysql_fetch_array($contactQuery)) {

      // get all contact_id's for the one unique user_id
      $sqlString = "SELECT * FROM users WHERE id = '".$contactRow["contact_id"]."'" ;

      $query = mysql_query($sqlString) or die (mysql_error()); 
      while ($row = mysql_fetch_array($query)) {
        $i++;
        $id = $row["id"]; 
        $fullname = $row["fullname"];
        $company  = $row["company"];
        $address  = $row["address"];
        $email  = $row["email"];
        $avatar = $row["avatar"];
        $request_status = $contactRow["status"];
        $status = true;
        $jsonData .= '"contact'.$i.'":{ "id":"'.$id.'","fullname":"'.$fullname.'", "company":"'.$company.'",  "address":"'.$address.'", "email":"'.$email.'", "avatar":"'.$avatar.'", "request_status":"'.$request_status.'" },';
      }
    }


    $jsonData = chop($jsonData, ",");
    

    $jsonData .= '}';

    echo $jsonData;

  }else{

    $loggedInSqlString = "SELECT * FROM users WHERE email = '$email'";

    //fetch query for the email logged in
    $LoginQuery = mysql_query($loggedInSqlString) or die (mysql_error()); 
    $Loginrow = mysql_fetch_array($LoginQuery);

    // get logged in ID
    
    $loginId = $Loginrow["id"];

    $i = 0;
    $jsonData = '{';

    // query contact table using logged in email ID and compare
    $contactSQLstring = "SELECT * FROM contacts WHERE user_id = '$loginId' AND status = 'friend'" ;

    // query contact information using while loop
    $contactQuery = mysql_query($contactSQLstring) or die (mysql_error()); 
    while ($contactRow = mysql_fetch_array($contactQuery)) {

      // get all contact_id's for the one unique user_id
      $sqlString = "SELECT * FROM users WHERE id = '".$contactRow["contact_id"]."'" ;

      $query = mysql_query($sqlString) or die (mysql_error()); 
      while ($row = mysql_fetch_array($query)) {
        $i++;
        $id = $row["id"]; 
        $fullname = $row["fullname"];
        $company  = $row["company"];
        $address  = $row["address"];
        $email  = $row["email"];
        $avatar = $row["avatar"];
        $request_status = $contactRow["status"];
        $status = true;
        $jsonData .= '"contact'.$i.'":{ "id":"'.$id.'","fullname":"'.$fullname.'", "company":"'.$company.'",  "address":"'.$address.'", "email":"'.$email.'", "avatar":"'.$avatar.'", "request_status":"'.$request_status.'" },';
      }
    }


    $jsonData = chop($jsonData, ",");
    

    $jsonData .= '}';

    echo $jsonData;

  }

?>