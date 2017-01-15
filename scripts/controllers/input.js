'use strict';

angular.module('angularApp')

.controller('inputCtlr', function($scope, $location, $interval, $localStorage,
    $sessionStorage, goalToBeTracked) {

    $scope.go = function ( path ) {
        $location.path( path );
    }

    $scope.Input = goalToBeTracked;

    $scope.$storage = $localStorage.project;

    $scope.timeStamp = function() {
        var dateObj = new Date();
        var month = dateObj.getMonth() + 1; //months from 1-12
        if (month < 10) { month = '0' + month; }
        var day = dateObj.getDate();
        if (day < 10) { day = '0' + day; }
        var year = dateObj.getFullYear();

        $scope.timeStamp = year + "-" + month + "-" + day;
        return $scope.timeStamp;
    }

    $scope.saveNewData = function() {
        // grab the current interval timer value
        var currentTimerTime = $scope.timerWithInterval;
        // grab the manual time entered
        var manualTime = $scope.timer;
        // create a new time object to add to our timeRepo property
        $scope.newTime = {};

        // if diff date is selected add it to our new time object
        if ( $scope.date != undefined ) {
            $scope.newTime.timeStamp = $scope.date;
        } else {
            // otherwise get today's date & add it to our new time object
            $scope.newTime.timeStamp = $scope.timeStamp();
        }

        if ( currentTimerTime > 0 ) {
            // store the actual object properties in the timeRepo array
            $scope.newTime.minutes = $scope.timerWithInterval;

            angular.forEach($scope.$storage, function(index) {

                if (index.name === $scope.Input.name) {
                    index.timeRepo.push($scope.newTime);
                    $scope.Input.timeRepo = index.timeRepo;
                } else {
                    console.log('no match');
                }
            })

            $scope.timerWithInterval = '';

        } else {
            // store the actual object properties in the array item object
            $scope.newTime.minutes = $scope.timer;

            angular.forEach($scope.$storage, function(index) {

                if (index.name === $scope.Input.name) {
                    index.timeRepo.push($scope.newTime);
                    $scope.Input.timeRepo = index.timeRepo;
                } else {
                    console.log('no match');
                }
            })

            $scope.timer = '';
        }

        $localStorage.project = $scope.$storage;
    }


    // Stopwatch feature

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

            if ( $scope.Input.hours > 0 && ( $scope.timer > 0 || $scope.timerWithInterval > 0) ) {
            // if confirm is true we save our object and go to the next view
                $scope.saveNewData();
                $scope.go('project-output-view');
            } else {
                alert('A project must be selected and the time entered must be greater than zero.')
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
