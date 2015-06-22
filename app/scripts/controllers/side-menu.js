'use strict';
var app = angular.module('quoteApp');
app.controller('sideMenuCtrl', ['$scope','srvAuth', function ($scope,srvAuth) {
	
	$scope.fblogin = function(){
		srvAuth.fblogin();
	};

	$scope.fblogout = function(){
		srvAuth.logout();
	};
}]);