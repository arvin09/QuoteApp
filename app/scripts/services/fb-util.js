'use strict';
var app = angular.module('fbAuth',[]);
app.factory('fbUtil', ['$rootScope',function($rootScope) {
  var fbUtil = {};
  fbUtil.fblogin = function() {
    FB.login();        
  };

  fbUtil.watchLoginChange = function() {
    FB.getLoginStatus(function(response) {
      fbUtil.isLoggedIn(response);
    });

    FB.Event.subscribe('auth.statusChange', function(response){
     fbUtil.isLoggedIn(response);
   });
  };

  fbUtil.isLoggedIn = function(response){
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

  fbUtil.logout = function() {
    var _self = this;
    FB.logout(function(response) {
      $rootScope.$apply(function() {
        $rootScope.user = _self.user = {};
      });
      console.info(response);
    });
  };

  return fbUtil;
}]);
