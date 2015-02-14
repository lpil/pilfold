'use strict';

/**
 * @ngdoc overview
 * @name pilfoldFront
 * @description
 * # pilfoldFront
 *
 * Main module of the application.
 */
angular
  .module('pilfoldFront', [
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
