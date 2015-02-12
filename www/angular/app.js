/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var app = angular.module('ionicApp', ['ionic', 'controllers']);

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
            })
            .state('home', {
                url: '/home',
                templateUrl: 'home.html',
                controller: 'homeCtrl',
                data: {title: 'LAF'}
            })
            .state('chats', {
                url: '/chats',
                templateUrl: 'views/chats.html',
                controller: 'chatsCtrl',
                data: {title: 'Chats'}
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

    $rootScope.alerts = [];
    $rootScope.$on('$stateChangeStart', function(e, to) {
        $rootScope.loading = true;

        console.log('name - ' + to.name);
    });
    $rootScope.$on('$stateChangeSuccess', function(e, to) {
        $rootScope.loading = false;
        $rootScope.title = to.data.title;
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