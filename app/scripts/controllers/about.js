'use strict';

/**
 * @ngdoc function
 * @name pilfoldFront.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the pilfoldFront
 */
angular.module('pilfoldFront')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
