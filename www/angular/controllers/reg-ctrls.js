/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

ctrls.controller('homeCtrl', function($scope, $http) {
    $scope.items = [
        {title:'laughing gas',icon:'ion-ios-videocam',isCompleted:true},  
        {title:'spring tutorial',icon:'ion-ios-videocam',isCompleted:false},  
        {title:'container JPA',icon:'ion-ios-videocam',isCompleted:true}  
    ];
});
ctrls.controller('loginCtrl', function($scope, $http) {

    $scope.login = function() {
        $scope.saving = true;
        console.log($scope.User);
        $http.post('http://169.254.174.94:8080/laf/web/lafresource/login', $scope.User).success(function(resp) {
            $scope.saving = false;
            console.log(resp);
        });
    };
});
ctrls.controller('signupCtrl', function($scope, $http, $timeout) {
    $scope.createAccount = function() {
        $scope.saving = true;
        $timeout(function() {
            $scope.saving = false;
            console.log($scope.Reg);
            $scope.Reg = {};
        }, 1000);

    };
});
