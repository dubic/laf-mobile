/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

ctrls.controller('profileCtrl', function($scope, $http, lafResource, $ionicPopup, $ionicLoading) {
    $scope.loadProfile = function() {
        $ionicLoading.show({template: 'Loading Profile.Please wait...'});
        $http.get(lafResource + '/getUser/' + localStorage.userid).success(function(resp) {
            $ionicLoading.hide();
            $scope.user = resp;
            console.log(resp);
        }).error(function(r) {
            $ionicLoading.hide();
            $ionicPopup.alert({
                title: 'Connection Error',
                template: 'Profile could not be loaded'
            });
        });
    };

    $scope.loadProfile();



});
