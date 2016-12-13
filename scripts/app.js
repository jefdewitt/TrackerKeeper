/**
 * Creates our module (AngularJS app) - note the empty array brackets. Also,
 * this file is mainly used for configuration. It can but shouldn't be used for
 * containing controllers, directives, or services.
 *
 * Updated 12.11.16 -- added ngRoute for all our routing needs. Following
 * tutorial for adding views found @:
 * https://scotch.io/tutorials/single-page-apps-with-angularjs-routing-and-templating
 */

 // script.js

     // create the module and name it scotchApp
     var scotchApp = angular.module('scotchApp', ['ngRoute']);

     // configure our routes
     scotchApp.config(function($routeProvider) {
     $routeProvider

         // route for the home page
         .when('/', {
             templateUrl : 'pages/home-view.html',
             controller  : 'homeCtlr'
         })

         // route for the about page
         .when('/about', {
             templateUrl : 'pages/projects-list-view.html',
             controller  : 'listCtlr'
         })

         // route for the contact page
         .when('/contact', {
             templateUrl : 'pages/single-project-view.html',
             controller  : 'singleCtlr'
         });
 });

 // create the controller and inject Angular's $scope
 scotchApp.controller('homeCtlr', function($scope) {
     // create a message to display in our view
     $scope.message = 'Everyone come and see how good I look!';
 });

 scotchApp.controller('listCtlr', function($scope) {
     $scope.message = 'Look! I am an about page.';
 });

 scotchApp.controller('singleCtlr', function($scope) {
     $scope.message = 'Contact us! JK. This is just a demo.';
 });

/**
 * This code block would change our interpolation characters. Handy if building
 * on top of a templating engine, i.e. Jekyll.
 */
// angular.module('angularApp', []).config(function($interpolateProvider){
//     $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
// })
