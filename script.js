var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider) {
	$routeProvider
            // route for the home page
        .when('/home', {
            templateUrl : 'pages/home.html',
            controller  : 'mainController'
        })
        .when('/services', {
            templateUrl : 'pages/services.html',
            controller  : 'serviceController'
        })
        .when('/products', {
            templateUrl : 'pages/products.html',
            controller  : 'productsController'
        })
        .when('/contact', {
            templateUrl : 'pages/contact.html',
            controller  : 'contactController'
        })
        .when("/", {
            templateUrl: "pages/home.html", 
            controller: "mainController"
        })
});

myApp.controller('mainController', function($scope) {
    $scope.message = 'Home';
    $scope.pageClass = 'page-home';
});
myApp.controller('serviceController', function($scope) {
	$scope.message = 'Our Services';
    $scope.pageClass = 'page-services';
});
myApp.controller('productsController', function($scope) {
	$scope.message = 'Our Products';
    $scope.pageClass = 'page-products';
});
myApp.controller('contactController', function($scope) {
	$scope.message = 'Contact Us';
    $scope.pageClass = 'page-contact';
});