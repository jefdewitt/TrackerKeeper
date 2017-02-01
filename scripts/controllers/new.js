'use strict';

angular.module('angularApp')

.controller('newCtlr', function($scope, $location, $localStorage, goalToBeTracked) {
    $scope.message = 'Look! I am a new page.';

    $scope.go = function ( path ) {
        $location.path( path );
    }

    // we hook into our shared object from our service/factory
    $scope.New = goalToBeTracked;

    // we create a new project object constructor
    function Goal(name, hours) {
        this.name = name;
        this.hours = hours;
        this.timeRepo = [];
        this.selected = true;
    }

    $scope.$storage = $localStorage.project;

    $scope.saveGoal = function(){

        // create a new instance of our project object and store values from
        // the input fields on the front-end of the app
        var newGoal = new Goal( $scope.formObject.name, $scope.formObject.hours );

        // add the new project object to storage
        $scope.$storage.push(newGoal);

        angular.forEach($scope.$storage, function(index) {
            if( index.selected === true ) {
                $scope.New = index;
            } else {
                index.selected = false;
            }
        })

        // we match the props of our shared object with project object
        $scope.New.name = newGoal.name;
        $scope.New.hours = newGoal.hours;
        $scope.New.timeRepo = [];

        // we set our localStorage object to match our $scope.$storage object
        $localStorage.project = $scope.$storage;

        // here we clear the form
        $scope.formObject = {
            name: '',
            time: ''
        }

    }

});
