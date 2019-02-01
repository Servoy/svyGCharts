/**
 * @override
 *
 * @properties={typeid:24,uuid:"9C01C8A3-E9A1-4406-898E-BC537CD3EB10"}
 */
function getChartData() {
	return [
		['Label', 'Value'],
	    ['Memory', 80],
	    ['CPU', 55],
	    ['Network', 68]
	];
}

/**
 * @override
 *
 * @properties={typeid:24,uuid:"3AE8EF29-1D27-49F7-8034-7F871B836A72"}
 */
function getChartOptions() {
	return {
		redFrom: 90, redTo: 100,
        yellowFrom:75, yellowTo: 90,
        minorTicks: 5
	};
}

/**
 * @override
 *
 * @properties={typeid:24,uuid:"79E5C560-1F09-482A-8168-0DB9BBF513E8"}
 */
function getChartType() {
	return 'Gauge';
}

/**
 * @override
 *
 * @properties={typeid:24,uuid:"1917BD6B-C17F-429D-8CF6-4AE450375376"}
 */
function getChartUrl() {
	return 'https://developers.google.com/chart/interactive/docs/gallery/gauge';
}
