'use strict';
var app = angular.module('quoteApp');

app.directive('setFavourite', function(){
  return {
    scope: {
      isFav: '=',
      on: '@',
      off: '@'
    },
    restrict: 'E',
    replace: true,
    template: '<span class="glyphicon {{isFav ? on : off}}" aria-hidden="true" ng-click="toggle()"></span>',
    link: function link(scope){	
	    scope.toggle = function toggle(){
	      scope.isFav = !scope.isFav;
	    };
  	}
  };
});