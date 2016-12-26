'use strict';

angular.module('angularApp')

.controller('outputCtlr', function ($scope, $location, project) {

    $scope.go = function ( path ) {
        $location.path( path );
    }

    $scope.Gamma = project;

    console.log($scope.Gamma.entries[0]);
});
