'use strict';
var app = angular.module('quoteApp');
app.controller('SideMenuCtrl', ['$scope','srvAuth','gplusUtil','$rootScope', function ($scope,srvAuth,gplusUtil,$rootScope) { 
	
	$scope.fblogin = function(){
		srvAuth.fblogin();
		$rootScope.socialApi = 'facebook';
	};

	$scope.logout = function(){
		if($rootScope.socialApi === 'facebook'){
			srvAuth.logout();
		}else if($rootScope.socialApi === 'gplus'){
			gplusUtil.logout();
		}

	};

	$scope.gplusLogin = function(){
		gplusUtil.login();
		$rootScope.socialApi = 'gplus';
	};

}]);