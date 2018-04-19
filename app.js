var app = angular.module('docApp', [
	'ngRoute', 'ngAnimate', 'ui.bootstrap', 'ui.grid'
]);

app
	.config([
		'$routeProvider',
		function ($routeProvider) {
			$routeProvider.
				when('/', {
					templateUrl: 'views/main.html'
				}).
				when('/contact', {
					templateUrl: 'views/contactus.html'
				}).
				when('/services', {
					templateUrl: 'views/services.html'
				}).
				when('/about', {
					templateUrl: 'views/about.html'
				}).
				otherwise({
					redirect: '/'
				});
		}
	]);