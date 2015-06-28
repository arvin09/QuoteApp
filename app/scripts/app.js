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

App.run(['$rootScope', '$window', 'srvAuth','appConfig', function($rootScope, $window, srvAuth, appConfig) {

  angular.element('.quote-container').css({height: window.screen.height + 'px'}); 
  angular.element('[data-toggle="offcanvas"]').click(function () {
    angular.element('.row-offcanvas').toggleClass('active');
  });

  $rootScope.user = {};

  $window.fbAsyncInit = function() {
    FB.init({
      appId      : appConfig.APP_ID,
      channelUrl : appConfig.CHANNEL_URL,
      xfbml      : true,
      version    : appConfig.VERSION
    });
    srvAuth.watchLoginChange();
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = appConfig.SDK_URL;
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', appConfig.JSDK));

}]);




