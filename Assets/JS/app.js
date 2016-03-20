// Define an angular module for our app

var shoppingCart = {};

var storeApp = angular.module('storeApp', ['ngRoute']);

// Routing
// ProductView -> partial product-view.html and Controller ProductViewController
// Details -> partial details.html and Controller DetailsViewController
// Cart -> partial cart.html and Controller CartViewController - Empty Cart
// Cart/:productID ->
// Cart/Update/:productID ->
// Cart/Remove/:productID ->
// Receipt -> template details.html and Controller ReceiptViewController
storeApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
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
    .when('/Cart/:productID', {
      templateUrl: 'Partials/cart.html',
      controller: 'CartViewController'
    })
    .when('/Cart/Update/:productID', {
      templateUrl: 'Partials/cart.html',
      controller: 'CartViewController'
    })
    .when('/Cart/Remove/:productID', {
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
