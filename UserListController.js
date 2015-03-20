var weasleyNGApp = weasleyNGApp || angular.module('WeasleyNG');

weasleyNGApp.controller('UserListController', function($scope, $http) {

    $scope.users = [];

    $http.get("http://mail.nextgened.com/weasley/users.json").success(function(usersFromServer) {
        console.log("Received usersFromServer: " + usersFromServer.length);
        $scope.users = usersFromServer;
    });

});