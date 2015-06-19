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
    $scope.init = function(){
      console.log('angular init');
    };
    $scope.quoteType = $routeParams.quoteType || '';
    $scope.quotes = [
      {id:1,desc:'Walking with a friend in the dark is better than walking alone in the light.',type:'motivation'},
      {id:2,desc:'The greatest gift of life is friendship, and I have received it.'},
      {id:3,desc:'I cannot even imagine where I would be today were it not for that handful of friends who have given me a heart full of joy. Lets face it, friends make life a lot more fun.',type:'funny'},
      {id:1,desc:'Walking with a friend in the dark is better than walking alone in the light.',type:'friendship'},
      {id:2,desc:'The greatest gift of life is friendship, and I have received it.',type:'life'},
      {id:3,desc:'I cannot even imagine where I would be today were it not for that handful of friends who have given me a heart full of joy. Lets face it, friends make life a lot more fun.',type:'life'},
      {id:1,desc:'Walking with a friend in the dark is better than walking alone in the light.',type:'love'},
      {id:2,desc:'The greatest gift of life is friendship, and I have received it.',type:'motivation'},
      {id:3,desc:'I cannot even imagine where I would be today were it not for that handful of friends who have given me a heart full of joy. Lets face it, friends make life a lot more fun.',type:'friendship'},
      {id:1,desc:'Walking with a friend in the dark is better than walking alone in the light.',type:'birthday'},
      {id:2,desc:'The greatest gift of life is friendship, and I have received it.',type:'inspiration'},
      {id:3,desc:'I cannot even imagine where I would be today were it not for that handful of friends who have given me a heart full of joy. Lets face it, friends make life a lot more fun.',type:'motivation'}
    ];
  }]);
