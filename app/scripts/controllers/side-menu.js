'use strict';
var app = angular.module('quoteApp');
app.controller('sideMenuCtrl', ['$scope','srvAuth','gplusUtil', function ($scope,srvAuth,gplusUtil) { 
	
	$scope.fblogin = function(){
		srvAuth.fblogin();
		$scope.social = 'facebook';
	};

	$scope.logout = function(){
		if($scope.social === 'facebook'){
			srvAuth.logout();
		}else if($scope.social === 'gplus'){
			gplusUtil.logout();
		}

	};

	$scope.gplusLogin = function(){
		gplusUtil.login();
		$scope.social = 'gplus';
	};

}]);