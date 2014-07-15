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

	// Function to create a registration event with random timestamp
	$scope.createRegistrationEvent = function() {
		var randomDay = Math.floor((Math.random() * 31) + 1);
		if (randomDay < 10) {
			randomDay = '0' + randomDay;
		}

		$scope.registration = {
			"timestamp": "2014-05-" + randomDay + "T12:34:56.000Z",
			"actor": {
				"id": 1,
				"groupId": 1
			}
		};
	}

	// Always run the create function once
	$scope.createRegistrationEvent();

	$scope.fire = function(collection, event) {
		$http
			.put(DOLPHIN_API + '/event/' + collection, event)
			.success(function (data) {
				console.log('Added event to ' + collection + ' collection.');
			});
	};
});