/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var app = angular.module('ionicApp', ['ionic', 'controllers', 'InputMatch', 'ui.bootstrap'])
        .constant('lafResource', 'http://54.186.163.242:8080/laf-1.0/web/lafresource');

var ctrls = angular.module('controllers', []);

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.
            state('login', {
                url: '/login',
                templateUrl: 'login.html',
                controller: 'loginCtrl',
                data: {title: 'Login'}
            }).
            state('signup', {
                url: '/signup',
                templateUrl: 'signup.html',
                controller: 'signupCtrl',
                data: {title: 'Create Account'}
            }).
            state('forgotp', {
                url: '/forgotp',
                templateUrl: 'views/forgot-password.html',
                controller: 'fpCtrl',
                data: {title: 'Forgot Password'}
            }).
            state('signupcomplete', {
                templateUrl: 'signupcomplete.html',
                controller: 'signupCtrl',
                data: {title: 'Account Created'}
            })
            .state('home', {
                url: '/home',
                templateUrl: 'views/home.html',
                controller: 'homeCtrl',
                data: {title: 'LAF'}
            })
            .state('chats', {
                url: '/chats',
                templateUrl: 'views/chats.html',
                controller: 'chatsCtrl',
                data: {title: 'Chats'}
            })
            .state('videoplay', {
                url: '/videoplay',
                templateUrl: 'views/videoplay.html',
                controller: 'videoplayCtrl',
                data: {title: 'Play Video'}
            }).state('profile', {
        url: '/profile',
        templateUrl: 'views/profile.html',
        controller: 'profileCtrl',
        data: {title: 'Profile'}
    });

//    $urlRouterProvider.when('/profile','/home/jokes');
    $urlRouterProvider.otherwise('/login');

//      $locationProvider.html5Mode(true);
});

ctrls.controller('ContentController', function($scope, $ionicSideMenuDelegate) {
    $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };
});




app.run(function($rootScope, $state, $window) {
    $rootScope.navigate = function(state, params) {
        $state.go(state, params, {location: false});
    };
    $rootScope.route = function(state) {
        $state.go(state);
    };
    $rootScope.back = function() {
        $window.history.back();
    };

    $rootScope.events = [];
    $rootScope.videos = [];
    $rootScope.$on('$stateChangeStart', function(e, to) {
        $rootScope.loading = true;

//        console.log('name - ' + to.name);
    });
    $rootScope.$on('$stateChangeSuccess', function(e, to) {
        $rootScope.loading = false;
        $rootScope.title = to.data.title;
//        if(to.name === 'videoplay') $rootScope.title = $rootScope.videoName;

    });
});


//app.controller('MyCtrl', function($scope, $timeout) {
//  $scope.items = ['Item 1', 'Item 2', 'Item 3'];
//  
//  $scope.doRefresh = function() {
//    
//    console.log('Refreshing!');
//    $timeout( function() {
//      //simulate async response
//      $scope.items.push('New Item ' + Math.floor(Math.random() * 1000) + 4);
//
//      //Stop the ion-refresher from spinning
//      $scope.$broadcast('scroll.refreshComplete');
//    
//    }, 1000);
//      
//  };
//  
//});