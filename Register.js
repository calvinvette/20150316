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
  $("input[name='userName']").on("keydown", function(evt) {
      var theChar = (evt.keyCode) ? evt.keyCode : evt.which;
      console.log("Key down: " + String.fromCharCode(theChar));
  });


  $("input[name='last']").on("change", function(evt) {
    var lastNameValid = this.checkValidity();
    if (lastNameValid) {
      myUser.setLastName($(this).val());       
    } else {
      console.log("LastName Invalid");
    }
  });
    

  $("#form1").submit(function(evt) {
      this.noValidate = true;
      var userNameValid = $(this).find("input[name='userName']")[0].checkValidity();
      var firstNameValid = $(this).find("input[name='first']")[0].checkValidity();
      var zipCodeValid = $(this).find("input[name='zip']")[0].checkValidity();
      var isValid = userNameValid && firstNameValid && lastNameValid && zipCodeValid;

      var userName = $(this).find("input[name='userName']").val();
      var firstName = $(this).find("input[name='first']").val();
      //var lastName = $(this).find("input[name='last']").val();
      var email = $(this).find("input[name='mail']").val();
      var city = $(this).find("input[name='city']").val();
      var street = $(this).find("input[name='street']").val();
      var zipCode = $(this).find("input[name='zip']").val();
//       var creditCard = $(this).find("input[name='ccn']").val();


      //var myUser = new User(userName, firstName, lastName, email);
      myUser.setStreet(street);
      myUser.setCity(city);
      myUser.setZipCode(zipCode);
//       myUser.setCreditCard(creditCard);
      myUser.setCreditCard($(this).find("input[name='ccn']").val());

      if (isValid) {
        // Tightly coupled - change this to EDA later!!!
        //window.localStorage.setItem("user", JSON.stringify(myUser));    
        //document.dispatch(new Event("UserRegisteredEvent", myUser));  
        $(document).trigger($.Event("UserRegisteredEvent"), myUser); 
        clearForm(); 
      } else {
          console.log("Invalid User!");
      }
      
      return false; // AJAX/SPA Apps don't do normal full-page submission
  });

});


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

