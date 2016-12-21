'use strict';

angular.module('angularApp')

.controller('outputCtlr', function ($scope, $location, Project) {
    $scope.message = "I'm a single project page";

    var second = this;

    $scope.go = function ( path ) {
        $location.path( path );
    }

    $scope.Gamma = Project;
});
