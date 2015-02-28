/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

ctrls.controller('videoplayCtrl', function($scope, $http, $ionicLoading, $rootScope) {
    $rootScope.title = $rootScope.videoName;
    $('iframe').attr('src','http://www.youtube.com/embed/'+$rootScope.videoId);
});
