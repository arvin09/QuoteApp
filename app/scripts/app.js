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
      controller: 'MainCtrl',
      filter : true
    })
    .when('/:quoteType', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      filter : true
    })
    .when('/page/favourite',{
      templateUrl : 'views/favourites.html',
      controller : 'FavouriteCtrl',
      filter : false
    })
    .when('/page/addQuote', {
      templateUrl: 'views/add-quote.html',
      controller: 'AddQuoteController',
      filter : false
    })
    .when('/page/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl',
      filter : false
    })
    .when('/page/help', {
      templateUrl: 'views/help.html',
      controller: 'HelpCtrl',
      filter : false
    })
    .otherwise({
      redirectTo: '/'
    });
});


App.run(['$rootScope','$window','SocialConfig', function($rootScope,$window,SocilaConfig) {
  var  isInit = true;
  angular.element('.quote-container').css({height: $($window).height() + 'px', 'background-color':'#0079BF'});

  angular.element('.footer').css({position: 'absolute'});
  angular.element('[data-toggle="offcanvas"]').click(function () {
    angular.element('.row-offcanvas').toggleClass('active');
  });

  $rootScope.user = {};

  $rootScope.quotes = [
    {id:0,desc:'Walking with a friend in the dark is better than walking alone in the light.',type:'motivation',isfav:false},
    {id:1,desc:'The greatest gift of life is friendship, and I have received it.',type:'Leadership',isfav:false},
    {id:2,desc:'I cannot even imagine where I would be today were it not for that handful of friends who have given me a heart full of joy. Lets face it, friends make life a lot more fun.',type:'funny', isfav:false},
    {id:3,desc:'Walking with a friend in the dark is better than walking alone in the light.',type:'friendship', isfav:false},
    {id:4,desc:'The greatest gift of life is friendship, and I have received it.',type:'life', isfav:false},
    {id:5,desc:'I cannot even imagine where I would be today were it not for that handful of friends who have given me a heart full of joy. Lets face it, friends make life a lot more fun.',type:'life', isfav:false},
    {id:6,desc:'Walking with a friend in the dark is better than walking alone in the light.',type:'love', isfav:false},
    {id:7,desc:'The greatest gift of life is friendship, and I have received it.',type:'motivation', isfav:false},
    {id:8,desc:'I cannot even imagine where I would be today were it not for that handful of friends who have given me a heart full of joy. Lets face it, friends make life a lot more fun.',type:'friendship', isfav:false},
    {id:9,desc:'Walking with a friend in the dark is better than walking alone in the light.',type:'birthday', isfav:false},
    {id:10,desc:'The greatest gift of life is friendship, and I have received it.',type:'Inspirational', isfav:false},
    {id:11,desc:'I cannot even imagine where I would be today were it not for that handful of friends who have given me a heart full of joy. Lets face it, friends make life a lot more fun.',type:'motivation', isfav:false}
  ];

  var  myfavourite = localStorage.myfavourite || '';

  var isFavArray = myfavourite ? JSON.parse(myfavourite) : [] ;

  for(var quoteId in isFavArray) {
    var id = isFavArray[quoteId];
    $rootScope.quotes[id].isfav = true;
  }

  $rootScope.$on('$routeChangeStart', function (event, next) {
    $rootScope.showFilter = next.$$route.filter;
  });

  $rootScope.closeSideMenu = function(){
    angular.element('.row-offcanvas').removeClass('active');
  };


}]);




