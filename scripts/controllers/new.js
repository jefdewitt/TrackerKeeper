'use strict';

angular.module('angularApp')

.controller('newCtlr', function($scope, $location, Project) {
    $scope.message = 'Look! I am a list page.';

    $scope.go = function ( path ) {
        $location.path( path );
    }

    // var first = this;

    // first.project = project;

    $scope.Alpha = Project;

});
