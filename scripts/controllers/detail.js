'use strict';

angular.module('angularApp')

.controller('detailCtlr', function ($scope, $location, $localStorage, goalToBeTracked) {

    $scope.go = function ( path ) {
        $location.path( path );
    }

    $scope.Detail = goalToBeTracked;
    console.log('$scope.Detail.name ' + $scope.Detail.name);

    $scope.$storage = $localStorage.project;

    $scope.timeObject = $scope.Detail.timeRepo;


});
