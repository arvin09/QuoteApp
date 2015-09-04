'use strict';

/**
 * @ngdoc function
 * @name quoteAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the quoteApp
 */
var app = angular.module('quoteApp');
 app.controller('MainCtrl', ['$scope','$routeParams',function($scope,$routeParams){

    $scope.quoteType = $routeParams.quoteType || '';

    $scope.showDetails = function(quote){
      $scope.currentSelectedQuote = quote;
      angular.element('.currentQuote-app-modal-sm').modal('show');
    };

  }]);
