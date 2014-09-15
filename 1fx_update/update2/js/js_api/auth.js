$.ajax({
  type: "POST",
  // url: "http://1fx.philwebservicesdev.com/TCC/auth.php",
  url: "http://192.168.1.70/TCC/auth.php",
  dataType: "json",
  success: function(result) {
    console.log(result);
    console.log('status = '+result.status);
    

    if (result.status == "success") {
        var tokenKey = result.token_id;
        var email = result.email;
        
        document.getElementById('token').value = tokenKey;
        document.getElementById('email').value = email;

    } else {
        var red = result.redirect;
        
        window.location = red;
    }
  }
});

$("#logout").click(function (e) {
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "http://192.168.1.70/controller/logout.php",
      dataType: "json",
      data:{
        'logging_out': 'logout',
        '_token': "",
        'action': 'logout_app'
      },
      success: function(result) {

        if(result.status === 'logout'){
            alert("Thanks for using 1FX Mobile Wallet.");
            window.location = result.redirect;
        } else {
            // window.redirect = result.redirect;
        }
      }
    });
    // logout();
});// logout ajax
  