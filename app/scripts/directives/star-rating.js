'use strict';
var app = angular.module('quoteApp');
app.directive('starRating', function() {
  return {
    restrict : 'EA',
    template : '<ul class="rating" ng-class="{readonly: readonly}">' +
               '  <li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">' +
               '    <span class="glyphicon glyphicon-star rating-star" aria-hidden="true"></span>' +
               '</ul>',
    scope : {
      ratingValue : '=ngModel',
      max : '=?', //optional: default is 5
      onRatingSelected : '&?',
      readonly: '=?'
    },
    link : function(scope, elem, attrs) {
      if (scope.max === undefined) { scope.max = 5; }
      function updateStars() {
        scope.stars = [];
        for (var i = 0; i < scope.max; i++) {
          scope.stars.push({
            filled : i < scope.ratingValue
          });
        }
      }
      scope.toggle = function(index) {
        if (scope.readonly === undefined || scope.readonly === false){
          scope.ratingValue = index + 1;
          scope.onRatingSelected({
            rating: index + 1
          });
        }
      };
      scope.$watch('ratingValue', function(oldVal, newVal) {
        if (newVal) { updateStars(); }
      });
    }
  };
});