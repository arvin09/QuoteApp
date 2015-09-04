'use strict';
var app = angular.module('quoteApp');
app.controller('FavouriteCtrl', ['$scope','$rootScope', function ($scope) {
  $scope.showDetails = function(quote){
    $scope.currentSelectedQuote = quote;
    angular.element('.currentQuote-app-modal-sm').modal('show');
  };
}]);
