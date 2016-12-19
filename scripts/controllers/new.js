'use strict';

angular.module('angularApp')

.controller('newCtlr', function newCtlr($scope, project) {
    $scope.message = 'Look! I am a list page.';

    var first = this;

    first.project = project;

});
