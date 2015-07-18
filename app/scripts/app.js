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
    .when('/page/addQuote', {
      templateUrl: 'views/add-quote.html',
      controller: 'AddQuoteController'
    })
    .when('/page/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl'
    })
    .when('/page/help', {
      templateUrl: 'views/help.html',
      controller: 'HelpCtrl'
    })
    .when('/page/rating', {
      templateUrl: 'views/rating.html',
      controller: 'RatingCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});



App.run(['$rootScope','$window','SocialConfig', function($rootScope,$window,SocilaConfig) {
  angular.element('.quote-container').css({height: $($window).height() + 'px', 'background-color':'#0079BF'});
  
  angular.element('.footer').css({position: 'absolute'}); 
  angular.element('[data-toggle="offcanvas"]').click(function () {
    angular.element('.row-offcanvas').toggleClass('active');
  });

  $rootScope.user = {};
  
}]);




