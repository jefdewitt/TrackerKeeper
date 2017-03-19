# Tracker Keeper

Tracker Keeper is a goal management tool written in AngularJS. It's a single page application that I'm currently hosting on my portfolio site at [http://jefdewitt.com/trackerkeeper/](http://jefdewitt.com/trackerkeeper/#/). Since this AngularJS app was built on a Jekyll framework there are some idiosyncrasies to it, which I'll point out below.

I created Tracker Keeper as a means to chart my progress toward specific goals, goals measured in time. Tracker Keeper makes it easy to track the time you spend toward achieving these goals, and uses simple algebra to document the headway your making to keep you motivated. 

# Requirements

- AngularJS 1.2.13+
- angular-route
- angular-animate
- ngStorage

# Installation

Go to [https://angularjs.org/](https://angularjs.org/) to get a fresh AngularJS download or use `NPM`. It's a best practice to use the same versions when available. So, if you're using AngularJS 1.2.13, try using ng modules that are version 1.2.13. The syntax for that is `npm install <module-name>@1.2.13`, for example.

### NPM

```bash
npm install angular
```

```bash
npm install angular-route
```

```bash
npm install angular-animate
```

```bash
npm install ngstorage
```

## Table Of Contents

- [CORS Fix](#cors-fix)
- [Updated Interpolation Characters](#updated-interpolation-characters)
- [$scope](#scope)
- [Dependency Injection](#dependency-injection)
- [Directives](#directives)
- [TODO](#todo)
- [Screeshot](#screeshot)
- [Comments](#comments)

## CORS Fix

Sited from the Wikipedia article on [cross-origin resource sharing](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing), CORS is a mechanism that allows restricted resources (e.g. fonts) on a web page to be requested from another domain outside the domain from which the first resource was served. Local Angular development may cause the browser to freak out and throw this error. I got your back. Install the node package `http-server` via,

```bash
npm install http-server -g
```

Then run...

```bash
http-server
```

...to spin up a local server that you can develop your app with. After starting the server you'll get info on your local development URL that'll look like this:

```bash
Starting up http-server, serving ./
Available on:
  http://127.0.0.1:8080
  http://192.168.2.2:8080
Hit CTRL-C to stop the server
```

## Updated Interpolation Characters

Because the version of this app on my portfolio site sits atop Jekyll software, I ran into an issue with interpolation characters. AngularJS and the TWIG templating engine that powers Jekyll both use `{{ }}` characters for declaring statements. TWIG was effectively cancelling out Angular statements and the result was empty white space. The solution I implemented was adding a config to the `app.js` file, changing the characters to `{[{ }]}`.

```javascript
angular.module('angularApp', ['ngRoute', 'ngStorage'])

.config(function($interpolateProvider){
    $interpolateProvider.startSymbol('{[{').endSymbol('}]}');
})
```

## $scope

`$scope` is an Angular object used to tell an application what part of a template a controller applies to.

## Dependency Injection

`Services` are used to supply application logic across the entire application. Whereas a `controller` is confined by `$scope` to a portion of a template, `services` can be used throughout an application by way of `dependency injection`. `Dependency injection` is just a fancy way of saying that a method's dependencies must be listed as arguments for that method. Multiple `controllers` can use a `service` as long as they define the `service` as a dependency.

```javascript
.service('dataService', function($http) {
    // Service logic goes here.
})
```

In the `service` example, the `$http` is a built-in Angular method. These built in methods are called `providers`. This is a perfect example of `dependency injection`.

```javascript
.controller ('mainCtrl', function($scope, dataService) {
    // Controller logic goes here.
})
```

The example above shows the 'dataService' `service` being injected into the 'mainCtrl' `controller`.

## Directives

A directive is an Angular element or an element attribute. Some directives I used here are:

`ng-app` - Indicates which part of the page (all or part, up to you) is the root of the Angular application. Angular reads the HTML within that root and compiles it into an internal representation. This reading and compiling is the `bootstrapping` process.

            Example usage <body ng-app="angularApp" class="app__body">
            
The ng-app argument directly matches the module name. 

            Example angular.module('angularApp', [])

`ng-click` - Used on any element to capturea click event.

            Example usage <input ng-click="editing">

`ng-blur` - Fires when an element loses focus.

            Example usage <label ng-blur="editing = false"></label>

`ng-show` - Hides an element until the attribute evaluates to true `ng-show`.

            Example usage <input ng-show="editing">
             
`ng-class` - Takes an object as an attribute. Adds the object key as a class to the element when the value of that object evaluates to true.

            Example usage <div ng-class="{'editing-item': editing, 'edited': item.edited}"></div>
            
`ng-change` - Fires off when the value of an input changes.

            Example usage <input ng-change="item.edited = true">
            
`ng-repeat` - Loops thru a JavaScript array or object. The syntax is `someItem in someIterable`. Every item in `ng-repeat` has its own `$scope`.

            Example usage <div ng-repeat="item in items"></div>
            
A variable available to `ng-repeat` elements is `$index`. As you might have guessed, it represents the index of the element within the `ng-repeat` array or object.

            Example usage in the template:
            
                    <a href="" ng-click="deleteItem(item, $index)"></a>
            
            Example usage in the controller:
            
                    $scope.deleteItem = function(item, $index) {
                        $scope.items.splice($index, 1);
                    };

## TODO

- Refine the UI
- Update to hybrid app via Ionic

## Screenshot

![Tracker Keeper app images](/tracker-keeper.jpg?raw=true "Tracker Keeper app images")

## Comments

Any questions or comments please send them my way [here](http://www.jefdewitt.com/connect).

