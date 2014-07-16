angular.module('dolphin.controllers').controller('DashboardController', function (DOLPHIN_API, $scope, $http, _) {
	// TODO: Chrome makes 3 requests instead of a single one?

	// TODO: I want *today's* registrations

	$scope.registrations
		= $scope.logins
		= $scope.sales
		= $scope.conversations
		= $scope.visits
		= $scope.zalando_visits_male
		= $scope.zalando_visits_female
		= 0;

	// Registrations (count)
	$http
		.post(DOLPHIN_API + '/count/visited', {})
		.success(function (data) {
			if (undefined !== data[0]) {
				$scope.visits = data[0].value;
			}
		});

	// Zalando visits (male)
	$http
		.post(DOLPHIN_API + '/count/visited', { filter: { entityType: "organization", entityId: "13", gender: "MALE" } })
		.success(function (data) {
			if (undefined !== data[0]) {
				$scope.zalando_visits_male = data[0].value;
			}
		});

	// Zalando visits (female)
	$http
		.post(DOLPHIN_API + '/count/visited', { filter: { entityType: "organization", entityId: "13", gender: "FEMALE" } })
		.success(function (data) {
			if (undefined !== data[0]) {
				$scope.zalando_visits_female = data[0].value;
			}
		});

	// Logins (count)
	$http
		.post(DOLPHIN_API + '/count/login', {})
		.success(function (data) {
			if (undefined !== data[0]) {
				$scope.logins = data[0].value;
			}
		});

	// Revenue (sum)
	$http
		.post(DOLPHIN_API + '/sum/sale/revenue', {})
		.success(function (data) {
			if (undefined !== data[0]) {
				$scope.sales = data[0].value;
			}
		});

	// Conversations (count)
	$http
		.post(DOLPHIN_API + '/count/conversation', {
			filter: {
				type: "new"
			}
		})
		.success(function (data) {
			if (undefined !== data[0]) {
				$scope.conversations = data[0].value;
			}
		});
});