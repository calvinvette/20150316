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

  $("#form1").submit(function(evt) {
      this.noValidate = true; // Disable built-in validation
      var userNameValid = $(this).find("input[name='userName']")[0].checkValidity();
      var firstNameValid = $(this).find("input[name='first']")[0].checkValidity();
      var lastNameValid = $(this).find("input[name='last']")[0].checkValidity();
      var zipCodeValid = $(this).find("input[name='zip']")[0].checkValidity();
      //return userNameValid && firstNameValid && lastNameValid && zipCodeValid;
      console.log("User Name Valid:\t" + userNameValid);
      console.log("First Name Valid:\t" + firstNameValid);
      console.log("Last Name Valid:\t" + lastNameValid);
      console.log("Zip Code Valid:\t" + zipCodeValid);
      return false;
  });

    $(window).on("online", function(evt) {
      console.log("Impulse power is restored.");
    });

    $(window).on("offline", function(evt) {
      console.log("The mains are offline, Captain.");
    });


});