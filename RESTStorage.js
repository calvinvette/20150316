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

var weasleyNGApp = weasleyNGApp || angular.module('WeasleyNG');

weasleyNGApp.service('RestStorageService', function($http, $q) {
    this.saveUsers = function(users) {
        console.log("POSTING/PUTTING Users to REST Server!");
    };
    this.getUsers = function() {
       return $http.get("http://mail.nextgened.com/weasley/users.json")
            .then(function(response) {
                if (typeof response.data === 'object') { // got back a JSON object, probably an array
                    var usersFromServer = response.data;
                    console.log("Received usersFromServer: " + usersFromServer.length);
                    return usersFromServer;
                } else { // The server returned something but it was un-JSON.parse()-able
                    return $q.reject(response.data);
                }
            }, function(response) { // Something went wrong with the original request
                return $q.reject(response.data);
            });
        ;
    };
});


 


// From Register.js:
// $(document).trigger($.Event("UserRegisteredEvent"), myUser); 