// Controllers
storeApp.controller('ProductViewController', ['$http', '$scope', function($http, $scope) {

	// $http.get('http://localhost:3000/products')
		$http.get('Assets/iron-store.json')
					.success(function (data) {
						console.log("Success!", data)
					})
         .error(function (data) {
            console.log('There was an error!', data);

					$scope.message = 	data.products;

  });

	$scope.message = 'This is the product view content';

	// $scope.message = 	products;

	// $scope.products = [
  //   { name: 'Blue Iron',
	// 	  price: '$20.00',
	// 		description: 'The sweetest blue iron eva',
	// 		image: 'http://some-image-file.png',
	// 		reviews: ["my Review #1", "my Review #2", "my Review #3"]
	// 	},
  //   { name: 'Yellow Iron',
	// 	  price: '$27.00',
	// 		description: 'The sweetest yellow iron eva',
	// 		image: 'http://some-image-file.png',
	// 		reviews: ["my Review #1", "my Review #2", "my Review #3"],
	// 	},
	// 	{ name: 'Red Iron',
	// 	  price: '$18.00',
	// 		description: 'The sweetest red iron eva',
	// 		image: 'http://some-image-file.png',
	// 		reviews: ["my Review #1", "my Review #2", "my Review #3"]
	// 	}
  // ];

}]);

storeApp.controller('DetailsViewController', function($scope) {

	$scope.message = 'This is the details content';

});

storeApp.controller('CartViewController', function($scope) {

	$scope.message = 'This is the cart content';

});

storeApp.controller('ReceiptViewController', function($scope) {

	$scope.message = 'This is the receipt content';

});
