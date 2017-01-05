'use strict';

angular.module('angularApp')

.controller('listCtlr', function($scope, $location, $interval, $localStorage,
    $sessionStorage, goalToBeTracked) {

    $scope.go = function ( path ) {
        $location.path( path );
    }

    $scope.ListItem = goalToBeTracked;

    // consider func as the next 6 vars exist in output.js too

    // $scope.goalTimeInMin = $scope.ListItem.time * 60;
    //
    // $scope.arrayMinutes = $scope.ListItem.entries.map(function(object) {
    //     return object.minutes;
    // });
    //
    // $scope.sumOfEntries = $scope.arrayMinutes.reduce(function(a, b) {
    //     return a + b;
    // }, 0);

    // $scope.totalAccumulated = $scope.sumOfEntries;

    // $scope.totalAccumulatedHours = $scope.sumOfEntries / 60;
    //
    // $scope.totalAccumulatedPctg = ( $scope.sumOfEntries * 100 ) /$scope.goalTimeInMin;

    $scope.$storage = $localStorage.project;

    $scope.projectObject = $scope.$storage;

    angular.forEach($scope.projectObject, function(index) {
    //   console.log(index);
    //   console.log(index.name);
    //   console.log(index.time);
      console.dir('index ' + index);

      var goalInMin = index.time * 60;
      console.log('goalInMin ' + goalInMin);
      //
      var arrayMin = index.entries.map(function(object) {
          return object.minutes;
      });
      console.log('arrayMin ' + arrayMin);
      //
      var sumOfArrayMin = arrayMin.reduce(function(a, b) {
          return a + b;
      }, 0);
      console.log('sumOfArrayMin ' + sumOfArrayMin);
      //
      var totalAccumulatedHours = sumOfArrayMin / 60;
      console.log('totalAccumulatedHours ' + totalAccumulatedHours);
      //
      $scope.accumulatedPctg = ( sumOfArrayMin  * 100 ) / goalInMin;
      console.log('$scope.accumulatedPctg ' + $scope.accumulatedPctg);

    });

    $scope.loadData = function() {

        // var projectObject = $scope.$storage;
        console.log($scope.projectObject);
        console.dir($scope.projectObject);

    }

    $scope.clearData = function() {
        $localStorage.project = [];
        $scope.$storage = [];
        $scope.projectObject = [];
    }

});
