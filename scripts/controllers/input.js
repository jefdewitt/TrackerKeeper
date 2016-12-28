'use strict';

angular.module('angularApp')

.controller('inputCtlr', function($scope, $location, $interval, $localStorage,
    $sessionStorage, project) {

    $scope.go = function ( path ) {
        $location.path( path );
    }

    $scope.Beta = project;

    $scope.$storage = $localStorage;

    $scope.save = function() {
        $localStorage.project = $scope.Beta;
    }

    $scope.load = function() {
        $scope.data = $localStorage.project;
    }

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

    // $scope.storeTime = function() {
    //     // grab the current interval timer value
    //     var currentTimerTime = $scope.timerWithInterval;
    //     // grab the manual time entered
    //     var manualTime = $scope.Beta.timer;
    //     if ( currentTimerTime > 0 ) {
    //         // if the stopwatch has been used
    //         $scope.showTime = currentTimerTime;
    //     } else {
    //         // if time has been manually entered
    //         $scope.showTime = manualTime;
    //     }
    // }

    $scope.confirmTime = function() {
        if (confirm('Are you sure you want to confirm this time?')) {
            // grab the current interval timer value
            var currentTimerTime = $scope.timerWithInterval;
            // grab the manual time entered
            var manualTime = $scope.Beta.timer;

            if ( currentTimerTime > 0 ) {
                $scope.Beta.entries.push($scope.timerWithInterval);
            } else {
                $scope.Beta.entries.push($scope.Beta.timer);
            }
            console.log($scope.Beta.entries);
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
