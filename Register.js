var myUser = new User();
var users = [];


$(document).ready(function() {

  var myBody = $("body")[0];
  var myButton = document.createElement("button");
  $(myButton).html("Get Users");

  $(myButton).click(function(evt) {
//     $.ajax({url: 'users.json', method : 'GET'}, function(data, status, xhr) {
//       users = data; // (data should be auto-JSON.parsed if the server reports mime-type of application/json)
//     });
    $.getJSON("http://mail.nextgened.com/weasley/users.json", function(data) {
      users = data;
      console.log("Users Downloaded");
    });
  });

  $(myButton).click(function(evt) {
      console.log("clicked!");
  });

  $(document).on("UserChanged", function(evt, data) {
    console.log(data.user.firstName + " changed their " + data.field);
    if (data.field == "lastName") {
      $("input[name='last']").val(data.user.getLastName());
    }
  });

  myBody.appendChild(myButton);   

//     document.form1.userName
//   bindViewToModel("userName");
//   bindViewToModel("last", "lastName");
//   bindViewToModel("first", "firstName");
//   bindViewToModel("street");
//   bindViewToModel("city");
//   bindViewToModel("zip", "zipCode");
//   bindViewToModel("ccn", "creditCard");
//   bindViewToModel("mail", "email");
  $.each($("form"), function(idx, frm) {
    $.each($(this).find("input"), function(idx, inputField) {

      var bindTo = $(this).attr("bindTo");
      if (bindTo) {
        var fieldName = $(this).attr("name");
        bindViewToModel(fieldName, bindTo);        
      }
    });
  });


  $("#form1").submit(function(evt) {
      this.noValidate = true;
      //var isValid = ...
      //if (isValid) { double-check holistic validity of the myUser object
      if (true) {  
        $(document).trigger($.Event("UserRegisteredEvent"), myUser); 
        clearForm(); 
      } else {
          console.log("Invalid User!");
      }
      
      return false; // AJAX/SPA Apps don't do normal full-page submission
  });

});

function bindViewToModel(fieldName, propertyName) {
  if (!propertyName) {
    propertyName = fieldName;
  }
  $("input[name='" + fieldName + "']").on("change", function(evt) {
    var fieldValid = this.checkValidity();
    if (fieldValid) {
      myUser[propertyName] = $(this).val();       
    } else {
      console.log(propertyName + " Invalid");
    }
  });
}

function clearForm() {
  $("input[name='userName']").val("");
  $("input[name='first']").val("");
  $("input[name='last']").val("");
  $("input[name='mail']").val("");
  $("input[name='city']").val("");
  $("input[name='street']").val("");
  $("input[name='zip']").val("");
  $("input[name='ccn']").val("");  
}

