'use strict';
var app = angular.module('gplusAuth',[]);

app.factory('gplusUtil', ['$rootScope',function ($rootScope){
	var gplus = {};
	var auth2 = {};
    
	gplus.login = function(){
		auth2 = gapi.auth2.getAuthInstance();
		auth2.signIn();
	};

	gplus.watchSignInChange = function(){
		auth2 = gapi.auth2.getAuthInstance();
		auth2.isSignedIn.listen(function(isAuthenticated){
			if(isAuthenticated){
				gapi.client.load('plus','v1', function(){
			     var request = gapi.client.plus.people.get({
			       'userId': 'me'
			     });
			     request.execute(function(response) {
			       //console.log('Retrieved profile for:', response);
			       $rootScope.$apply(function() {
			       	$rootScope.socialApi = 'gplus';
	                $rootScope.user = response;
	                $rootScope.user.first_name = response.name.givenName;
	                $rootScope.user.login = true;
	                $rootScope.user.profilePic = response.image.url;
	                //sessionStorage.setItem('user',JSON.stringify($rootScope.user));
	                //console.info($rootScope.user);
	              });
			     });
			    });
			}
		});
	};

	

	gplus.logout = function(){

		auth2 = gapi.auth2.getAuthInstance();
		console.log(auth2);
	    auth2.signOut().then(function(){
		    $rootScope.$apply(function() {
		    	$rootScope.user = {}; 
		    	console.log('logout');
		    });
	    }); 
	    //sessionStorage.removeItem('user'); 
	    
	};

	return gplus;
}]);