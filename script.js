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
        .when('/address', {
            templateUrl : 'pages/address.html',
            controller  : 'addressController'
        })
        .when("/", {
            templateUrl: "pages/home.html", 
            controller: "mainController"
        })
});

myApp.controller('mainController', function($scope) {
    $scope.message = 'Home';
    $scope.pageClass = 'page-home';
    $scope.$on('$routeChangeSuccess', function() {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyAsmQxi5gN7AUDzswkWlxAfXKxDNDjdeuY&sensor=false&callback=initialize";
        document.body.appendChild(script); 
    });
});
myApp.controller('serviceController', function($scope, $http) {
	$scope.message = 'Our Services';
    $scope.pageClass = 'page-services';
    $scope.$on('$routeChangeSuccess', function() {
            $http.get('menu.json').success (function(data){
                $scope.hairstyle = data.haircut;                //store JSON details into respective variables
                $scope.makeup = data.makeup;
                $scope.waxing = data.waxing;
                $scope.nails = data.nails;
                $scope.facial = data.facial;
                $scope.threading = data.threading;
                $scope.piercings = data.piercings;
            }); 
        });
    });
myApp.controller('productsController', function($scope, $http) {
	$scope.message = 'Our Products';
    $scope.pageClass = 'page-products';
    $scope.$on('$routeChangeSuccess', function() {
        $http.get('product.json').success (function(data){
             $scope.mkProducts = data.products;  
        });
    });
});
myApp.controller('addressController', function($scope) {
	$scope.message = 'Reach Us At';
    $scope.pageClass = 'page-address';
    $scope.$on('$routeChangeSuccess', function() {
        // alert("Test");
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyAsmQxi5gN7AUDzswkWlxAfXKxDNDjdeuY&sensor=false&callback=initialize";
        document.body.appendChild(script); 
    });
});
function initialize() {
    var myCenter = new google.maps.LatLng(17.3343617,78.596181);
    var mapProp = {
        scrollwheel: false,
        center: myCenter,
        zoom:15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
    var marker=new google.maps.Marker({
    position:myCenter,
    animation:google.maps.Animation.BOUNCE
    });
    marker.setMap(map);
}