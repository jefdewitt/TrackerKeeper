'use strict';

angular.module('angularApp')

.controller('newCtlr', function($scope, $location, project) {
    $scope.message = 'Look! I am a new page.';

    $scope.go = function ( path ) {
        $location.path( path );
    }

    $scope.Alpha = project;

    $scope.resetForm = function(){

        $scope.Alpha.name = $scope.formObject.name;

        $scope.Alpha.time = $scope.formObject.time;

        $scope.formObject = {
            name: '',
            time: ''
        }
    }

});
