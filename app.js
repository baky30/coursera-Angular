(function () {
    'use strict';
    
    angular.module('myFirstApp', [])
    
    .controller('MyFirstController', function ($scope) {
        $scope.name = 'fred';
        $scope.sayHello = function () {
            return 'durou ejen'
        }
    });

})();