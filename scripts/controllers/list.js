'use strict';

angular.module('angularApp')

.controller('listCtlr', function($scope, $location, project) {

    $scope.go = function ( path ) {
        $location.path( path );
    }

    $scope.Delta = project;

});
