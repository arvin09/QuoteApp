'use strict';

var app = angular.module('quoteApp');
app.controller('MenuCtrl', ['$scope', function ($scope) {
	$scope.menuItems = [
		{id:1,name:'All',key:''},
		{id:2,name:'Motivation',key:'motivation'},
		{id:3,name:'Love',key:'love'},
		{id:4,name:'Friendship',key:'Friendship'},
		{id:5,name:'Funny',key:'funny'},
		{id:6,name:'Inspirational',key:'inspiration'},
		{id:7,name:'Life',key:'love'},
		{id:8,name:'Birthday',key:'birthday'},
		{id:9,name:'Leadership',key:'leadership'},
   ];
}]);
