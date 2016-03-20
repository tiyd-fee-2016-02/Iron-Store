// Define an angular module for our app
var storeApp = angular.module('storeApp', ['ngRoute']);

// Routing
// ProductView -> template product-view.html and Controller ProductViewController
// Details -> template details.html and Controller DetailsViewController
// Cart -> template details.html and Controller CartViewController
// Receipt -> template details.html and Controller ReceiptViewController
storeApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    // .when('/', {
    //   templateUrl: 'index.html',
    //   controller: 'ProductViewController'
    // })
    .when('/ProductView', {
      templateUrl: 'Partials/product-view.html',
      controller: 'ProductViewController'
    })
    .when('/Details/:productID', {
      templateUrl: 'Partials/details.html',
      controller: 'DetailsViewController'
    })
    .when('/Cart', {
      templateUrl: 'Partials/cart.html',
      controller: 'CartViewController'
    })
    .when('/Receipt', {
      templateUrl: 'Partials/receipt.html',
      controller: 'ReceiptViewController'
    })
    .otherwise({
      redirectTo: '/ProductView'
    });
}]);
