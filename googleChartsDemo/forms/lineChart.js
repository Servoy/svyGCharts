/**
 * @override
 *
 * @properties={typeid:24,uuid:"B7120DB6-7C64-4118-AA23-528C0C7499C2"}
 */
function getChartData() {
	return [
		[{'type': 'number', 'label': 'Day'}, {'type': 'number', 'label': 'Guardians of the Galaxy'},  {'type': 'number', 'label': 'The Avengers'},  {'type': 'number', 'label': 'Transformers: Age of Extinction'}],
		[1,  37.8, 80.8, 41.8],
	    [2,  30.9, 69.5, 32.4],
	    [3,  25.4,   57, 25.7],
	    [4,  11.7, 18.8, 10.5],
	    [5,  11.9, 17.6, 10.4],
	    [6,   8.8, 13.6,  7.7],
	    [7,   7.6, 12.3,  9.6],
	    [8,  12.3, 29.2, 10.6],
	    [9,  16.9, 42.9, 14.8],
	    [10, 12.8, 30.9, 11.6],
	    [11,  5.3,  7.9,  4.7],
	    [12,  6.6,  8.4,  5.2],
	    [13,  4.8,  6.3,  3.6],
	    [14,  4.2,  6.2,  3.4]
	];
}

/**
 * @override
 *
 * @properties={typeid:24,uuid:"8C33B821-596F-4FC9-A557-5D23CFF9458E"}
 */
function getChartOptions() {
	return {
		chart: {
	          title: 'Box Office Earnings in First Two Weeks of Opening',
	          subtitle: 'in millions of dollars (USD)'
	        },
	        axes: {
	          x: {
	            0: {side: 'top'}
	          }
	        }
	};
}

/**
 * @override
 *
 * @properties={typeid:24,uuid:"D756C309-3A7D-4025-B5A3-4521AB0C18DD"}
 */
function getChartType() {
	return 'Line';
}

/**
 * @override
 *
 * @properties={typeid:24,uuid:"F92944E5-3968-4936-B83B-D2703A1CE73B"}
 */
function getChartUrl() {
	return 'https://developers.google.com/chart/interactive/docs/gallery/linechart';
}
