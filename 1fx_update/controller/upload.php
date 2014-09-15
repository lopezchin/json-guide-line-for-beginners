<?php // You need to add server side validation and better error handling here
 
$data = array();
 
if(isset($_GET['files']))
{  
  $error = false;
  $files = array();
  $raw_files = array();
  $path = $_FILES[0]['name'];
  $ext = pathinfo($path, PATHINFO_EXTENSION);
  $allowedtypes = ['jpg','jpeg','gif','png'];

  $uploaddir = './uploads/';
  if(in_array($ext, $allowedtypes)){
    foreach($_FILES as $file)
    {
      if(move_uploaded_file($file['tmp_name'], $uploaddir .basename($file['name'])))
      {
        $raw_files[] = $uploaddir .$file['name'];
        $files[] = chmod($uploaddir .$file['name'], 0777);
      }
      else
      {
          $error = true;
      }
    }
    $data = ($error) ? array('error' => 'There was an error uploading your files') : array('files' => $files, 'raw_files' => $raw_files);
  }
  else{
    $data =  array('error' => 'The file you are attempting to upload is not allowed.');
  }

}
else
{

  $data = array('success' => 'Form was submitted', 'formData' => $_POST);
}
 
echo json_encode($data);
 
?>