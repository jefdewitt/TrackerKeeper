angular.module('angularApp')

.directive('fields', function() {
    return {
        templateUrl: 'templates/fields.html',
        controller: 'firstCtrl',
        replace: true
    }
})
