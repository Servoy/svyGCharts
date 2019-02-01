/**
 * @override
 *
 * @properties={typeid:24,uuid:"39A45A75-BC1D-4A03-AB58-70ED85C7DC35"}
 */
function getChartData() {
	return [
		['Task', 'Hours per Day'],
	    ['Work',     11],
	    ['Eat',      2],
	    ['Commute',  2],
	    ['Watch TV', 2],
	    ['Sleep',    7]
	];
}

/**
 * @override
 *
 * @properties={typeid:24,uuid:"3F6E170D-D254-4283-8B68-9F9DBF896E7B"}
 */
function getChartOptions() {
	return {
		title: 'My Daily Activities',
        is3D: true,
		slices: {
			"2": { offset: 0.3 },
			"4": { offset: 0.1 }
		}
	};
}

/**
 * @override
 *
 * @properties={typeid:24,uuid:"7B92B656-F6A2-462C-898C-8599BA9DA92A"}
 */
function getChartType() {
	return 'PieChart';
}

/**
 * @override
 *
 * @properties={typeid:24,uuid:"9C07FFD6-E937-4DC5-85A4-4FFD1DFC029B"}
 */
function getChartUrl() {
	return 'https://developers.google.com/chart/interactive/docs/gallery/piechart';
}
