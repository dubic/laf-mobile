/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

ctrls.controller('chatsCtrl', function($scope, $http) {
    $scope.logs = [];
    function loadScript(url, callback) {
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = url;
        script.onload = callback;
        head.appendChild(script);
        console.log('script loaded');
    }

    function init() {
        console.log('init called');
        loadScript('resources/js/socket.io.js', function() {

            var socket = io.connect("http://ec2-54-186-120-246.us-west-2.compute.amazonaws.com:8080", {resource: "socket-demo/socket.io"});

            document.getElementById('log').innerHTML = "connecting";

            socket.on('ping', function(data) {
                document.getElementById('log').innerHTML = data.message;
                socket.emit('pong', {message: 'Hello from client!'});
            });

            socket.on('connect', function() {
                document.getElementById('log').innerHTML = "connected";
            });

            socket.on('reconnect', function() {
                document.getElementById('log').innerHTML = "reconnected";
            });

            socket.on('disconnect', function() {
                document.getElementById('log').innerHTML = "disconnected";
            });

            socket.on('reconnecting', function() {
                document.getElementById('log').innerHTML = "reconnecting...";
            });

            socket.on('error', function() {
                document.getElementById('log').innerHTML = "error";
            });
        });
    }

init();
//    document.addEventListener("deviceready", init, false);
//    var url = "ws://ec2-54-186-120-246.us-west-2.compute.amazonaws.com:8080/web-socket/echo?user=dubic";
//    var ws = new WebSocket(url);
//
//    ws.onopen = function() {
//        $scope.$apply(function() {
//            $scope.logs.push("opened");
//        });
//
//        ws.send("thank you for accepting this websocket request");
//    };
//    ws.onmessage = function(e) {
//        console.log(e.data);
//        $scope.$apply(function() {
//            $scope.logs.push(e.data);
//        });
//
//    };
//    ws.onclose = function(e) {
//        console.log("closed");
//        $scope.logs.push("closed");
//    };
});
