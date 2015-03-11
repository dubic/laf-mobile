/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

ctrls.controller('homeCtrl', function($scope, $http, $timeout, $ionicLoading, $rootScope, lafResource) {


    $scope.videoTabbed = function() {
//        console.log('selected videos');
        if ($rootScope.videos.length === 0) {
            $rootScope.vidLimit = 10;
            $scope.loadVideos();
        }
    };
    $scope.eventTabbed = function() {
        if ($rootScope.events.length === 0) {
            $rootScope.eventLimit = 10;
            $scope.loadEvents();
        }
    };

    $scope.refreshVideos = function() {
        $rootScope.vidLimit = $rootScope.vidLimit + 5;
        $scope.loadVideos();
    };
    $scope.refreshEvents = function() {
        $rootScope.eventLimit = $rootScope.eventLimit + 5;
        $scope.loadEvents();
    };

    $scope.loadVideos = function() {
        console.log($rootScope.vidLimit);
        $ionicLoading.show({template: 'Loading Videos...'});
        $http.get(lafResource + '/lafVideos/' + $rootScope.vidLimit).success(function(r) {
            $ionicLoading.hide();
            $rootScope.videos = r.items;
        }).finally(function() {
            // Stop the ion-refresher from spinning
            $scope.$broadcast('scroll.refreshComplete');
        });
    };

    $scope.loadEvents = function() {
        $ionicLoading.show({template: 'Loading Events...'});
        $http.get(lafResource + '/events/' + $rootScope.eventLimit).success(function(r) {
            $ionicLoading.hide();
            console.log(r);
            $rootScope.events = r;
        }).finally(function() {
            // Stop the ion-refresher from spinning
            $scope.$broadcast('scroll.refreshComplete');
        });
    };
//    $scope.videos = [];

    $scope.videoUrl = 'http://www.youtube.com/embed/';

    $scope.playVideo = function(i) {
        $rootScope.videoId = $scope.videos[i].id.videoId;
        $rootScope.videoName = $scope.videos[i].snippet.title;
        $rootScope.route('videoplay');
    };

    $scope.fbshare = function(i) {
        location.href = 'https://www.facebook.com/dialog/share?app_id=87741124305&href=http%3A//www.youtube.com/attribution_link%3Fa%3D3kf2a-F7TKU%26u%3D%252Fwatch%253Fv%253D2uIUBnmWD9Y%2526feature%253Dshare&display=popup&redirect_uri=https://www.youtube.com/facebook_redirect';
//        FB.ui({
//            method: 'share',
//            href: 'https://developers.facebook.com/docs/'
//        }, function(response) {
//        });
    };


});
