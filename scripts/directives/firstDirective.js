'use strict';

angular.module('testApp')

    .directive('firstDirective', function() {
        return {
            template: 'Hello World',
            controller: 'newCtrl',
            replace: true
        }
    });
