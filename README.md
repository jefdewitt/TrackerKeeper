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

## Directives Used

A directive is an element or an element attribute. Some directives I used here are:

`ng-click` - Used on any element to capturea click event.

            Example usage <a href="" ng-click="editing">Enter</a>

`ng-blur` - Fires when an element loses focus.

            Example usage <label ng-blur="editing = false"></label>

`ng-show` - Hides an element until the attribute evaluates to true `ng-show`.

            Example usage <input ng-show="editing">
             
`ng-class` - Takes an object as an attribute. Adds the object key as a class to the element when the value of that object evaluates to true.

            Example usage <div ng-class="{'editing-item': editing}"></div>
            
`ng-repeat` - Loops thru a JavaScript array or object. The syntax is `someItem in someIterable`. Every item in `ng-repeat` has its own `$scope`.

            Example usage <div ng-repeat="item in items"></div>
            
`ng-change` - Fires off when the value of an input changes.

            Example usage <input ng-change="item.edited = true">

## TODO

- Refine the UI
- Update to hybrid app via Ionic

## Screenshot

![Tracker Keeper app images](/tracker-keeper.jpg?raw=true "Tracker Keeper app images")

## Comments

Any questions or comments please send them my way [here](http://www.jefdewitt.com/connect).

