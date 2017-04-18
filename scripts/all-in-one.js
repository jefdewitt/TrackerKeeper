'use strict';

angular.module('testApp', [])

.directive('firstDirective', function() {
    function newFunction($scope, elem, attrs) {
        $scope.name = "Hello World";
        $scope.changeName = function() {
            $scope.name = $scope.message;
        }
    }

    return {
        template: '<span ng-click="changeName()">Click me! The text is from {{name}}</span>',
        restrict: 'AE',
        link: newFunction,
        scope: true,
        controller: 'firstCtrl'
    }
})

.directive('secondDirective', function() {
    function linkFunction($scope, elem, attrs) {
        elem.bind('click', function() {
            console.log(attrs);
        });
    }

    return {
        templateUrl: '/scripts/directives/secondDirective.js',
        restrict: 'AE',
        link: linkFunction
    }
})

.controller('firstCtrl', function($scope, sharedObject) {
    $scope.message = "the first controller!";
    $scope.message = sharedObject.message;

    $scope.send = function(first) {
        $scope.$emit('mySecondEvent', first);
        $scope.$parent.$broadcast('mySecondEvent', first);
    }

    $scope.$on('myFirstEvent', function (event, second) {
        $scope.second = second;
    })
})

.controller('secondCtrl', function($scope, sharedObject, $rootScope) {
    $scope.message = "the second controller!";

    $scope.send = function(second) {
        $rootScope.$broadcast('myFirstEvent', second);
    }

    $scope.$on('mySecondEvent', function (event, first) {
        $scope.first = first;
    })
})

.service('sharedObject', function() {
    this.message = 'the service!';
})
