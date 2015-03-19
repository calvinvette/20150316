$(document).ready(function() {
    $(document).on("UserRegisteredEvent", function(evt, data) {
       window.localStorage.setItem("user", JSON.stringify(data));  
    });
});


// From Register.js:
// $(document).trigger($.Event("UserRegisteredEvent"), myUser); 