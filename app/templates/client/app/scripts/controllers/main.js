'use strict';

angular.module('clientApp')
    .controller('MainCtrl', function ($scope, $http, socket) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        socket.on('getcalled', function(data){
            $scope.socketdata = data;
        });

        $http({method: 'GET', url: '/api/sample'}).
            success(function (data, status, headers, config) {
                // this callback will be called asynchronously
                // when the response is available
                console.log(data);
                $scope.data = data;

            }).
            error(function (data, status, headers, config) {
                // called asynchronously if an error occurs
                // or server returns response with an error status.
                console.log('error get');
            });
    });
