
/**
 * @override
 *
 * @properties={typeid:24,uuid:"97A85A36-E268-4DD6-9995-280C4AD7074A"}
 */
function getChartData() {
	return [
		['Mon', 20, 28, 38, 45],
	    ['Tue', 31, 38, 55, 66],
	    ['Wed', 50, 55, 77, 80],
	    ['Thu', 77, 77, 66, 50],
	    ['Fri', 68, 66, 22, 15]
	];
}

/**
 * @override
 *
 * @properties={typeid:24,uuid:"F4F04B7B-EF69-4208-A839-50546A569796"}
 */
function getChartOptions() {
	return {
      legend:'none'
    };
}

/**
 * @override
 *
 * @properties={typeid:24,uuid:"190CCA6E-D348-4DE8-A947-E374A2FD2CC7"}
 */
function getChartType() {
	return 'CandlestickChart'
}

/**
 * @override
 *
 * @properties={typeid:24,uuid:"DBBD745C-CB19-485E-B20E-8F2E9FAE170A"}
 */
function getChartUrl() {
	return 'https://developers.google.com/chart/interactive/docs/gallery/candlestickchart';
}
