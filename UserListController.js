var weasleyNGApp = weasleyNGApp || angular.module('WeasleyNG');

weasleyNGApp.controller('UserListController', function($scope, UserLocalStorageService, RestStorageService) {

    $scope.users = [];

    if (UserLocalStorageService.getUsers().length > 0) {
        console.log("Using Local Users");
        $scope.users = UserLocalStorageService.getUsers();
    } else {
        console.log("Using REST Users");
        var promise = RestStorageService.getUsers();
        promise.then(function(usersFromServer) {
            console.log("Promise received data!");
            $scope.users = usersFromServer;
            UserLocalStorageService.saveUsers($scope.users);    
        });
        
    }

    
});