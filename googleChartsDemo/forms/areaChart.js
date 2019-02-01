
/**
 * @override
 *
 * @properties={typeid:24,uuid:"1E066995-137E-4F80-9C5B-C6CF704A0B0A"}
 */
function getChartData() {
	return [
		['Year', 'Sales', 'Expenses'],
	    ['2013',  1000,      400],
	    ['2014',  1170,      460],
	    ['2015',  660,       1120],
	    ['2016',  1030,      540]
	];
}

/**
 * @override
 *
 * @properties={typeid:24,uuid:"36812C34-6069-4833-8609-39E3030E63E1"}
 */
function getChartOptions() {
	return {
		title: 'Company Performance',
		hAxis: { title: 'Year', titleTextStyle: { color: '#333' } },
		vAxis: { minValue: 0 }
	};
}


/**
 * @override
 *
 * @properties={typeid:24,uuid:"A2B51C20-0D6E-42BB-B4B9-B847D660AB3C"}
 */
function getChartType() {
	return 'AreaChart';
}

/**
 * @override
 *
 * @properties={typeid:24,uuid:"6CF9779D-8C32-4061-A6BD-E467CB824DE3"}
 */
function getChartUrl() {
	return 'https://developers.google.com/chart/interactive/docs/gallery/areachart'
}
