/**
 * @override
 *
 * @properties={typeid:24,uuid:"BB823239-3DEB-46BB-A2F6-AF5481772BDD"}
 */
function getChartData() {
	return [
		[{"number": 'x'}, {'number': 'values'}, {id:'i0', type:'number', role:'interval'}, {id:'i1', type:'number', role:'interval'}, {id:'i2', type:'number', role:'interval'}, {id:'i2', type:'number', role:'interval'}, {id:'i2', type:'number', role:'interval'}, {id:'i2', type:'number', role:'interval'}],
		[1, 100, 90, 110, 85, 96, 104, 120],
	    [2, 120, 95, 130, 90, 113, 124, 140],
	    [3, 130, 105, 140, 100, 117, 133, 139],
	    [4, 90, 85, 95, 85, 88, 92, 95],
	    [5, 70, 74, 63, 67, 69, 70, 72],
	    [6, 30, 39, 22, 21, 28, 34, 40],
	    [7, 80, 77, 83, 70, 77, 85, 90],
	    [8, 100, 90, 110, 85, 95, 102, 110]
	];
}

/**
 * @override
 *
 * @properties={typeid:24,uuid:"59B95526-DC70-42E6-AB65-999B85653509"}
 */
function getChartOptions() {
	return {
		title: 'Bars, default',
        curveType: 'function',
        series: [{'color': '#D9544C'}],
        intervals: { style: 'bars' },
        legend: 'none'
	};
}

/**
 * @override
 *
 * @properties={typeid:24,uuid:"9ADE3CFC-F4C8-4562-A74F-DF6A54C9F771"}
 */
function getChartType() {
	return 'LineChart';
}

/**
 * @override
 *
 * @properties={typeid:24,uuid:"F91153C4-84F5-47A2-81A1-A5477815EB42"}
 */
function getChartUrl() {
	return 'https://developers.google.com/chart/interactive/docs/gallery/intervals';
}
