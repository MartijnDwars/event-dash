angular.module('dolphin.controllers').controller('AuditController', function (DOLPHIN_API, $scope, $http, $modal, _) {
	$scope.collection = 'visited';
	$scope.filter = {
		entityType: '',
		entityId: ''
	};

	$scope.audit = function () {
		$http.post(DOLPHIN_API + '/event/' + $scope.collection, {filter: _.pick($scope.filter, function (value) {
			return value != '';
		})})
			.success(function (data) {
				$scope.events = data;
				$scope.submit = true;
			});
	};

	$scope.open = function (event) {
		var modalInstance = $modal.open({
			templateUrl: 'views/auditModal.partial.html',
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