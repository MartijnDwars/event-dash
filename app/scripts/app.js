(function () {
	var app = angular.module('dolphin', ['ngRoute', 'underscore', 'highcharts-ng', 'ui.bootstrap', 'dolphin.controllers']);

	angular.module('dolphin.controllers', []);

	app.constant('DOLPHIN_API', 'http://dockerhost:8080');

	app.config(function ($routeProvider, $locationProvider) {
		$routeProvider
			.when('/dashboard', {
				templateUrl: 'views/dashboard.html',
				controller: 'DashboardController'
			})
			.when('/timeseries', {
				templateUrl: 'views/timeseries.html',
				controller: 'TimeSeriesController'
			})
			.when('/funnel', {
				templateUrl: 'views/funnel.html',
				controller: 'FunnelController',
			})
			.when('/audit', {
				templateUrl: 'views/audit.html',
				controller: 'AuditController',
			})
			.when('/incoming', {
				templateUrl: 'views/incoming.html',
				controller: 'IncomingController',
			})
			.when('/utils', {
				templateUrl: 'views/utils.html',
				controller: 'UtilsController',
			})
			.otherwise({
				redirectTo: '/dashboard'
			});
	});

	app.run(function ($rootScope, $location) {
		$rootScope.isActive = function (pages) {
			if (pages instanceof Array) {
				return pages.some(function (page) {
					return page === $location.path();
				});
			}
			return pages === $location.path();
		};
	});
})();