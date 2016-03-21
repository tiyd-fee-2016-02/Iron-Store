var shoppingCart = [{}];


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


$scope.addToCart = function(myProductID){
	console.log("addToCart():myProductID => " + myProductID);
	// shoppingCart.push($scope.products[myProductID]);
	console.log("shoppingCart => " + shoppingCart[0].name);
};

}]);


storeApp.controller('CartViewController', ['$scope','$http', '$routeParams', function($scope, $http, $routeParams) {
	// $scope.message = 'This is the cart content';
		$http.get('Assets/iron-store.json')
			.success(function (data) {
				console.log("Success! => CartViewController", data);
				$scope.products = data;
			console.log($scope.products[$routeParams.productID]);
				$scope.productID = $routeParams.productID;
			console.log("$scope.productID => " + $scope.productID);
				$scope.shoppingCart = shoppingCart;
				// $scope.shoppingCart["testKey"] = $scope.products["testVal"];
				$scope.shoppingCart.push($scope.products[0]);
				$scope.shoppingCart.push($scope.products[1]);

			console.log("shoppingCart => " + $scope.shoppingCart[0].name);
			console.log("shoppingCart => " + $scope.shoppingCart[1].name);
			})
	   .error(function (data) {
	      console.log('There was an error!', data);
			});

$scope.updateCart = function(myProductID){
	// $scope.shoppingCart.push($scope.products[myProductID]);
	console.log("updateCart()");
	console.log("shoppingCart => " + $scope.shoppingCart[0].name);
};

	}]);

storeApp.controller('ReceiptViewController', function($scope) {

	$scope.message = 'This is the receipt content';

});
