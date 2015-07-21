'use strict';
var app = angular.module('quoteApp');
app.controller('RatingCtrl', ['$scope', function ($scope) {
	$scope.rating = 3;
  	$scope.rateFunction = function(rating) {
    	console.log('Rating selected: ' + rating);
  	};
}]);