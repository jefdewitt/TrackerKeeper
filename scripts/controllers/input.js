'use strict';

angular.module('angularApp')

.controller('inputCtlr', function($scope, $location, $interval, Project) {
    $scope.message = "I'm a single project page";

    $scope.go = function ( path ) {
        $location.path( path );
    }

    $scope.Beta = Project;
    //
    // $scope.Timer = {timerWithInterval | hhmmss};

    // store the interval promise in this variable
    var promise;

    // simulated items array
    $scope.items = [];

    //timer with interval
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

    $scope.storeTime = function() {
        // grab the current interval timer value
        var currentTimerTime = $scope.timerWithInterval;
        // grab the manual time entered
        var manualTime = $scope.Beta.timer;
        if ( currentTimerTime > 0 ) {
            // if the stopwatch has been used
            $scope.showTime = currentTimerTime;
            console.log($scope.showTime);
        } else {
            // if time has been manually entered
            $scope.showTime = manualTime;
            console.log($scope.showTime);
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
