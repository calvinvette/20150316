$(document).ready(function() {
// From Register.js:
// $(document).trigger($.Event("UserRegisteredEvent"), myUser); 
    $(document).on("UserRegisteredEvent", function(evt, data) {
       window.localStorage.setItem("user", JSON.stringify(data));  
    });
});

function getUsers() {
    var stringLocalUsers = window.localStorage.getItem("users");
    var localUsers;
    if (stringLocalUsers && stringLocalUsers != "undefined") {
        localUsers = JSON.parse(stringLocalUsers);    
    }
    if (localUsers) {
        return localUsers;
    } else {
        return [];
    }
}

function saveUsers(users) {
    window.localStorage.setItem("users", JSON.stringify(users));
}

var weasleyNGApp = weasleyNGApp || angular.module('WeasleyNG');

weasleyNGApp.service('UserLocalStorageService', function() {
    this.saveUsers = saveUsers;
    this.getUsers = getUsers;
});