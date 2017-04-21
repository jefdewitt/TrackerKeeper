'use strict';

angular.module('angularApp')

.directive('calendarDate', function($scope, $localStorage, goalToBeTracked, $compile) {
  function linkFunction($scope, elem, attrs) {
      elem.bind('click', function() {
          console.log('Click detected!!!!!!!');
      })
  }

    return {
        template: '<span ng-click="changeDate()" calendar-date>Click me!</span>',
        restrict: 'AE',
        link: linkFunction,
        scope: true
        // controller: 'firstCtrl'
    }
})
