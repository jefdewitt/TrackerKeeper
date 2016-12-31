'use strict';

angular.module('angularApp')

.controller('outputCtlr', function ($scope, $location, project) {

    $scope.go = function ( path ) {
        $location.path( path );
    }

    $scope.Gamma = project;

    // establish project completion time in minutes
    $scope.Gamma.goalTimeInMin = $scope.Gamma.time * 60;

    /**
     * This not-so-complex timeStamp check, to determine whether entries were
     * made the same day so we can combine them and they won't mess up our
     * averages, had me on the verge of giving up. On all things in life.
     */
    // if there are enough entries, compare the timeStamps to see if they're made the same day
    if( $scope.Gamma.entries.length > 1 ) {
        // if they're made the same day combine the minutes property
        if ( $scope.Gamma.entries.slice(-1)[0].timeStamp == $scope.Gamma.entries.slice(-2)[0].timeStamp ) {
            var newObject = {
                timeStamp: $scope.Gamma.entries.slice(-1)[0].timeStamp,
                minutes: $scope.Gamma.entries.slice(-1)[0].minutes + $scope.Gamma.entries.slice(-2)[0].minutes
            }
            // remove the entries from the same date
            $scope.Gamma.entries.splice(-2);
            // add the new entry with combined minutes
            $scope.Gamma.entries.push(newObject);
        }
    }

    // convert today's time entry into hours
    $scope.Gamma.todaysTime = $scope.Gamma.entries[0].minutes / 60;

    // find today's time entry as a percentage of the whole project
    $scope.Gamma.todaysPctg = ( $scope.Gamma.entries[0].minutes * 100 ) / $scope.Gamma.goalTimeInMin;

    // we use map to grab object properties from within arrays -- SO STOKED!!!
    $scope.Gamma.arrayMinutes = $scope.Gamma.entries.map(function(object) {
        return object.minutes;
    });

    // grab the sum of the entries
    $scope.Gamma.sumOfEntries = $scope.Gamma.arrayMinutes.reduce(function(a, b) {
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
        $scope.Gamma.weekDailyAvgPctg = ( $scope.Gamma.weekAvg * 100 ) / $scope.Gamma.time;

    } else {

        // if there are a week's worth of entries grab the last 7
        $scope.Gamma.recentWeek = $scope.Gamma.arrayMinutes.slice(-7);
        console.log($scope.Gamma.recentWeek);

        // add the week's worth of entries together
        $scope.Gamma.weekTotal = $scope.Gamma.recentWeek.reduce(function(a, b) {
            return a + b;
        }, 0);

        // convert sum to hours
        $scope.Gamma.weekTotalHours = $scope.Gamma.weekTotal / 60;

        // get the total of the week's hours as a percentage of the whole project
        $scope.Gamma.weekTotalPctg = ( $scope.Gamma.weekTotal * 100 ) / $scope.Gamma.goalTimeInMin;

        // if there are a week's worth of entries divide by 7
        $scope.Gamma.weekAvg = $scope.Gamma.weekTotalHours / 7;

        // find the week's daily average percentage of the whole project
        $scope.Gamma.weekDailyAvgPctg = ( $scope.Gamma.weekAvg * 100 ) / $scope.Gamma.time;

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
        $scope.Gamma.monthDailyAvgPctg = ( $scope.Gamma.monthAvg * 100 ) / $scope.Gamma.time;

    } else {

        // if there are a month's worth of entries grab the last 30
        $scope.Gamma.recentMonth = $scope.Gamma.arrayMinutes.slice(-30);

        // add the month's worth of entries together
        $scope.Gamma.monthTotal = $scope.Gamma.recentMonth.reduce(function(a, b) {
            return a + b;
        }, 0);

        // convert sum to hours
        $scope.Gamma.monthTotalHours = $scope.Gamma.monthTotal / 60;

        // get the total of the month's hours as a percentage of the whole project
        $scope.Gamma.monthTotalPctg = ( $scope.Gamma.monthTotal * 100 ) / $scope.Gamma.goalTimeInMin;

        // if there are a month's worth of entries divide by 30
        $scope.Gamma.monthAvg = $scope.Gamma.monthTotalHours / 30;

        // find the month's daily average percentage of the whole project
        $scope.Gamma.monthDailyAvgPctg = ( $scope.Gamma.monthAvg * 100 ) / $scope.Gamma.time;
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
        $scope.Gamma.yearDailyAvgPctg = ( $scope.Gamma.yearAvg * 100 ) / $scope.Gamma.time;

    } else {

        // if there are a years's worth of entries grab the last 365
        $scope.Gamma.recentYear = $scope.Gamma.arrayMinutes.slice(-365);

        // add the month's worth of entries together
        $scope.Gamma.yearTotal = $scope.Gamma.recentYear.reduce(function(a, b) {
            return a + b;
        }, 0);

        // convert sum to hours
        $scope.Gamma.yearTotalHours = $scope.Gamma.yearTotal / 60;

        // get the total of the years's hours as a percentage of the whole project
        $scope.Gamma.yearTotalPctg = ( $scope.Gamma.yearTotal * 100 ) / $scope.Gamma.goalTimeInMin;

        // if there are a year's worth of entries divide by 30
        $scope.Gamma.yearAvg = $scope.Gamma.yearTotalHours / 30;

        // find the entry's daily average percentage of the whole project
        $scope.Gamma.yearDailyAvgPctg = ( $scope.Gamma.yearAvg * 100 ) / $scope.Gamma.time;
    }

    /**
     * Project totals
     */
     $scope.Gamma.totalAccumulated = $scope.Gamma.sumOfEntries;

     $scope.Gamma.totalAccumulatedHours = $scope.Gamma.totalAccumulated / 60;

     $scope.Gamma.totalAccumulatedPctg = ( $scope.Gamma.totalAccumulated * 100 ) / $scope.Gamma.goalTimeInMin;

});
