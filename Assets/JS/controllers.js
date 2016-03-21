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
			$scope.shoppingCart = shoppingCart;
		})
   .error(function (data) {
      console.log('There was an error!', data);
		});

		$scope.addToCart = function(myProductID){
			console.log("addToCart():myProductID => " + myProductID);
			shoppingCart.push($scope.products[myProductID]);
			console.log("addToCart():$scope.shoppingCart => " + $scope.shoppingCart[myProductID]);
		};

}]);


storeApp.controller('CartViewController', ['$scope','$http', '$routeParams', function($scope, $http, $routeParams) {
	// $scope.message = 'This is the cart content';
	$http.get('Assets/iron-store.json')
		.success(function (data) {
			console.log("Success! => CartViewController", data);
			$scope.products = data;
			$scope.productID = $routeParams.productID;
			console.log("$scope.productID => " + $scope.productID);
			$scope.shoppingCart = shoppingCart;


			// $scope.shoppingCart.shift();
			shoppingCart.push($scope.products[$scope.productID]);
			// $scope.shoppingCart.push($scope.products[0]);
			// $scope.shoppingCart.push($scope.products[1]);

			console.log("shoppingCart => " + $scope.shoppingCart);
			console.log("shoppingCart => " + $scope.shoppingCart.length);

		})
   	.error(function (data) {
      console.log('There was an error!', data);
		});

		$scope.updateCartItem = function(myProductID, myQuantity){
			console.log("updateCart():myProductID => " + myProductID);
			console.log("updateCart():myQuantity => " + myQuantity);
			console.log("updateCart():$scope.shoppingCart[myProductID]) => " + $scope.shoppingCart[myProductID]);
			$scope.shoppingCart[myProductID].cartQty = parseInt($scope.shoppingCart[myProductID].cartQty, 10) + 1;
			// $scope.shoppingCart[myProductID].cartQty = parseInt(myQuantity, 10);
		};

		$scope.removeCartItem = function(myProductID){
			console.log("removeCart():myProductID => " + myProductID);
			$scope.shoppingCart.splice($scope.shoppingCart.indexOf(myProductID), 1);
			console.log("removeCart():$scope.shoppingCart => " + $scope.shoppingCart);
		};

	}]);

storeApp.controller('ReceiptViewController', function($scope) {
	// $scope.message = 'This is the receipt content';
	// $scope.subTotal = 0;
	$scope.subTotal = 94.13;
	$scope.salesTax = $scope.subTotal * 0.065;
	$scope.shipping = 20;
console.log(shoppingCart.length);
console.log(shoppingCart);
	// for (var i = 0; i < shoppingCart.length; i++) {
	// 	$scope.subTotal += shoppingCart[i].price;
	// }

	$scope.totalPrice = $scope.subTotal + $scope.salesTax + $scope.shipping;

});
