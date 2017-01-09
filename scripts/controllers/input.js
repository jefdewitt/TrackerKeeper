'use strict';

angular.module('angularApp')

.controller('inputCtlr', function($scope, $location, $interval, $localStorage,
    $sessionStorage, goalToBeTracked) {

    $scope.go = function ( path ) {
        $location.path( path );
    }

    $scope.Input = goalToBeTracked;

    $scope.$storage = $localStorage.project;
    console.log('Heres our scope.storage contents');
    angular.forEach($scope.$storage, function(index) {
        console.dir(index.name);
    });

    $scope.saveNewData = function() {
        // grab the current interval timer value
        var currentTimerTime = $scope.timerWithInterval;
        // grab the manual time entered
        var manualTime = $scope.timer;
        // create new object or suffer the wrath of each new object overwriting all previously pushed objects
        $scope.entryItem = {};
        // store some useful timestamp info for each array item
        var timeStamp = new Date(); // create new date object
        $scope.entryItem.timeStamp = timeStamp.getDate(); // get today's date & add it to the property

        if ( currentTimerTime > 0 ) {
            // store the actual object properties in the entries array
            $scope.entryItem.minutes = $scope.timerWithInterval;
            // if localStorage isn't empty
            if ( $scope.$storage[0] !== undefined ) {
                // loop through our localStorage array
                angular.forEach($scope.$storage, function(index) {

                    if (index.name === $scope.Input.name) {
                        index.entries = [];
                        index.entries.push($scope.entryItem)
                    } else {
                        $scope.Input.entries.push($scope.entryItem);
                        $scope.$storage.push($scope.Input);
                    }
                });

            } else {
                $scope.Input.entries.push($scope.entryItem);
                $scope.$storage.push($scope.Input);
            }
            $scope.timerWithInterval = '';

        } else {
            // store the actual object properties in the array item object
            $scope.entryItem.minutes = $scope.timer;
            //
            // if ( $scope.$storage.length > 1 ) {

                var count = 0;

                angular.forEach($scope.$storage, function(index) {
                    console.log('index.name ' + index.name);
                    console.log('$scope.Input.name ' + $scope.Input.name);
                    if (index.name === $scope.Input.name) {
                        console.log('00000');
                        index.entries = [];
                        index.entries.push($scope.entryItem);
                    } else {
                        console.log('11111');
                        count++;
                        console.log('count = ' + count);
                    }
                })

                if (count === $scope.$storage.length) {
                    console.log('count = $scope.$storage.length');
                    $scope.Input.entries.push($scope.entryItem);
                    $scope.$storage.push($scope.Input);
                    console.dir($scope.$storage);
                }

            // } else {
            //     $scope.Input.entries.push($scope.entryItem);
            //     $scope.$storage.push($scope.Input);
            //     console.dir($scope.$storage);
            // }
            $scope.timer = '';
        }


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
            // if confirm is true we save our object and go to the next view
            $scope.saveNewData();
            $scope.go('project-output-view');

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
