'use strict';

/**
 * @ngdoc function
 * @name quoteAppApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the quoteAppApp
 */
angular.module('quoteAppApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
