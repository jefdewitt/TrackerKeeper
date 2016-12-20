'use strict';

angular.module('angularApp')

.controller('inputCtlr', function($scope, $location, Project) {
    $scope.message = "I'm a single project page";

    $scope.go = function ( path ) {
        $location.path( path );
    }

    $scope.Gamma = Project;
});
