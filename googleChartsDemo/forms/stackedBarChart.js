/**
 * @override
 *
 * @properties={typeid:24,uuid:"85F27A39-9548-4AD3-9D41-183AAAE33E69"}
 */
function getChartData() {
	return [
		['Genre', 'Fantasy & Sci Fi', 'Romance', 'Mystery/Crime', 'General', 'Western', 'Literature', { role: 'annotation' }],
		['2010', 10, 24, 20, 32, 18, 5, ''],
		['2020', 16, 22, 23, 30, 16, 9, ''],
		['2030', 28, 19, 29, 30, 12, 13, '']
	];
}


/**
 * @override
 *
 * @properties={typeid:24,uuid:"118A9380-AA9D-43D8-B788-F6EC01CAA984"}
 */
function getChartOptions() {
	return {
		legend: { position: 'top', maxLines: 3 },
        bar: { groupWidth: '75%' },
        isStacked: true
      }
}

/**
 * @override
 *
 * @properties={typeid:24,uuid:"C853DE83-093B-44C0-936D-71F6110447B6"}
 */
function getChartType() {
	return 'BarChart'
}

/**
 * @override
 *
 * @properties={typeid:24,uuid:"6B2A8279-D1CC-4A6A-A635-49167D5A10DE"}
 */
function getChartUrl() {
	return 'https://developers.google.com/chart/interactive/docs/gallery/barchart#stacked-bar-charts';
}
