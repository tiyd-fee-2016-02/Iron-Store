// Controllers
storeApp.controller('ProductViewController', ['$http', '$scope', function($http, $scope) {
	// $scope.message = 'This is the product view content';
	$http.get('Assets/iron-store.json')
		.success(function (data) {
			console.log("Success! => ProductViewController", data);
			$scope.products = data;
		})
   .error(function (data) {
      console.log('There was an error!', data);
		});
}]);

storeApp.controller('DetailsViewController', ['$scope','$http', '$routeParams', function($scope, $http, $routeParams) {
	// $scope.message = 'This is the details content';
	$http.get('Assets/iron-store.json')
		.success(function (data) {
			console.log("Success! => DetailsViewController", data);
			$scope.products = data;
			$scope.productID = $routeParams.productID;
		})
   .error(function (data) {
      console.log('There was an error!', data);
		});
}]);

storeApp.controller('CartViewController', ['$scope','$http', '$routeParams', function($scope, $http, $routeParams) {
	// $scope.message = 'This is the cart content';
		$http.get('Assets/iron-store.json')
			.success(function (data) {
				console.log("Success! => CartViewController", data);
				$scope.products = data;
				$scope.productID = $routeParams.productID;
			})
	   .error(function (data) {
	      console.log('There was an error!', data);
			});
	}]);

storeApp.controller('ReceiptViewController', function($scope) {

	$scope.message = 'This is the receipt content';

});
