'use strict';
var app = angular.module('quoteApp');
app.controller('sideMenuCtrl', ['$scope', function ($scope) {
	$scope.login = false;
	$scope.userDetails = null;
	
	$scope.fblogin = function(){
		FB.login(function(response) {
			if (response.authResponse) {
				console.log('Welcome!  Fetching your information.... ');
				FB.api('/me', function(response) {
					
					$scope.$apply(function(){
						$scope.login = true;
						$scope.userDetails = response;
						$scope.userDetails.profilePic = 'http://graph.facebook.com/'+$scope.userDetails.id+'/picture';	
					});
					console.log('login', $scope.login);
					console.log('Good to see you, ' + response.name + '.');
					console.log('User Object',  response);
					
				});
			} else {
				console.log('User cancelled login or did not fully authorize.');
			}
		});
	};

	$scope.fblogout = function(){
		FB.logout(function(response){
			console.log('user logged out !!', response);
			$scope.$apply(function(){
				$scope.login = false;
				$scope.userDetails = null;
			});
		});
	};
}]);