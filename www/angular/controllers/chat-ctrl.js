/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

ctrls.controller('chatsCtrl', function($scope, $http) {
    $scope.logs = [];
    var url = "ws://ec2-54-186-120-246.us-west-2.compute.amazonaws.com:8080/web-socket/echo?user=dubic";
    var ws = new WebSocket(url);

    ws.onopen = function() {
        $scope.$apply(function() {
            $scope.logs.push("opened");
        });

        ws.send("thank you for accepting this websocket request");
    };
    ws.onmessage = function(e) {
        console.log(e.data);
        $scope.$apply(function() {
            $scope.logs.push(e.data);
        });

    };
    ws.onclose = function(e) {
        console.log("closed");
        $scope.logs.push("closed");
    };
});
