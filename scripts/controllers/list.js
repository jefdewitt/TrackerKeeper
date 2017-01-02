'use strict';

angular.module('angularApp')

.controller('listCtlr', function($scope, $location, $interval, $localStorage,
    $sessionStorage, goalToBeTracked) {

    $scope.go = function ( path ) {
        $location.path( path );
    }

    $scope.ListItem = goalToBeTracked;

    // $localStorage.project = $scope.$storage;

    $scope.$storage = $localStorage.project;

    $scope.loadData = function() {

        // console.log('scope storage -- output ' + $scope.$storage);
        // console.log('localStorage -- output ' + $localStorage.project);
        // console.log('localStorage -- output min ' + $localStorage.project.entryItem);
        // console.log('localStorage -- output min ' + $localStorage.project.ListItem);

        var projectObject = $scope.$storage;
        console.log(projectObject);
        console.dir(projectObject);

    }

    $scope.clearData = function() {
        $localStorage.$reset();
        // $scope.$storage.$reset();
    }

});
