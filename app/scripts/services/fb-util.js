'use strict';
var app = angular.module('fbAuth',[]);
app.factory('srvAuth', ['$rootScope',function($rootScope) {
      var srvAuth = {};
      srvAuth.fblogin = function() {
        FB.login(function (response) {
          if (response.status === 'connected') {
            // You can now do what you want with the data fb gave you.
            console.info(response);
          }
        });        
      };

      srvAuth.watchLoginChange = function() {
        var _self = this;
        FB.Event.subscribe('auth.authResponseChange', function(res) {
          if (res.status === 'connected') {
            FB.api('/me', function(res) {
              $rootScope.$apply(function() {
                $rootScope.user = _self.user = res;
                $rootScope.user.login = _self.user.login = true;
                $rootScope.user.profilePic = _self.user.profilePic = 'http://graph.facebook.com/'+res.id+'/picture'; 
                sessionStorage.setItem('user',JSON.stringify($rootScope.user));
                //console.info($rootScope.user);
              });
            });
          } else {
            console.log('Not Connected');
          }
        });
      };

      srvAuth.logout = function() {
        var _self = this;
        FB.logout(function(response) {
          $rootScope.$apply(function() {
            $rootScope.user = _self.user = {};
            sessionStorage.removeItem('user');
          });
          console.info(response);
        });
      };

      return srvAuth;
}]);
