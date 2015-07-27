'use strict';

/**
 * @ngdoc function
 * @name quoteAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the quoteApp
 */
var app = angular.module('quoteApp');
 app.controller('MainCtrl', ['$scope','$routeParams','$rootScope',function($scope,$routeParams,$rootScope){
    $scope.init = function(){
      console.log('angular init');
    };
    $rootScope.quoteFilter = true;
    $scope.quoteType = $routeParams.quoteType || '';
    $scope.quotes = [
      {id:1,desc:'Walking with a friend in the dark is better than walking alone in the light.',type:'motivation'},
      {id:2,desc:'The greatest gift of life is friendship, and I have received it.'},
      {id:3,desc:'I cannot even imagine where I would be today were it not for that handful of friends who have given me a heart full of joy. Lets face it, friends make life a lot more fun.',type:'funny'},
      {id:4,desc:'Walking with a friend in the dark is better than walking alone in the light.',type:'friendship'},
      {id:5,desc:'The greatest gift of life is friendship, and I have received it.',type:'life'},
      {id:6,desc:'I cannot even imagine where I would be today were it not for that handful of friends who have given me a heart full of joy. Lets face it, friends make life a lot more fun.',type:'life'},
      {id:7,desc:'Walking with a friend in the dark is better than walking alone in the light.',type:'love'},
      {id:8,desc:'The greatest gift of life is friendship, and I have received it.',type:'motivation'},
      {id:9,desc:'I cannot even imagine where I would be today were it not for that handful of friends who have given me a heart full of joy. Lets face it, friends make life a lot more fun.',type:'friendship'},
      {id:10,desc:'Walking with a friend in the dark is better than walking alone in the light.',type:'birthday'},
      {id:11,desc:'The greatest gift of life is friendship, and I have received it.',type:'Inspirational'},
      {id:12,desc:'I cannot even imagine where I would be today were it not for that handful of friends who have given me a heart full of joy. Lets face it, friends make life a lot more fun.',type:'motivation'}
    ];

    $scope.showDetails = function(quote){
      $scope.currentSelectedQuote = quote;
      angular.element('.currentQuote-app-modal-sm').modal('show') 
    };

  }]);
