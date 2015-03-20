var weasleyNGApp = weasleyNGApp || angular.module('WeasleyNG');

weasleyNGApp.controller('RegisterNGController', function($scope) {
    $scope.myUser = new User();
    $scope.pressMe = function() {
        console.log("The button was pressed.");
        if ($scope.isUserVisible) {
            $scope.isUserVisible = false;
            $("#btnPressMe").html("Show User");
        } else {
            $scope.isUserVisible = true;
            $("#btnPressMe").html("Hide User");
        }
        
    };
    $scope.isUserVisible = false;

});
