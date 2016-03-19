// Controllers
storeApp.controller('ProductViewController', ['$http', '$scope', function($http, $scope) {

	// $http.get('http://localhost:3000/products')
	$http.get('Assets/iron-store.json')
		.success(function (data) {
			console.log("Success!", data);
			$scope.products = data;
		})
   .error(function (data) {
      console.log('There was an error!', data);
		});

	$scope.message = 'This is the product view content';


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
