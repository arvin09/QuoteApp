'use strict';
var app = angular.module('quoteApp');
app.controller('AboutCtrl', ['$scope', function ($scope) {
	$scope.about = 'about';
	console.log('About');
}]);