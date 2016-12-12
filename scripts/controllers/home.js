'use strict';

angular.module('angularApp')

// create the controller and inject Angular's $scope
.controller('homeCtlr', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});
