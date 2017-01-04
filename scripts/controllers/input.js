'use strict';

angular.module('angularApp')

.controller('inputCtlr', function($scope, $location, $interval, $localStorage,
    $sessionStorage, goalToBeTracked) {

    $scope.go = function ( path ) {
        $location.path( path );
    }

    $scope.Input = goalToBeTracked;

    $scope.$storage = $localStorage.project;

    $scope.saveNewData = function() {

        $scope.$storage.push($scope.Input);

        $localStorage.project = $scope.$storage;
    }

    /**
     * Stopwatch feature
     */

    // store the interval promise in this variable
    var promise;

    // timer with interval
    $scope.timerWithInterval = 0;
    $scope.startTimerWithInterval = function() {
        $scope.timerWithInterval = 0;
        if($scope.myInterval){
            $interval.cancel($scope.myInterval);
            $scope.timerWithInterval = promise;
            // store the interval promise
            $scope.timerWithInterval++;
        }
        $scope.onInterval = function(){
            $scope.timerWithInterval++;
        }
    $scope.myInterval = $interval($scope.onInterval,1000);
    }

    $scope.stopTimerWithInterval = function() {
        if ($scope.myInterval){
            $interval.cancel($scope.myInterval);
            promise = $scope.timerWithInterval;
        }
    }

    $scope.resetTimerWithInterval = function(){
        $scope.timerWithInterval = 0;
        promise = 0;
        $interval.cancel($scope.myInterval);
    }

    $scope.confirmTime = function() {
        if (confirm('Are you sure you want to confirm this time?')) {

            // grab the current interval timer value
            var currentTimerTime = $scope.timerWithInterval;
            // grab the manual time entered
            var manualTime = $scope.Input.timer;

            if ( currentTimerTime > 0 ) {
                // create new object or suffer the wrath of each new object overwriting all previously pushed objects
                $scope.Input.entryItem = {};
                // store some useful timestamp info for each array item
                var timeStamp = new Date(); // create new date object
                $scope.Input.entryItem.timeStamp = timeStamp.getDate(); // get today's date & add it to the property
                // store the actual object properties in the array item object
                $scope.Input.entryItem.minutes = $scope.timerWithInterval;
                $scope.Input.entries.push($scope.Input.entryItem);

                $scope.go('project-output-view');
                $scope.saveNewData();
                $scope.timerWithInterval = '';

            } else {
                // create new object or suffer the wrath of each new object overwriting all previously pushed objects
                $scope.Input.entryItem = {};
                // store some useful timestamp info for each array item
                var timeStamp = new Date(); // create new date object
                $scope.Input.entryItem.timeStamp = timeStamp.getDate(); // get today's date & add it to the property
                // store the actual object properties in the array item object
                $scope.Input.entryItem.minutes = $scope.Input.timer;
                $scope.Input.entries.push($scope.Input.entryItem);

                $scope.go('project-output-view');
                $scope.saveNewData();
                $scope.Input.timer = '';
            }
        }
    }
})

.filter('hhmmss', function () {
    return function (time) {
        var sec_num = parseInt(time, 10); // don't forget the second param
        var hours   = Math.floor(sec_num / 3600);
        var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        var seconds = sec_num - (hours * 3600) - (minutes * 60);

        if (hours   < 10) {hours   = "0"+hours;}
        if (minutes < 10) {minutes = "0"+minutes;}
        if (seconds < 10) {seconds = "0"+seconds;}
        var time    = hours+':'+minutes+':'+seconds;
        return time;
    }
});
