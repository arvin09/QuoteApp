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
    var  myfavourite = localStorage.myfavourite || '';

    $scope.isFavArray = myfavourite ? JSON.parse(myfavourite) : [] ;


   console.log($scope.isFavArray);

    $scope.quotes = [
      {id:0,desc:'Walking with a friend in the dark is better than walking alone in the light.',type:'motivation',isfav:false},
      {id:1,desc:'The greatest gift of life is friendship, and I have received it.',type:'Leadership',isfav:false},
      {id:2,desc:'I cannot even imagine where I would be today were it not for that handful of friends who have given me a heart full of joy. Lets face it, friends make life a lot more fun.',type:'funny', isfav:false},
      {id:3,desc:'Walking with a friend in the dark is better than walking alone in the light.',type:'friendship', isfav:false},
      {id:4,desc:'The greatest gift of life is friendship, and I have received it.',type:'life', isfav:false},
      {id:5,desc:'I cannot even imagine where I would be today were it not for that handful of friends who have given me a heart full of joy. Lets face it, friends make life a lot more fun.',type:'life', isfav:false},
      {id:6,desc:'Walking with a friend in the dark is better than walking alone in the light.',type:'love', isfav:false},
      {id:7,desc:'The greatest gift of life is friendship, and I have received it.',type:'motivation', isfav:false},
      {id:8,desc:'I cannot even imagine where I would be today were it not for that handful of friends who have given me a heart full of joy. Lets face it, friends make life a lot more fun.',type:'friendship', isfav:false},
      {id:9,desc:'Walking with a friend in the dark is better than walking alone in the light.',type:'birthday', isfav:false},
      {id:10,desc:'The greatest gift of life is friendship, and I have received it.',type:'Inspirational', isfav:false},
      {id:11,desc:'I cannot even imagine where I would be today were it not for that handful of friends who have given me a heart full of joy. Lets face it, friends make life a lot more fun.',type:'motivation', isfav:false}
    ];

    for(var quoteId in $scope.isFavArray) {
      var id = $scope.isFavArray[quoteId];
      $scope.quotes[id].isfav = true;
    }

    $scope.showDetails = function(quote){
      $scope.currentSelectedQuote = quote;
      angular.element('.currentQuote-app-modal-sm').modal('show');
    };

  }]);
