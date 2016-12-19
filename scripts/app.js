/**
 * Creates our module (AngularJS app) - note the empty array brackets. Also,
 * this file is mainly used for configuration. It can but shouldn't be used for
 * containing controllers, directives, or services.
 *
 * Updated 12.11.16 -- added ngRoute for all our routing needs. Following
 * tutorial for adding views found @:
 * https://scotch.io/tutorials/single-page-apps-with-angularjs-routing-and-templating
 */
angular.module('angularApp', ['ui.router'])

.config(function config($stateProvider) {

    $stateProvider.state('home', {
        url:'/home-view',
        controller:'homeCtrl as home',
        templateuUrl:'pages/home-view.html'
    })

    $stateProvider.state('first', {
        url:'/new-project-view',
        controller:'newCtrl as first',
        templateuUrl:'pages/new-project-view.html'
    })

    $stateProvider.state('second', {
        url:'/project-output-view',
        controller:'outputCtrl as second',
        templateuUrl:'pages/project-output-view.html'
    })
})

.service('project', function Project() {
    var project = this;
    project.name = 'Default';
    project.time = 'Default';

})


// create the controller and inject Angular's $scope
.controller('homeCtlr', function homeCtlr() {

})

.controller('newCtlr', function newCtlr(project) {
    var first = this;
    first.project = project;
})

.controller('outputCtlr', function outputCtlr(project) {
    var second = this;
    second.project = project;
});
/**
 * This code block would change our interpolation characters. Handy if building
 * on top of a templating engine, i.e. Jekyll.
 */
// angular.module('angularApp', []).config(function($interpolateProvider){
//     $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
// })
