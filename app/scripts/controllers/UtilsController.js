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

	// Function to create a visited event with random timestamp
	$scope.createVisitedEvent = function() {
		var randomDay = Math.floor((Math.random() * 16) + 1);
		if (randomDay < 10) {
			randomDay = '0' + randomDay;
		}

		$scope.visited = {
			"timestamp": "2014-07-" + randomDay + "T12:34:56.000Z",
			"actor": {
				"id": 1,
				"groupId": 1
			},
			"entityId": 16,
			"entityType": "organization"
		};
	}

	// Always run the create function once
	$scope.createVisitedEvent();

	$scope.fire = function(collection, event) {
		$http
			.put(DOLPHIN_API + '/event/' + collection, event)
			.success(function (data) {
				console.log('Added event to ' + collection + ' collection.');
			});
	};
});