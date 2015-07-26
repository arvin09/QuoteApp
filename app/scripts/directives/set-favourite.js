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
    template: '<span class="glyphicon {{valstr}}" aria-hidden="true" ng-click="toggle()"></span>',
    link: function link(scope){
	    
	    scope.valstr = scope.isFav ? scope.on : scope.off;

	    scope.toggle = function toggle(){
	      scope.isFav = !scope.isFav;
	      if(scope.isFav){
	      	scope.valstr = scope.on;
	      }
	      else{
	      	scope.valstr = scope.off;
	      }
	    };
  	}
  };
});