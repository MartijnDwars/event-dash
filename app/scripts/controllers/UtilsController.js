angular.module('dolphin.controllers').controller('UtilsController', function (DOLPHIN_API, $scope, $http) {
	$scope.login = {
		"timestamp": new Date(),
		"actor": {
			"id": 1,
			"groupId": 1
		}
	};

	$scope.login2 = {
		"timestamp": "2011-07-14T19:43:37Z",
		"actor": {
			"id": 2,
			"groupId": 25
		},
		"loadtime": 50
	};

	$scope.registration = {
		"timestamp": "2014-05-25T12:34:56.000Z",
		"actor": {
			"id": 1,
			"groupId": 1
		}
	};

	$scope.sale = {
		"timestamp": new Date(),
		"actor": {
			"id": 1,
			"groupId": 1
		},
		"revenue": 1.50
	};

	$scope.modified = {
		"timestamp": new Date(),
		"actor": {
			"id": 1,
			"groupId": 1
		},
		"entityId": 1,
		"entityType": "companyPage",
		"enemy": {
			"name": "Rik Nijessen"
		}
	};

	$scope.fire = function(collection, event) {
		$http
			.put(DOLPHIN_API + '/event/' + collection, event)
			.success(function (data) {
				console.log('Added event to ' + collection + ' collection.');
			});
	};
});