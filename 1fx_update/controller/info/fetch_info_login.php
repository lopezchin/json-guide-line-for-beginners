<?php

  require_once($_SERVER['DOCUMENT_ROOT'].'/controller/shared/config.php');

  if (isset($_REQUEST['action']) ) {

    $email = isset($_REQUEST['email']) ? $_REQUEST['email'] : null;

  }

  $i = 0;
  $data = array();
    $sqlString = "SELECT * FROM users WHERE email = '$email'" ;

    $query = mysql_query($sqlString) or die (mysql_error()); 

    if(mysql_num_rows($query)){
      while ($row = mysql_fetch_array($query)) {
        $data['id'] = $row['id'];
        $data['fullname'] = $row['fullname'];
        $data['company'] = $row['company'];
        $data['address'] = $row['address'];
        $data['email'] = $row['email'];
        $data['avatar'] = $row['avatar'];
      }
      $data['status'] = 'success';
    }
    else{
      $data['status'] = 'failed';
    }

  /*

  $jsonData = chop($jsonData, ",");
  
  $jsonData .= '}';

  */

  echo json_encode($data);

?>