$(document).ready(function(){

  var currentEmail = $('#email').val();

  // alert(currentEmail);

  $.ajax({ //working
    type: 'POST',
    dataType: 'json',
    // url: 'http://1fx.philwebservicesdev.com/controller/info/fetch_info_login.php', //perfectly working
    url: 'http://192.168.1.70/controller/info/fetch_info_login.php', //perfectly working
    data: {
      'current_email': currentEmail,
      _token: "",
      action: 'fetch_data_login'
    },
    success: function(result){
      if(result.status === 'success'){
            //div name     //result_data
          $('#fullname').val(result.fullname);
          $('#eMail').val(result.email);
          $('#email_hidden').val(result.email);
          $('#company').val(result.company);
          $('#address').val(result.address);
          //Avatar icon
          $('.avatar').attr('src','http://192.168.1.70/controller/uploads/'+result.avatar);
      }
      else{
          alert('Theres an error with your sql query');
      }
    }
  });//working end of Ajax 

  $(document).on('click','#update_btn',function(e){
    e.preventDefault();

    var $form = $('form[name="update_profile"]'),
        data;
    if($form.valid()){
      var file = $form.find('input[type="file"]').val();
      // alert($form.find('input[type="file"]').val());
      data = 'avatar_icon='+file+'&'+$form.serialize();

      // alert(data); 
      ajax_updateProfile(data);
    }
  });

  $('form[name="update_profile"]').validate({
    debug: true,
    rules : {
      fullname: "required",
      company: "required",
      address: "required",
      eMail : {
        required: true,
        email :true
      }
    },
    messages : {
      fullname: "",
      company: "",
      address: "",
      eMail : {
        required : "Dont Leave blank",
        email : "Invalid Email!"
      }
    }
  });

  var ajax_updateProfile = function(data){
    $.ajax({
      url : "http://192.168.1.70/controller/info/update_info_login.php",
      type: "post",
      dataType : "json",
      data : data,
      success: function(update_info){

          if(update_info.status == "success"){
              console.log(update_info);
              document.getElementById('update_prof').innerHTML = "<div style='text-align:center;'>"+update_info.message+"</div>";
              $(".bs-example-modal-sm").modal('show');
          }else{
              document.getElementById('update_prof').innerHTML = "<div style='text-align:center;'>"+update_info.message+"</div>";
              $(".bs-example-modal-sm").modal('show');
          }
          
      },
      error: function(xhr,status){
        alert(xhr.responseText);
      }
    });
  }

  $('input[type="file"]').change(uploadFiles);
  // Variable to store your files
  var files;

  // Add events
   
  // Grab the files and set them to our variable
  /*function prepareUpload(event)
  {
    files = event.target.files;
  }*/

  function uploadFiles(event){
      var selector = event.currentTarget.attributes[1].nodeValue;
      files = event.target.files;
      event.stopPropagation(); // Stop stuff happening
      event.preventDefault(); // Totally stop stuff happening
   
      // START A LOADING SPINNER HERE
   
      // Create a formdata object and add the files
      var data = new FormData();
      $.each(files, function(key, value)
      {
          data.append(key, value);
      });
      
      $.ajax({
          url: 'http://192.168.1.70/controller/upload.php?files',
          type: 'POST',
          data: data,
          cache: false,
          dataType: 'json',
          processData: false, // Don't process the files
          contentType: false, // Set content type to false as jQuery will tell the server its a query string request
          beforeSend: function(){
              $('.avatar').attr('src','http://192.168.1.70/update2/images/ajax-loader.gif');
          },
          success: function(data, textStatus, jqXHR)
          {
              if(typeof data.error === 'undefined')
              {
                  // Success so call function to process the form
                  submitForm(event, data);
                  var url = data.raw_files;
                  url = url.toString();
                  url = url.substr(url.lastIndexOf('/') + 1);
                  setTimeout(function(){
                      $('.avatar').attr({src: 'http://192.168.1.70/controller/uploads/'+url, height : 107, width : 107});
                  },1000);
                  
                  
              }
              else
              {
                  // error handle if uploaded file is not correct
                  document.getElementById('update_prof').innerHTML = "<div style='text-align:center; color: #ff0000;'>"+data.error+"</div>";
                  $(".bs-example-modal-sm").modal('show');
              }
          },
          error: function(jqXHR, textStatus, errorThrown)
          {
              // Handle errors here
              console.log('ERRORS: ' + textStatus);
              // STOP LOADING SPINNER
          }
      });
  }

  function submitForm(event, data){
    // Create a jQuery object from the form
      $form = $(event.target);
      
      // Serialize the form data
      var formData = $form.serialize();
      
      // You should sterilise the file names
      $.each(data.files, function(key, value)
      {
          formData = formData + '&filenames[]=' + value;
      });
   
      $.ajax({
          url: 'http://192.168.1.70/controller/upload.php',
          type: 'POST',
          data: formData,
          cache: false,
          dataType: 'json',
          success: function(data, textStatus, jqXHR)
          {
              if(typeof data.error === 'undefined')
              {
                  // Success so call function to process the form
                  console.log('SUCCESS: ' + data.success);
              }
              else
              {
                  // Handle errors here
                  console.log('ERRORS: ' + data.error);
              }
          },
          beforeSend: function(){
              //
          },
          error: function(jqXHR, textStatus, errorThrown)
          {
              // Handle errors here
              console.log('ERRORS: ' + textStatus);
          },
          complete: function()
          {
              // STOP LOADING SPINNER
          }
      });
  } 
});