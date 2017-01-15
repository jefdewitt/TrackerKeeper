'use strict';

angular.module('angularApp')

.controller('listCtlr', function($scope, $location, $interval, $localStorage,
    $sessionStorage, goalToBeTracked) {

    $scope.go = function ( path ) {
        $location.path( path );
    }

    $scope.ListItem = goalToBeTracked;

    $scope.pctgCompleted = function(project) {

        this.goalTimeInMin = project.hours * 60;

        this.arrayMinutes = project.timeRepo.map(function(object) {
            return object.minutes;
        });

        this.sumOfEntries = this.arrayMinutes.reduce(function(a, b) {
            return a + b;
        }, 0);

        this.totalAccumulatedHours = this.sumOfEntries / 60;

        this.totalAccumulatedPctg = ( this.sumOfEntries * 100 ) / this.goalTimeInMin;

        return this.totalAccumulatedPctg.toFixed(2);
    }

    $scope.$storage = $localStorage.project;

    $scope.projectObject = $scope.$storage;

    $scope.loadData = function(project) {
        $scope.ListItem.name = project.name;
        $scope.ListItem.hours = project.hours;
        $scope.ListItem.timeRepo = project.timeRepo;
    }

    $scope.clearData = function() {
        $localStorage.project = [];
        $scope.$storage = [];
    }

});
