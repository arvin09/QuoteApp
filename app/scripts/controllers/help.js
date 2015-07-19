'use strict';
var app = angular.module('quoteApp');
app.controller('HelpCtrl', ['$scope','$rootScope', function ($scope,$rootScope) {
	$rootScope.quoteFilter = false;
	$scope.help = 'This is  Help template';
}]);