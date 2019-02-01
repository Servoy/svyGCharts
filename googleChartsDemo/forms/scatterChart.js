/**
 * @override
 *
 * @properties={typeid:24,uuid:"022A7643-42A5-4BF4-BC2D-309DB26F66CA"}
 */
function getChartData() {
	return [
		['Age', 'Weight'],
	    [ 8,      12],
	    [ 4,      5.5],
	    [ 11,     14],
	    [ 4,      5],
	    [ 3,      3.5],
	    [ 6.5,    7]
	];
}

/**
 * @override
 *
 * @properties={typeid:24,uuid:"B22E7E1E-1BCF-4266-B6D3-01E8C87052E4"}
 */
function getChartOptions() {
	return {
		title: 'Age vs. Weight comparison',
        hAxis: {title: 'Age', minValue: 0, maxValue: 15},
        vAxis: {title: 'Weight', minValue: 0, maxValue: 15},
        legend: 'none'
	};
}

/**
 * @override
 *
 * @properties={typeid:24,uuid:"2DF0DB4D-5F03-4477-99C6-7EAD1EF3C8B8"}
 */
function getChartType() {
	return 'ScatterChart';
}

/**
 * @override
 *
 * @properties={typeid:24,uuid:"1D9D982B-690B-4141-A5DA-8C4F3A54E3CB"}
 */
function getChartUrl() {
	return 'https://developers.google.com/chart/interactive/docs/gallery/scatterchart';
}
