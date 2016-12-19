'use strict';

angular.module('angularApp')

.controller('outputCtlr', function outputCtlr($scope, project) {
    $scope.message = "I'm a single project page";

    var second = this;

    second.project = project;

});
