'use strict';

/**
 * @ngdoc overview
 * @name pilfoldApp
 * @description
 * # pilfoldApp
 *
 * Main module of the application.
 */
angular
  .module('pilfoldApp', [
    'ngAria',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
