'use strict';

angular.module('angularApp')

.controller('listCtlr', function($scope, $location, $interval, $localStorage,
    $sessionStorage, project) {

    $scope.go = function ( path ) {
        $location.path( path );
    }

    $scope.Delta = project;

    // $localStorage.project = $scope.$storage;

    $scope.$storage = $localStorage.project;

    $scope.loadData = function() {

        // console.log('scope storage -- output ' + $scope.$storage);
        // console.log('localStorage -- output ' + $localStorage.project);
        // console.log('localStorage -- output min ' + $localStorage.project.entryItem);
        // console.log('localStorage -- output min ' + $localStorage.project.Delta);

        var projectObject = $scope.$storage;
        console.log(projectObject);
        console.dir(projectObject);

    }

});
