<!DOCTYPE html>
<html>
<head>
  <title></title>
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
</head>
<style type="text/css">
  input{
    margin: 5px 0;
  }

  .result_contact{
        padding: 5px 0;
        border-bottom: 1px solid #ddd;
      }
</style>

<script type="text/javascript">

  $(document).ready(function () {
    //event handler for submit button
  	
    $(".delete_contact").click(function(){

      var contactid = $(this).data('contactid');

      alert('Deleting userID = '+contactid);
      // console.log(contactid);
      // $.ajax({
      //   type: 'POST',
      //   url: 'http://localhost/JSON_beginner/contacts/contact_delete_data.php',
      //   data: {
      //     'contactid': contactid,
      //     '_token': "",
      //     'action': 'delete_contact'
      //   }
      // });
    });


    $("#insertData").click(function () {
        //collect userName and password entered by users
        var fullname = $("#fullname").val();
        var address = $("#address").val();
        var email = $("#email").val();
        var phone_number = $("#phone_number").val();

        // var contact_validation = Array(fullname, address, email, phone_number);

        // console.log(contact_validation);

        // alert('Success: '+fullname+ '/' +address+ '/' +email+ '/' +phone_number);
        insertContact(fullname, address, email, phone_number);
       
    });

  });

  function insertContact(fullname, address, email, phone_number){
    var msg="";
      $.ajax({
        type: 'POST',
        dataType: 'json',
        url: 'http://localhost/JSON_beginner/contacts/contact_insert_data.php', //perfectly working
        // url: 'http://1fx.philwebservicesdev.com/data_fetching.php',
        data: {
          'fullname': fullname,
          'address': address,
          'email': email,
          'phone_number': phone_number,
          '_token': "",
          'action': 'contact_inserter'
        },

        success: function(contact_detail) {


          // console.log(contact_detail);
          if (typeof contact_detail !== 'object') {
            contact_detail = jQuery.parseJSON(contact_detail);
          }

          //if contact_detail is success
          if (contact_detail.status == "success") {
            msg = contact_detail.message; 
            document.getElementById("result").innerHTML = msg;
            
          } else {
            msg = contact_detail.message;
            document.getElementById("result").innerHTML = msg;
          }

          // if contact_detail is undefiened
          if (typeof contact_detail.redirect !== 'undefined') {
            window.location = contact_detail.redirect;
          }
        }
        
      });   
  }

</script>

<body>

<div id="result"></div>
<!-- form for fetching value's -->
<div id="contactForm">
  <input type="text" name="fullname" id="fullname" class="text" placeholder="Fullname"/>
  <br />
  <input type="text" name="address" id="address" class="text" placeholder="Address"/>
  <br />
  <input type="text" name="email" id="email" class="text" placeholder="Email"/>
  <br />
  <input type="text" name="phone_number" id="phone_number" class="text" placeholder="Phone Number"/>
  <br />
  <input type="submit" name="insertData" id="insertData" value="Insert Contact" />
</div>
<hr>
<?php

  //from Local

  // header("Content-Type: application/json");

  $host = "localhost";
  $user = "root";
  $password = "";
  $database = "wwwphilw_1fx";

  $con = mysql_connect($host, $user, $password) or die("Could not connect: ". mysql_error());

  mysql_select_db($database) or die("Could not connect to database: ". mysql_error());

  $sqlString = "SELECT * FROM contacts"; //fetch compared database

  //inserting data // INSERT INTO `wwwphilw_1fx`.`contacts` (`id`, `fullname`, `address`, `email`, `phone_number`) VALUES (NULL, 'John Wayne Jose', 'New Jersey', 'philweb.seniorprogrammer05@gmail.com', '222 222-2222');

  //delete // DELETE FROM `wwwphilw_1fx`.`contacts` WHERE `contacts`.`id` = 4 LIMIT 1;

  $query = mysql_query($sqlString); 

  while ($row = mysql_fetch_array($query)) { ?>

    <div class="result_contact"><?php echo "<b>id:</b>".$row['id']." <b>fullname:</b>".$row['fullname']." <b>address:</b>".$row['address']." <b>email:</b>".$row['email']." <b>phone_number:</b>".$row['phone_number']; ?>
      <br><a href="" class="delete_contact" data-contactid="<?php echo $row['id']; ?>" >delete</a>
    </div>

<?php } ?>



</body>
</html>