/**
 * If I understand this correctly, services allow us to pass data between
 * controllers. This is how we'll share our project object(s); Refer to this
 * tutorial for more info: https://egghead.io/lessons/angularjs-sharing-data-between-controllers.
 * In it, the dev refers to the service itself as the object. Go figure.
 */
'use strict';

angular.module('angularApp')

.service('project', function Project() {

    var project = this;

    project.name = '';

    project.time = '';

    project.timer = '';

    project.entries = [];

});
