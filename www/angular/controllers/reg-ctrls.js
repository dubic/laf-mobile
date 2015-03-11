/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


ctrls.controller('loginCtrl', function($scope, $http, $ionicLoading, lafResource, $rootScope,$ionicPopup) {
    $scope.User = {};
    $scope.loginErr = false;
    $scope.login = function() {
        console.log($scope.User);
        $ionicLoading.show({template: 'Signing in...'});
        $http.post(lafResource + '/login', $scope.User).success(function(resp) {
            $ionicLoading.hide();
            $rootScope.route('home');
            $rootScope.User = resp;
            localStorage.userid = $rootScope.User.lafId;
            console.log('stored : ' + localStorage.userid);

        }).error(function(r) {
            $ionicLoading.hide();
//            console.log(r);
            $ionicPopup.alert({
                title: 'Login Error',
                template: r.message
            });
        });
    };

    $scope.testal = function() {
//        alert('wrong credentials');
    };
});
ctrls.controller('signupCtrl', function($scope, $http, $timeout, $ionicLoading, $rootScope, lafResource) {
    $scope.Reg = {};

    $scope.suc = function() {
        $rootScope.route('signupcomplete');
    };
    $scope.testAccount = function() {
        $ionicLoading.show({template: 'Creating user account...'});
        $timeout(function() {
            $ionicLoading.hide();
            console.log($scope.Reg);
            $scope.Reg = {};
        }, 1000);

    };
    $scope.createAccount = function() {
        console.log($scope.Reg);
        $ionicLoading.show({template: 'Creating user account...'});
        $http.post(lafResource + '/createUser', $scope.Reg).success(function(resp) {
            console.log(resp);
            $ionicLoading.hide();
            $scope.Reg = {};
            $rootScope.route('signupcomplete');
        }).error(function(r) {
            $ionicLoading.hide();
            $scope.alerts = [{class: 'alert-danger', msg: r.message}];
        });

    };
});
