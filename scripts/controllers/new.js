'use strict';

angular.module('angularApp')

.controller('newCtlr', function($scope, $location, goalToBeTracked) {
    $scope.message = 'Look! I am a new page.';

    $scope.go = function ( path ) {
        $location.path( path );
    }

    $scope.New = goalToBeTracked;

    $scope.resetForm = function(){

        $scope.New.name = $scope.formObject.name;

        $scope.New.time = $scope.formObject.time;

        $scope.formObject = {
            name: '',
            time: ''
        }

    }

});
