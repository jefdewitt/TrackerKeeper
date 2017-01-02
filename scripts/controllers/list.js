'use strict';

angular.module('angularApp')

.controller('listCtlr', function($scope, $location, $interval, $localStorage,
    $sessionStorage, goalToBeTracked) {

    $scope.go = function ( path ) {
        $location.path( path );
    }

    $scope.ListItem = goalToBeTracked;

    $scope.$storage = $localStorage.project;

    $scope.loadData = function() {

        var projectObject = $scope.$storage;
        console.log(projectObject);
        console.dir(projectObject);

    }

    $scope.clearData = function() {
        $localStorage.project = [];
    }

});
