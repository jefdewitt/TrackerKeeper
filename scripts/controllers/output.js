'use strict';

angular.module('angularApp')

.controller('outputCtlr', function ($scope, $location, goalToBeTracked) {

    $scope.go = function ( path ) {
        $location.path( path );
    }

    $scope.Output = goalToBeTracked;

    // establish project completion time in minutes
    $scope.Output.goalTimeInMin = $scope.Output.time * 60;

    /**
     * This not-so-complex timeStamp check, to determine whether entries were
     * made the same day so we can combine them and they won't mess up our
     * averages, had me on the verge of giving up. On all things in life.
     */
    // if there are enough entries, compare the timeStamps to see if they're made the same day
    if( $scope.Output.entries.length > 1 ) {
        // if they're made the same day combine the minutes property
        if ( $scope.Output.entries.slice(-1)[0].timeStamp == $scope.Output.entries.slice(-2)[0].timeStamp ) {
            var newObject = {
                timeStamp: $scope.Output.entries.slice(-1)[0].timeStamp,
                minutes: $scope.Output.entries.slice(-1)[0].minutes + $scope.Output.entries.slice(-2)[0].minutes
            }
            // remove the entries from the same date
            $scope.Output.entries.splice(-2);
            // add the new entry with combined minutes
            $scope.Output.entries.push(newObject);
        }
    }

    // convert today's time entry into hours
    $scope.Output.todaysTime = $scope.Output.entries[0].minutes / 60;

    // find today's time entry as a percentage of the whole project
    $scope.Output.todaysPctg = ( $scope.Output.entries[0].minutes * 100 ) / $scope.Output.goalTimeInMin;

    // we use map to grab object properties from within arrays -- SO STOKED!!!
    $scope.Output.arrayMinutes = $scope.Output.entries.map(function(object) {
        return object.minutes;
    });

    // grab the sum of the entries
    $scope.Output.sumOfEntries = $scope.Output.arrayMinutes.reduce(function(a, b) {
        return a + b;
    }, 0);

    /**
     * weekly daily average algorithms
     */
    if ( $scope.Output.entries.length < 6 ) {

        // convert sum to hours
        $scope.Output.weekTotalHours = $scope.Output.sumOfEntries / 60;

        // get the total of the entry's hours as a percentage of the whole project
        $scope.Output.weekTotalPctg = ( $scope.Output.sumOfEntries * 100 ) / $scope.Output.goalTimeInMin;

        // divide the sum of the entries by the number of entries
        $scope.Output.weekAvg = $scope.Output.weekTotalHours / $scope.Output.entries.length;

        // find the entry's daily average percentage of the whole project
        $scope.Output.weekDailyAvgPctg = ( $scope.Output.weekAvg * 100 ) / $scope.Output.time;

    } else {

        // if there are a week's worth of entries grab the last 7
        $scope.Output.recentWeek = $scope.Output.arrayMinutes.slice(-7);

        // add the week's worth of entries together
        $scope.Output.weekTotal = $scope.Output.recentWeek.reduce(function(a, b) {
            return a + b;
        }, 0);

        // convert sum to hours
        $scope.Output.weekTotalHours = $scope.Output.weekTotal / 60;

        // get the total of the week's hours as a percentage of the whole project
        $scope.Output.weekTotalPctg = ( $scope.Output.weekTotal * 100 ) / $scope.Output.goalTimeInMin;

        // if there are a week's worth of entries divide by 7
        $scope.Output.weekAvg = $scope.Output.weekTotalHours / 7;

        // find the week's daily average percentage of the whole project
        $scope.Output.weekDailyAvgPctg = ( $scope.Output.weekAvg * 100 ) / $scope.Output.time;

    }

    /**
     * monthly daily average algorithms
     */

    if ( $scope.Output.entries.length < 29 ) {

        // convert sum to hours
        $scope.Output.monthTotalHours = $scope.Output.sumOfEntries / 60;

        // get the total of the entry's hours as a percentage of the whole project
        $scope.Output.monthTotalPctg = ( $scope.Output.sumOfEntries * 100 ) / $scope.Output.goalTimeInMin;

        // divide the sum of the entries by the number of entries
        $scope.Output.monthAvg = $scope.Output.monthTotalHours / $scope.Output.entries.length;

        // find the entry's daily average percentage of the whole project
        $scope.Output.monthDailyAvgPctg = ( $scope.Output.monthAvg * 100 ) / $scope.Output.time;

    } else {

        // if there are a month's worth of entries grab the last 30
        $scope.Output.recentMonth = $scope.Output.arrayMinutes.slice(-30);

        // add the month's worth of entries together
        $scope.Output.monthTotal = $scope.Output.recentMonth.reduce(function(a, b) {
            return a + b;
        }, 0);

        // convert sum to hours
        $scope.Output.monthTotalHours = $scope.Output.monthTotal / 60;

        // get the total of the month's hours as a percentage of the whole project
        $scope.Output.monthTotalPctg = ( $scope.Output.monthTotal * 100 ) / $scope.Output.goalTimeInMin;

        // if there are a month's worth of entries divide by 30
        $scope.Output.monthAvg = $scope.Output.monthTotalHours / 30;

        // find the month's daily average percentage of the whole project
        $scope.Output.monthDailyAvgPctg = ( $scope.Output.monthAvg * 100 ) / $scope.Output.time;
    }

    /**
     * yearly daily average algorithms
     */
    if ( $scope.Output.entries.length < 364 ) {

        // convert sum to hours
        $scope.Output.yearTotalHours = $scope.Output.sumOfEntries / 60;

        // get the total of the entry's hours as a percentage of the whole project
        $scope.Output.yearTotalPctg = ( $scope.Output.sumOfEntries * 100 ) / $scope.Output.goalTimeInMin;

        // divide the sum of the entries by the number of entries
        $scope.Output.yearAvg = $scope.Output.yearTotalHours / $scope.Output.entries.length;

        // find the entry's daily average percentage of the whole project
        $scope.Output.yearDailyAvgPctg = ( $scope.Output.yearAvg * 100 ) / $scope.Output.time;

    } else {

        // if there are a years's worth of entries grab the last 365
        $scope.Output.recentYear = $scope.Output.arrayMinutes.slice(-365);

        // add the month's worth of entries together
        $scope.Output.yearTotal = $scope.Output.recentYear.reduce(function(a, b) {
            return a + b;
        }, 0);

        // convert sum to hours
        $scope.Output.yearTotalHours = $scope.Output.yearTotal / 60;

        // get the total of the years's hours as a percentage of the whole project
        $scope.Output.yearTotalPctg = ( $scope.Output.yearTotal * 100 ) / $scope.Output.goalTimeInMin;

        // if there are a year's worth of entries divide by 30
        $scope.Output.yearAvg = $scope.Output.yearTotalHours / 30;

        // find the entry's daily average percentage of the whole project
        $scope.Output.yearDailyAvgPctg = ( $scope.Output.yearAvg * 100 ) / $scope.Output.time;
    }

    /**
     * Project totals
     */
     $scope.Output.totalAccumulated = $scope.Output.sumOfEntries;

     $scope.Output.totalAccumulatedHours = $scope.Output.totalAccumulated / 60;

     $scope.Output.totalAccumulatedPctg = ( $scope.Output.totalAccumulated * 100 ) / $scope.Output.goalTimeInMin;

});
