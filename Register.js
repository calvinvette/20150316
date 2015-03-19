var myUser = new User();

$(document).ready(function() {

  var myBody = $("body")[0];
  var myButton = document.createElement("button"); // <button>InnerHTML</button>
  $(myButton).html("Press Me"); // Setter, overwrites the InnerHTML of the Button
  $(myButton).append(", Please"); // Appends to the existing InnerHTML (like myButton.innerHTML+=', Please')
  var contentOfButton = $(myButton).html(); // Getter
  console.log(contentOfButton);

  $(myButton).click(function(evt) {
    var myH1 = document.createElement("h1");
    $(myH1).html("Hello, DOM");
    myBody.appendChild(myH1);
  });

  $(myButton).click(function(evt) {
      console.log("clicked!");
  });

  myBody.appendChild(myButton);   

//     document.form1.userName
  bindViewToModel("userName", "userName");
  bindViewToModel("last", "lastName");
  bindViewToModel("first", "firstName");
  bindViewToModel("street", "street");
  bindViewToModel("city", "city");
  bindViewToModel("zip", "zipCode");
  bindViewToModel("ccn", "creditCard");
  bindViewToModel("mail", "email");

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

