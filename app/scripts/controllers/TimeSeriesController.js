angular.module('dolphin.controllers').controller('TimeSeriesController', function (DOLPHIN_API, $scope, $http, _) {
	// Registration (timeseries)

	// TODO: Ordering? I want the days to be chronological, even though I'm filtering..
	// TODO: dayOfWeek is hardcoded..
	// TODO: Granularity is hardcoded..
	var from = '2014-05-01T00:00:00.000Z';
	var to = '2014-05-31T00:00:00.000Z';

	$http
		.post(DOLPHIN_API + '/timeseries/count/registration', {
			from: from,
			to: to,
			filter: {},
			granularity: 'DAY'
		})
		.success(function (data) {
			var start = moment(new Date(2014, 4, 1, 2))
			  , end   = moment(new Date(2014, 4, 31, 2))
			  , range = moment().range(start, end);

			// TODO: Why can't I iterate over a range? Now I need to push the days to an array first..
			//vand I need to introduce a new anonymous function mweh.
			var days = [];
			range.by('days', function (moment) {
				days.push(moment);
			});

			// Match API response intervals with our intervals
			var values = days.map(function (day) {
				var mom = _.find(data, function (value) {
					return day.isSame(value.from);
				});

				if (mom) {
					return mom.value;
				} else {
					return 0;
				}
			});

			var categories = days.map(function (day) {
				return day.format('D');
			});

			// Configure chart
			$scope.config = {
				chart: {

				},
				title: {
					text: ''
				},
				credits: {
					enabled: false
				},
				xAxis: {
					categories: categories
				},
				yAxis: {
					title: null
				},
				series: [{
					name: 'Registrations',
					data: values
				}]
			};
		});
});