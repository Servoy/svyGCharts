/**
 * @override
 *
 * @properties={typeid:24,uuid:"E451531C-9868-4F69-A864-FA95DCFFD6A9"}
 */
function getChartData() {
	return [
		['ID', 'X', 'Y', 'Temperature'],
		['', 80, 167, 120],
		['', 79, 136, 130],
		['', 78, 184, 50],
		['', 72, 278, 230],
		['', 81, 200, 210],
		['', 72, 170, 100],
		['', 68, 477, 80]
	];
}

/**
 * @override
 *
 * @properties={typeid:24,uuid:"FC53C773-6019-4415-8F5D-A23606EB03DC"}
 */
function getChartOptions() {
	return {
		colorAxis: { colors: ['yellow', 'red'] }
	};
}

/**
 * @override
 *
 * @properties={typeid:24,uuid:"DBE2883D-8633-4473-8890-838B855B442D"}
 */
function getChartType() {
	return 'BubbleChart'
}

/**
 * @override
 *
 * @properties={typeid:24,uuid:"6AD2C83D-D508-49EA-A611-1851098F46DC"}
 */
function getChartUrl() {
	return 'https://developers.google.com/chart/interactive/docs/gallery/bubblechart';
}
