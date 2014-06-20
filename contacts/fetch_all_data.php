<?php

  //from Local

  // header("Content-Type: application/json");

  $host = "localhost";
  $user = "root";
  $password = "";
  $database = "wwwphilw_1fx";

  $con = mysql_connect($host, $user, $password) or die("Could not connect: ". mysql_error());
  
  mysql_select_db($database) or die("Could not connect to database: ". mysql_error());

  $i = 0;
  $jsonData = '{';

    $sqlString = "SELECT * FROM contacts" ;
    $query = mysql_query($sqlString) or die (mysql_error()); 
    while ($row = mysql_fetch_array($query)) {
      $i++;
      $id = $row["id"]; 
      $fullname = $row["fullname"];
      $address  = $row["address"];
      $email  = $row["email"];
      $phone_number  = $row["phone_number"];
      $status = true;
      $jsonData .= '"contact'.$i.'":{ "id":"'.$id.'","fullname":"'.$fullname.'", "address":"'.$address.'", "email":"'.$email.'", "phone":"'.$phone_number.'" },';
    }


  $jsonData = chop($jsonData, ",");
  

  $jsonData .= '}';

  echo $jsonData;

  
?>
