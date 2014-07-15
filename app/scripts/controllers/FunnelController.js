angular.module('dolphin.controllers').controller('FunnelController', function (DOLPHIN_API, $scope, $http, _) {
	$scope.steps = [{
		collection: 'login',
		filters: [{
			key: 'actor.groupId',
			value: '1'
		}]
	}];

	$scope.addStep = function () {
		$scope.steps.push({
			collection: '',
			filters: []
		});
	};

	$scope.deleteStep = function (index) {
		$scope.steps.splice(index, 1);
	};

	$scope.addFilter = function (step) {
		step.filters.push({
			key: '',
			value: ''
		});
	};

	$scope.deleteFilter = function (step, index) {
		step.filters.splice(index, 1);
	};

	$scope.funnel = function () {
		var body = $scope.steps.map(function (step) {
			return {
				collection: step.collection,
				filter: filterArrayToObject(step.filters)
			};
		});

		var categories = $scope.steps.map(function (step, index) {
			return 'Step ' + (index + 1) + ' (' + step.collection + ')';
		});

		$http
			.post(DOLPHIN_API + '/funnel/', body)
			.success(function (data) {
				$scope.config = {
					options: {
						chart: {
							type: 'column'
						},
						title: ''
					},
					xAxis: {
						categories: categories
					},
					plotOptions: {
						column: {
							groupPadding: 0,
							pointPadding: 0,
							borderWidth: 0
						}
					},
					series: [{
						name: 'Users',
						data: data
					}]
				};
			});
	};

	/**
	 * Given an array of filter objects (with properties: key, value), return
	 * a single object that has the keys as keys and values as values.
	 */
	var filterArrayToObject = function (filters) {
		return _.object(
			_.map(filters, function (filter) {
				return [
					filter.key,
					filter.value
				];
			})
		);
	};
});