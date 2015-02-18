/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

ctrls.controller('chatsCtrl', function($scope, $http) {
//    $scope.loading = true;
//    $http.get('http://ec2-54-186-120-246.us-west-2.compute.amazonaws.com:8080/scribbleit/test/load?page=activation')
//            .success(function(resp) {
//                $scope.loading = false;
//                $scope.pages = resp;
//            })
//            .error(function(r) {
//                $scope.loading = false;
//                $scope.pages = r;
//            });

    $scope.clearlog = function() {
//        $scope.pages = '<div>cleared</div>';
//        $scope.p = '<style>.container{width: 50%;margin: 10px auto;padding: 20px 30px 15px;background: aliceblue;}</style>'
//
//                + '<div class="container">'
//                + '<img src="http://localhost:7070/scribbleit/resources/images/logo_hollow.png" style="height: 54px;"/>'
//                + '<table style="width: 100%">'
//                + '<tr><td><span style="font-family:arial;color:#666666;font-size:16px">Hi Dubic,</span></td></tr>'
//                + '<tr><td><span style="font-family:arial;color:#666666;font-size:16px">Welcome to Scribbles.</span></td></tr>'
//                + '<tr><td><span style="font-family:arial;color:#666666;font-size:16px">You need to <a href="http://localhost:7070/scribbleit/registration/activate/6b39447c1a6f9cd00e1643c41828b1ec">activate</a> your account in order to login and share posts.</span></td></tr>'
//                + '</table>'
//                + '</div>';
    };
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
            
            document.getElementById('log').innerHTML = "connecting";

            var socket = io.connect("http://ec2-54-186-120-246.us-west-2.compute.amazonaws.com:8080", {resource: "web-socket/socket.io"});
//            var socket = io.connect("http://localhost:7070", {resource: "web-socket/socket.io"});

            

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
                document.getElementById('log').innerHTML = "error ";
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
