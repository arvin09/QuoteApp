'use strict';

var app = angular.module('quoteApp');
app.controller('FilterMenuCtrl', ['$scope', function ($scope) {
	$scope.menuItems = [
		{id:1,name:'All',key:''},
		{id:2,name:'Motivation',key:'Motivation'},
		{id:3,name:'Love',key:'Love'},
		{id:4,name:'Friendship',key:'Friendship'},
		{id:5,name:'Funny',key:'Funny'},
		{id:6,name:'Inspirational',key:'Inspirational'},
		{id:7,name:'Life',key:'Life'},
		{id:8,name:'Birthday',key:'Birthday'},
		{id:9,name:'Leadership',key:'Leadership'},
   ];
}]);
