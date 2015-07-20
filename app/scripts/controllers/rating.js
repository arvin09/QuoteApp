'use strict';
var app = angular.module('quoteApp');
app.controller('RatingCtrl', ['$scope','$rootScope', function ($scope,$rootScope) {
	$rootScope.quoteFilter = false;
	$scope.rating = 'rating';
}]);