'use strict';
var app = angular.module('gplusAuth',[]);

app.factory('gplusUtil', ['$rootScope',function ($rootScope){
	var gplus = {};
	var config = {
          'client_id': '696470903530-hd0ffdiqvrpfqvnkhoi6an077db8qd3k.apps.googleusercontent.com',
          'cookie_policy' : 'single_host_origin',
          'scope': 'https://www.googleapis.com/auth/plus.login'
    };
    
	gplus.login = function(){
		gapi.auth.authorize(config, function() {
		  console.log(gapi.auth.getToken());
          gapi.client.load('plus','v1', function(){
		     var request = gapi.client.plus.people.get({
		       'userId': 'me'
		     });
		     request.execute(function(response) {
		       //console.log('Retrieved profile for:', response);
		       $rootScope.$apply(function() {
                $rootScope.user = response;
                $rootScope.user.first_name = response.name.givenName;
                $rootScope.user.login = true;
                $rootScope.user.profilePic = response.image.url;
                sessionStorage.setItem('user',JSON.stringify($rootScope.user));
                //console.info($rootScope.user);
              });
		     });
		    });
        });
	};

	gplus.logout = function(){
	    $rootScope.user = {};  
	    sessionStorage.removeItem('user'); 
	    console.log('logout');
	};

	return gplus;
}]);