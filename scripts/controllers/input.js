'use strict';

angular.module('angularApp')

.controller('inputCtlr', function($scope, $location, $timeout, $interval, Project) {
    $scope.message = "I'm a single project page";

    $scope.go = function ( path ) {
        $location.path( path );
    }

    $scope.Beta = Project;

    //timer with timeout
    $scope.timerWithTimeout = 0;
    $scope.startTimerWithTimeout = function() {
        $scope.timerWithTimeout = 0;
        if($scope.myTimeout){
            $timeout.cancel($scope.myTimeout);
        }
        $scope.onTimeout = function(){
            $scope.timerWithTimeout++;
            $scope.myTimeout = $timeout($scope.onTimeout,1000);
        }
        $scope.myTimeout = $timeout($scope.onTimeout,1000);
    }

    $scope.resetTimerWithTimeout = function(){
        $scope.timerWithTimeout = 0;
        $timeout.cancel($scope.myTimeout);
    }

    //timer with interval
    $scope.timerWithInterval = 0;
    $scope.startTimerWithInterval = function() {
        $scope.timerWithInterval = 0;
        if($scope.myInterval){
            $interval.cancel($scope.myInterval);
        }
        $scope.onInterval = function(){
            $scope.timerWithInterval++;
        }
    $scope.myInterval = $interval($scope.onInterval,1000);
    }

    $scope.resetTimerWithInterval = function(){
        $scope.timerWithInterval = 0;
        $interval.cancel($scope.myInterval);
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
})
