'use strict';

angular.module('angularApp')

.controller('outputCtlr', function ($scope, $location, $localStorage, goalToBeTracked) {

    $scope.go = function ( path ) {
        $location.path( path );
    }

    $scope.Output = goalToBeTracked;

    $scope.$storage = $localStorage.project;

    // establish project completion time in minutes
    // $scope.Output.goalTimeInMin = $scope.Output.time * 60;
    $scope.goalTimeInMin = $scope.Output.hours * 60;

    // convert today's time entry into hours
    // $scope.Output.todaysTime = $scope.Output.timeRepo[0].minutes / 60;
    $scope.todaysTime = $scope.Output.timeRepo[0].minutes / 60;

    // find today's time entry as a percentage of the whole project
    $scope.todaysPctg = ( $scope.Output.timeRepo[0].minutes * 100 ) / $scope.goalTimeInMin;

    // we use map to grab object properties from within arrays -- SO STOKED!!!
    $scope.arrayMinutes = $scope.Output.timeRepo.map(function(object) {
        return object.minutes;
    });

    // grab the sum of the timeRepo
    $scope.sumOfEntries = $scope.arrayMinutes.reduce(function(a, b) {
        return a + b;
    }, 0);

    /**
     * weekly daily average algorithms
     */
    if ( $scope.Output.timeRepo.length < 6 ) {

        // convert sum to hours
        $scope.weekTotalHours = $scope.sumOfEntries / 60;

        // get the total of the entry's hours as a percentage of the whole project
        $scope.weekTotalPctg = ( $scope.sumOfEntries * 100 ) /$scope.goalTimeInMin;

        // divide the sum of the timeRepo by the number of timeRepo
        $scope.weekAvg = $scope.weekTotalHours / $scope.Output.timeRepo.length;

        // find the entry's daily average percentage of the whole project
        $scope.weekDailyAvgPctg = ( $scope.weekAvg * 100 ) / $scope.Output.hours;

    } else {

        // if there are a week's worth of timeRepo grab the last 7
        $scope.Output.recentWeek = $scope.arrayMinutes.slice(-7);

        // add the week's worth of timeRepo together
        $scope.Output.weekTotal = $scope.Output.recentWeek.reduce(function(a, b) {
            return a + b;
        }, 0);

        // convert sum to hours
        $scope.weekTotalHours = $scope.Output.weekTotal / 60;

        // get the total of the week's hours as a percentage of the whole project
        $scope.weekTotalPctg = ( $scope.Output.weekTotal * 100 ) /$scope.goalTimeInMin;

        // if there are a week's worth of timeRepo divide by 7
        $scope.weekAvg = $scope.weekTotalHours / 7;

        // find the week's daily average percentage of the whole project
        $scope.weekDailyAvgPctg = ( $scope.weekAvg * 100 ) / $scope.Output.hours;

    }

    /**
     * monthly daily average algorithms
     */

    if ( $scope.Output.timeRepo.length < 29 ) {

        // convert sum to hours
        $scope.monthTotalHours = $scope.sumOfEntries / 60;

        // get the total of the entry's hours as a percentage of the whole project
        $scope.monthTotalPctg = ( $scope.sumOfEntries * 100 ) /$scope.goalTimeInMin;

        // divide the sum of the timeRepo by the number of timeRepo
        $scope.monthAvg = $scope.monthTotalHours / $scope.Output.timeRepo.length;

        // find the entry's daily average percentage of the whole project
        $scope.monthDailyAvgPctg = ( $scope.monthAvg * 100 ) / $scope.Output.hours;

    } else {

        // if there are a month's worth of timeRepo grab the last 30
        $scope.recentMonth = $scope.arrayMinutes.slice(-30);

        // add the month's worth of timeRepo together
        $scope.monthTotal = $scope.recentMonth.reduce(function(a, b) {
            return a + b;
        }, 0);

        // convert sum to hours
        $scope.monthTotalHours = $scope.monthTotal / 60;

        // get the total of the month's hours as a percentage of the whole project
        $scope.monthTotalPctg = ( $scope.monthTotal * 100 ) /$scope.goalTimeInMin;

        // if there are a month's worth of timeRepo divide by 30
        $scope.monthAvg = $scope.monthTotalHours / 30;

        // find the month's daily average percentage of the whole project
        $scope.monthDailyAvgPctg = ( $scope.monthAvg * 100 ) / $scope.Output.hours;
    }

    /**
     * yearly daily average algorithms
     */
    if ( $scope.Output.timeRepo.length < 364 ) {

        // convert sum to hours
        $scope.yearTotalHours = $scope.sumOfEntries / 60;

        // get the total of the entry's hours as a percentage of the whole project
        $scope.yearTotalPctg = ( $scope.sumOfEntries * 100 ) /$scope.goalTimeInMin;

        // divide the sum of the timeRepo by the number of timeRepo
        $scope.yearAvg = $scope.yearTotalHours / $scope.Output.timeRepo.length;

        // find the entry's daily average percentage of the whole project
        $scope.yearDailyAvgPctg = ( $scope.yearAvg * 100 ) / $scope.Output.hours;

    } else {

        // if there are a years's worth of timeRepo grab the last 365
        $scope.recentYear = $scope.arrayMinutes.slice(-365);

        // add the month's worth of timeRepo together
        $scope.yearTotal = $scope.recentYear.reduce(function(a, b) {
            return a + b;
        }, 0);

        // convert sum to hours
        $scope.yearTotalHours = $scope.yearTotal / 60;

        // get the total of the years's hours as a percentage of the whole project
        $scope.yearTotalPctg = ( $scope.yearTotal * 100 ) /$scope.goalTimeInMin;

        // if there are a year's worth of timeRepo divide by 30
        $scope.yearAvg = $scope.yearTotalHours / 30;

        // find the entry's daily average percentage of the whole project
        $scope.yearDailyAvgPctg = ( $scope.yearAvg * 100 ) / $scope.Output.hours;
    }

    /**
     * Project totals
     */
     $scope.totalAccumulated = $scope.sumOfEntries;

     $scope.totalAccumulatedHours = $scope.totalAccumulated / 60;

     $scope.totalAccumulatedPctg = ( $scope.totalAccumulated * 100 ) /$scope.goalTimeInMin;

});
