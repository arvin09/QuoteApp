'use strict';
var app = angular.module('quoteApp');

app.directive('setFavourite', function(){
  return {
    scope: {
      isFav: '=',
      id :'@',
      on: '@',
      off: '@'
    },
    restrict: 'E',
    replace: true,
    template: '<span class="glyphicon {{isFav ? on : off}}" aria-hidden="true" ng-click="toggle()"></span>',
    link: function link(scope){

	    scope.toggle = function toggle(){
	      scope.isFav = !scope.isFav;

        var favourite = [];

        if(localStorage.myfavourite){
          favourite = JSON.parse(localStorage.myfavourite);
        }else{
           localStorage.setItem('myfavourite',favourite);
        }

        scope.isFav ? favourite.push(scope.id) : favourite.splice(favourite.indexOf(scope.id),1);

        localStorage.myfavourite = JSON.stringify(favourite);

	    };
  	}
  };
});
