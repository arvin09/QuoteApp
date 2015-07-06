'use strict';
var app = angular.module('fbAuth',[]);
app.factory('srvAuth', ['$rootScope',function($rootScope) {
  var srvAuth = {};
  srvAuth.fblogin = function() {
    FB.login();        
  };

  srvAuth.watchLoginChange = function() {
    FB.getLoginStatus(function(response) {
      srvAuth.isLoggedIn(response);
    });

    FB.Event.subscribe('auth.statusChange', function(response){
     srvAuth.isLoggedIn(response);
   });
  };

  srvAuth.isLoggedIn = function(response){
    var _self = this;
    if (response.status === 'connected') {
      FB.api('/me', function(response) {
        $rootScope.$apply(function() {
          $rootScope.socialApi = 'facebook';
          $rootScope.user = _self.user = response;
          $rootScope.user.login = _self.user.login = true;
          $rootScope.user.profilePic = _self.user.profilePic = 'http://graph.facebook.com/'+response.id+'/picture';
        });
      });
    }else{
      console.log('Not Connected');
    }  
  };

  srvAuth.logout = function() {
    var _self = this;
    FB.logout(function(response) {
      $rootScope.$apply(function() {
        $rootScope.user = _self.user = {};
      });
      console.info(response);
    });
  };

  return srvAuth;
}]);
