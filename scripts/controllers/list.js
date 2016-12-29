'use strict';

angular.module('angularApp')

.controller('listCtlr', function($scope, $location, $interval, $localStorage,
    $sessionStorage, project) {

    $scope.go = function ( path ) {
        $location.path( path );
    }

    $scope.Delta = project;

    $scope.$storage = $localStorage;

    $scope.loadData = function() {
        $scope.data = $localStorage.project;
        console.log('data loaded');
    }

});
