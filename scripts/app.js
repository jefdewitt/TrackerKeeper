/**
 * Creates our module (AngularJS app) - note the empty array brackets. Also,
 * this file is mainly used for configuration. It can but shouldn't be used for
 * containing controllers, directives, or services.
 *
 * Updated 12.11.16 -- added ngRoute for all our routing needs. Following
 * tutorial for adding views found @:
 * https://scotch.io/tutorials/single-page-apps-with-angularjs-routing-and-templating
 */
angular.module('angularApp', ['ngRoute'])

// configure our routes
.config(function($routeProvider) {
     $routeProvider

         // route for the home page
         .when('/', {
             templateUrl : 'pages/home-view.html',
             controller  : 'homeCtlr'
         })

         // route for the new project page
         .when('/new-project-view', {
             templateUrl : 'pages/new-project-view.html',
             controller  : 'newCtlr'
         })

         // route for the list page
         .when('/projects-list-view', {
             templateUrl : 'pages/projects-list-view.html',
             controller  : 'listCtlr'
         })

         // route for the project input page
         .when('/project-input', {
             templateUrl : 'pages/project-input-view.html',
             controller  : 'inputCtlr'
         });

         // route for the project output page
         .when('/project-output', {
             templateUrl : 'pages/project-output-view.html',
             controller  : 'outputCtlr'
         });
 });

/**
 * This code block would change our interpolation characters. Handy if building
 * on top of a templating engine, i.e. Jekyll.
 */
// angular.module('angularApp', []).config(function($interpolateProvider){
//     $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
// })
