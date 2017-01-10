'use strict';

angular.module('angularApp')

.controller('newCtlr', function($scope, $location, $localStorage, goalToBeTracked) {
    $scope.message = 'Look! I am a new page.';

    $scope.go = function ( path ) {
        $location.path( path );
    }

    $scope.New = goalToBeTracked;

    function Goal(name, hours) {
        this.name = name;
        this.hours = hours;
    }

    $scope.$storage = $localStorage.project;

    $scope.saveGoal = function(){

        var newGoal = new Goal($scope.formObject.name, $scope.formObject.hours)

        $scope.$storage.push(newGoal);

        $scope.New.name = newGoal.name;
        $scope.New.hours = newGoal.hours;

        $localStorage.project = $scope.$storage;
        $scope.$storage = $localStorage.project;
        console.log('Heres our scope.storage contents');
        angular.forEach($scope.$storage, function(index) {
            console.dir(index.name);
        });

        $scope.formObject = {
            name: '',
            time: ''
        }

    }

});
