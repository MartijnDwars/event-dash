angular.module('dolphin.controllers').controller('IncomingController', function (DOLPHIN_API, $scope, $interval, $http, $modal) {
	// TODO: Filter, from, to

	$scope.events = [];

	var get = function () {
		$http.post(DOLPHIN_API + '/event', {})
			.success(function (data) {
				$scope.events = data;
			});
	}

	get();
	$interval(get, 5000);

	$scope.open = function (event) {
		var modalInstance = $modal.open({
			templateUrl: 'auditModal.partial.html',
			scope: $scope,
			controller: ModalInstanceCtrl,
			resolve: {
				event: function(){
					return event;
				}
			}
		});
	}

	var ModalInstanceCtrl = function ($scope, $modalInstance, event) {
		$scope.event = event;

		$scope.ok = function () {
			$modalInstance.close();
		};
		
		$scope.cancel = function () {
			$modalInstance.dismiss('cancel');
		};
	};
});