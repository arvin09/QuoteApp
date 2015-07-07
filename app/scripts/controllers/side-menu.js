'use strict';
var app = angular.module('quoteApp');
app.controller('SideMenuCtrl', ['$scope','fbUtil','gplusUtil','$rootScope', function ($scope,fbUtil,gplusUtil,$rootScope) { 
	
	$scope.fblogin = function(){
		fbUtil.fblogin();
		$rootScope.socialApi = 'facebook';
	};

	$scope.logout = function(){
		if($rootScope.socialApi === 'facebook'){
			fbUtil.logout();
		}else if($rootScope.socialApi === 'gplus'){
			gplusUtil.logout();
		}
	};

	$scope.gplusLogin = function(){
		gplusUtil.login();
		$rootScope.socialApi = 'gplus';
	};

}]);