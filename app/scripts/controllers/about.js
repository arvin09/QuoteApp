'use strict';
var app = angular.module('quoteApp');
app.controller('AboutCtrl', ['$scope','$rootScope', function ($scope,$rootScope) {
	$rootScope.quoteFilter = false;
	$scope.about = 'about';
	console.log('About');
}]);