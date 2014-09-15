$(document).on('click','#btnSubmit',function(e){
  e.preventDefault();

  var $form = $('form[name="signup"]'),
      data;
  if($form.valid()){
    data = $form.serialize();

    // alert(data); //
    ajax(data);
  }
});
//event handler for submit button
$('form[name="signup"]').validate({
  debug: true,
  rules : {
    fullname : "required",
    companyname : "required",
    address : "required",
    email : {
      required: true,
      email :true,
      remote : {
        // url: "http://localhost/controller/validate.php",
        url: "http://192.168.1.70/controller/validate.php",
          type: "post",
          data: {
            email: function() {
            return $( "#email" ).val();
          }
        }
      }
    },
    password : "required",
    confirm : {
      required: true,
      equalTo: "#password"
    }
  },
  messages : {
    fullname : "",
    companyname : "",
    address : "",
    email : {
      required : "",
      email : "",
      remote : "Email already exists"
    },
    password: "",
    confirm : {
      required : "",
      equalTo : "Passwords do not match"
    }
  }
});

var ajax = function(data){
  $.ajax({
    url : "http://192.168.1.70/controller/data_inserter.php",
    type: "post",
    dataType : "json",
    data : data,
    success: function(result){
      if(result.status == 'success'){
        // console.log(result);
        window.location = result.redirect;
      }
      else{
        alert(result.status)
      }
    },
    error: function(xhr,status){
      alert(xhr.responseText);
    }
  });
}