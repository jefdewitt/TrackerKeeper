'use strict';

angular.module('angularApp')

.controller('outputCtlr', function ($scope, $location, project) {

    $scope.go = function ( path ) {
        $location.path( path );
    }

    $scope.Gamma = project;

    // establish project completion time in minutes
    $scope.Gamma.goalTimeInMin = $scope.Gamma.time * 60;

    // convert today's time entry into hours
    $scope.Gamma.todaysTime = $scope.Gamma.entries[0] / 60;

    // find today's time entry as a percentage of the whole project
    $scope.Gamma.todaysPctg = ( $scope.Gamma.entries[0] * 100 ) / $scope.Gamma.goalTimeInMin;

    // grab the sum of the entries
    $scope.Gamma.sumOfEntries = $scope.Gamma.entries.reduce(function(a, b) {
        return a + b;
    }, 0);

    /**
     * weekly daily average algorithms
     */
    if ( $scope.Gamma.entries.length < 6 ) {

        // convert sum to hours
        $scope.Gamma.weekTotalHours = $scope.Gamma.sumOfEntries / 60;

        // get the total of the entry's hours as a percentage of the whole project
        $scope.Gamma.weekTotalPctg = ( $scope.Gamma.sumOfEntries * 100 ) / $scope.Gamma.goalTimeInMin;

        // divide the sum of the entries by the number of entries
        $scope.Gamma.weekAvg = $scope.Gamma.weekTotalHours / $scope.Gamma.entries.length;

        // find the entry's daily average percentage of the whole project
        $scope.Gamma.weekDailyAvgPctg = ( $scope.Gamma.sumOfEntries * 100 ) / $scope.Gamma.goalTimeInMin;

    } else {

        // if there are a week's worth of entries grab the last 7
        $scope.Gamma.recentWeek = $scope.Gamma.entries.slice(-7);

        // add the week's worth of entries together
        $scope.Gamma.weekTotal = recentWeek.reduce(function(a, b) {
            return a + b;
        }, 0);

        // convert sum to hours
        $scope.Gamma.weekTotalHours = $scope.Gamma.weekTotal / 60;

        // get the total of the week's hours as a percentage of the whole project
        $scope.Gamma.weekTotalPctg = ( $scope.Gamma.weekTotal * 100 ) / $scope.Gamma.goalTimeInMin;

        // if there are a week's worth of entries divide by 7
        $scope.Gamma.weekAvg = $scope.Gamma.weekTotalHours / 7;

        // find the week's daily average percentage of the whole project
        $scope.Gamma.weekDailyAvgPctg = ( $scope.Gamma.weekAvg * 100 ) / $scope.Gamma.goalTimeInMin;

    }


    /**
     * monthly daily average algorithms
     */

    if ( $scope.Gamma.entries.length < 29 ) {

        // convert sum to hours
        $scope.Gamma.monthTotalHours = $scope.Gamma.sumOfEntries / 60;

        // get the total of the entry's hours as a percentage of the whole project
        $scope.Gamma.monthTotalPctg = ( $scope.Gamma.sumOfEntries * 100 ) / $scope.Gamma.goalTimeInMin;

        // divide the sum of the entries by the number of entries
        $scope.Gamma.monthAvg = $scope.Gamma.monthTotalHours / $scope.Gamma.entries.length;

        // find the entry's daily average percentage of the whole project
        $scope.Gamma.monthDailyAvgPctg = ( $scope.Gamma.sumOfEntries * 100 ) / $scope.Gamma.goalTimeInMin;

    } else {

        // if there are a month's worth of entries grab the last 30
        $scope.Gamma.recentMonth = $scope.Gamma.entries.slice(-30);

        // add the month's worth of entries together
        $scope.Gamma.monthTotal = recentMonth.reduce(function(a, b) {
            return a + b;
        }, 0);

        // convert sum to hours
        $scope.Gamma.monthTotalHours = $scope.Gamma.monthTotal / 60;

        // get the total of the month's hours as a percentage of the whole project
        $scope.Gamma.monthTotalPctg = ( $scope.Gamma.monthTotal * 100 ) / $scope.Gamma.goalTimeInMin;

        // if there are a month's worth of entries divide by 30
        $scope.Gamma.monthAvg = $scope.Gamma.monthTotalHours / 30;

        // find the month's daily average percentage of the whole project
        $scope.Gamma.monthDailyAvgPctg = ( $scope.Gamma.monthAvg * 100 ) / $scope.Gamma.goalTimeInMin;
    }

    /**
     * yearly daily average algorithms
     */
    if ( $scope.Gamma.entries.length < 364 ) {

        // convert sum to hours
        $scope.Gamma.yearTotalHours = $scope.Gamma.sumOfEntries / 60;

        // get the total of the entry's hours as a percentage of the whole project
        $scope.Gamma.yearTotalPctg = ( $scope.Gamma.sumOfEntries * 100 ) / $scope.Gamma.goalTimeInMin;

        // divide the sum of the entries by the number of entries
        $scope.Gamma.yearAvg = $scope.Gamma.yearTotalHours / $scope.Gamma.entries.length;

        // find the entry's daily average percentage of the whole project
        $scope.Gamma.yearDailyAvgPctg = ( $scope.Gamma.sumOfEntries * 100 ) / $scope.Gamma.goalTimeInMin;

    } else {

        // if there are a years's worth of entries grab the last 365
        $scope.Gamma.recentYear = $scope.Gamma.entries.slice(-365);

        // add the month's worth of entries together
        $scope.Gamma.yearTotal = recentYear.reduce(function(a, b) {
            return a + b;
        }, 0);

        // convert sum to hours
        $scope.Gamma.yearTotalHours = $scope.Gamma.yearTotal / 60;

        // get the total of the years's hours as a percentage of the whole project
        $scope.Gamma.yearTotalPctg = ( $scope.Gamma.yearTotal * 100 ) / $scope.Gamma.goalTimeInMin;

        // if there are a year's worth of entries divide by 30
        $scope.Gamma.yearAvg = $scope.Gamma.yearTotalHours / 30;

        // find the entry's daily average percentage of the whole project
        $scope.Gamma.yearDailyAvgPctg = ( $scope.Gamma.yearAvg * 100 ) / $scope.Gamma.goalTimeInMin;
    }

    /**
     * Project totals
     */
     $scope.Gamma.totalAccumulated = $scope.Gamma.sumOfEntries;

     $scope.Gamma.totalAccumulatedHours = $scope.Gamma.totalAccumulated / 60;

     $scope.Gamma.totalAccumulatedPctg = ( $scope.Gamma.totalAccumulated * 100 ) / $scope.Gamma.goalTimeInMin;

});
