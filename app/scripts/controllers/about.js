'use strict';

/**
 * @ngdoc function
 * @name pilfoldApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pilfoldApp
 */
angular.module('pilfoldApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
