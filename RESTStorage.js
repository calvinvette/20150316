var toBeSynced = [];

$(document).ready(function() {

    $(document).on("UserRegisteredEvent", function(evt, data) {
        if (navigator.onLine) {
            console.log("Sent a copy to REST Server of URE: " + data);  
        } else {
            toBeSynced.push(data);
        }
    });        

    $(window).on("online", function(evt) {
      console.log("Impulse power is restored.");
      for (var i in toBeSynced) {
          console.log("Sent a copy to REST Server of URE: " + toBeSynced[i]); 
          // To be safe, splice out the User we just posted to the REST server
      }
      toBeSynced = [];
    });

    $(window).on("offline", function(evt) {
      console.log("The mains are offline, Captain.");
    });

});


// From Register.js:
// $(document).trigger($.Event("UserRegisteredEvent"), myUser); 