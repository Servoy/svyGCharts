
/**
 * @override
 *
 * @properties={typeid:24,uuid:"58C217CD-897D-49A6-BCA1-96AED30AF77D"}
 */
function getChartData() {
	return [
		['Element', 'Density', { role: 'style' }, { role: 'annotation' } ],
	    ['Copper', 8.94, '#b87333', 'Cu' ],
	    ['Silver', 10.49, 'silver', 'Ag' ],
	    ['Gold', 19.30, 'gold', 'Au' ],
	    ['Platinum', 21.45, 'color: #e5e4e2', 'Pt' ]
	];
}

/**
 * @override
 *
 * @properties={typeid:24,uuid:"4827B33B-2A12-40F8-9725-183698F43A67"}
 */
function getChartOptions() {
	return {
        title: "Density of Precious Metals, in g/cm^3",
        bar: {groupWidth: "95%"},
        legend: { position: "none" }
      }
}

/**
 * @override
 *
 * @properties={typeid:24,uuid:"A45743D9-842D-4E38-BBB7-788C74571AAA"}
 */
function getChartType() {
	return 'BarChart'
}

/**
 * @override
 *
 * @properties={typeid:24,uuid:"B556AB49-5E8B-4EAC-BFE1-91FCBDD5CC3D"}
 */
function getChartUrl() {
	return 'https://developers.google.com/chart/interactive/docs/gallery/barchart';
}
