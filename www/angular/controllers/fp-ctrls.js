/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


ctrls.controller('fpCtrl', function($scope, $http, lafResource, $rootScope, $ionicPopup) {
    $scope.isCollapsed = true;
    $scope.loading = false;

    $scope.user = {};
    $scope.messageBoard = 'Enter your e-mail address below to reset your password.';

    $scope.forgetToken = function() {
        $scope.loading = true;
        $http.get(lafResource + '/resetPassword/' + $scope.user.email).success(function(resp) {
//                    $scope.alerts = [{msg: resp.code, msg: resp.msg}];
            $scope.loading = false;
            if (resp.code === 0) {
                $scope.isCollapsed = false;
                $scope.messageBoard = 'Enter passcode sent to your email';
                $ionicPopup.alert({
                    title: 'Reset Password',
                    template: 'Enter passcode sent to your email'
                });
            }
        }).error(function(r) {
            console.log(r);
            $scope.loading = false;
//            $scope.isCollapsed = false;
            $ionicPopup.alert({
                title: 'Connection Error',
                template: 'An error occurred'
            });
        });
    };

    $scope.resetPassword = function() {
        if (confirm('reset password?') === false)
            return;
        $scope.loading = true;
        $http.post('regPath' + '/password/reset', $scope.User).success(function(resp) {
            $scope.loading = false;
//                    $scope.alerts = services.buildAlerts([{code: resp.code, msg: resp.msg}]);
            if (resp.code === 0)
                $scope.isCollapsed = true;
        });
    };

});
