'use strict';

/**
 * @ngdoc overview
 * @name quoteAppApp
 * @description
 * # quoteApp
 *
 * Main module of the application.
 */
 
var App = angular.module('quoteApp', ['ngCookies','ngResource','ngRoute','ngSanitize','ngTouch','fbAuth','gplusAuth']);

App.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/:quoteType', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});

App.run(['$rootScope', '$window', 'srvAuth','gplusUtil','appConfig', function($rootScope, $window, srvAuth, gplusUtil, appConfig) {

  angular.element('.quote-container').css({height: window.screen.height + 'px'}); 
  angular.element('[data-toggle="offcanvas"]').click(function () {
    angular.element('.row-offcanvas').toggleClass('active');
  });

  // if(sessionStorage.getItem('user')){
  //   $rootScope.user = JSON.parse(sessionStorage.getItem('user'));
  // }else{
    $rootScope.user = {};
  // }

  (function(){
    console.log('GPLUS');
    gapi.load('auth2',function(){
      gapi.auth2.init({
          'client_id': appConfig.GOOGLE.CLIENT_ID,
          'cookie_policy' : appConfig.GOOGLE.COOKIE_POLICY,
          'scope': appConfig.GOOGLE.SCOPE
      });

      gplusUtil.watchSignInChange();
      
    });

  })();

  $window.fbAsyncInit = function() {
    FB.init({
      appId      : appConfig.FACEBOOK.APP_ID,
      channelUrl : appConfig.FACEBOOK.CHANNEL_URL,
      xfbml      : true,
      version    : appConfig.FACEBOOK.VERSION
    });
    srvAuth.watchLoginChange();
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = appConfig.FACEBOOK.SDK_URL;
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', appConfig.FACEBOOK.JSDK));

}]);




