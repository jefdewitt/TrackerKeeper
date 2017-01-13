'use strict';

angular.module('angularApp')

.controller('detailsCtlr', function ($scope, $location, $localStorage, goalToBeTracked) {

    $scope.go = function ( path ) {
        $location.path( path );
    }

    $scope.Details = goalToBeTracked;

    $scope.$storage = $localStorage.project;

    $scope.projectObject = $scope.$storage;

    console.dir('$scope.Details.timeRepo[0].minutes ' + $scope.Details.timeRepo[0].minutes);

    $scope.$storage = $localStorage.project;
    console.log('Heres our scope.storage contents');
    angular.forEach($scope.$storage, function(index) {
        console.dir(index);
    });


});
