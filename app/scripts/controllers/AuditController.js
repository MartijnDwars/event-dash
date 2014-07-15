angular.module('dolphin.controllers').controller('AuditController', function (DOLPHIN_API, $scope, $http, $modal) {
	$scope.filter = {
		entityType: 'companyPage',
		entityId: '1'
	};

	$scope.audit = function () {
		$http.post(DOLPHIN_API + '/event/modified', {filter: $scope.filter})
			.success(function (data) {
				$scope.events = data;
				$scope.submit = true;
			});
	};

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