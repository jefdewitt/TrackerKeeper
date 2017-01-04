'use strict';

angular.module('angularApp')

.controller('listCtlr', function($scope, $location, $interval, $localStorage,
    $sessionStorage, goalToBeTracked) {

    $scope.go = function ( path ) {
        $location.path( path );
    }

    $scope.ListItem = goalToBeTracked;

    // consider func as the next 6 vars exist in output.js too

    $scope.goalTimeInMin = $scope.ListItem.time * 60;

    $scope.arrayMinutes = $scope.ListItem.entries.map(function(object) {
        return object.minutes;
    });

    $scope.sumOfEntries = $scope.arrayMinutes.reduce(function(a, b) {
        return a + b;
    }, 0);

    $scope.totalAccumulated = $scope.sumOfEntries;

    $scope.totalAccumulatedHours = $scope.totalAccumulated / 60;

    $scope.totalAccumulatedPctg = ( $scope.totalAccumulated * 100 ) /$scope.goalTimeInMin;

    $scope.$storage = $localStorage.project;

    $scope.projectObject = $scope.$storage;

    $scope.loadData = function() {

        // var projectObject = $scope.$storage;
        // console.log(projectObject);
        // console.dir(projectObject);

    }

    $scope.clearData = function() {
        $localStorage.project = [];
    }

});
