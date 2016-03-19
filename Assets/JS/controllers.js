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

	// $scope.message = products;

	// $scope.products =
	// {
	// 	'products': [
	//     {
	// 			'name' : 'Blue Iron',
	// 		  'price' : '20',
	// 			'description' : 'The sweetest blue iron eva',
	// 			'image' : 'http://some-image-file.png',
	// 			'reviews' :
	// 				[
	// 					{
	// 						'author' : "Some Other Author",
	// 						'review' : "my Review #1",
	// 					 	'stars' :  "1"
	// 					},
	// 					{
	// 						'author' : "Some Other Author",
	// 						'review' : "my Review #2",
	// 					 	'stars' :  "4"
	// 					},
	// 					{
	// 						'author' : "Another Author",
	// 						'review' : "my Review #3",
	// 						'stars' :	"3"
	// 					}
	// 				]
	// 		},
	//     {
	// 			'name' : 'Yellow Iron',
	// 		  'price' : '27.9',
	// 			'description' : 'The sweetest yellow iron eva',
	// 			'image' : 'http://some-image-file.png',
	// 			'reviews' :
	// 				[
	// 					{
	// 						'author' : "Some Author",
	// 						'review' : "my Review #1",
	// 					 	'stars' :  "1"
	// 					},
	// 					{
	// 						'author' : "Some Other Author",
	// 						'review' : "my Review #2",
	// 					 	'stars' :  "4"
	// 					},
	// 					{
	// 						'author' : "Another Author",
	// 						'review' : "my Review #3",
	// 						'stars' :	"3"
	// 					}
	// 				]
	// 		},
	// 		{
	// 			'name' : 'Red Iron',
	// 		  'price' : '18.99',
	// 			'description' : 'The sweetest red iron eva',
	// 			'image' : 'http://some-image-file.png',
	// 			'reviews' :
	// 				[
	// 					{
	// 						'author' : "Some Author",
	// 						'review' : "my Review #1",
	// 					 	'stars' :  "1"
	// 					},
	// 					{
	// 						'author' : "Some Author",
	// 						'review' : "my Review #2",
	// 					 	'stars' :  "4"
	// 					},
	// 					{
	// 						'author' : "Another Author",
	// 						'review' : "my Review #3",
	// 						'stars' :	"3"
	// 					}
	// 				]
	// 			}
	//   ]
	// }
	// console.log($scope.products);

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
