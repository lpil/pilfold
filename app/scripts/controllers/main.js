'use strict';

/**
 * @ngdoc function
 * @name pilfoldApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the pilfoldApp
 */
angular.module('pilfoldApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
