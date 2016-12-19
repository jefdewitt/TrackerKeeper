'use strict';

angular.module('angularApp')

.controller('newCtlr', function($scope, project) {
    $scope.message = 'Look! I am a list page.';

    var first = this;

    first.project = project;

});
