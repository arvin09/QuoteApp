var app = angular.module('quoteApp');
app.controller('AddQuoteController', ['$scope','$window', function ($scope,$window) {
	$scope.quote = {};

	 var oriQuote = angular.copy($scope.quote);

	$scope.formSubmit = function(){
		$window.alert('Data submited' + JSON.stringify($scope.quote));
	};

	$scope.formReset = function(){
		$scope.quote = angular.copy(oriQuote);
		$scope.frmAddQuote.$setPristine();
	}
}])