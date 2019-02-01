/**
 * @override
 *
 * @properties={typeid:24,uuid:"15E8A3FB-1A10-4912-ABC8-627FAE588C8A"}
 */
function getChartData() {
	return [
		[ 'Name', 'Manager', 'Tooltip'],
		[{ v: 'Mike', f: 'Mike<div style="color:red; font-style:italic">President</div>' }, '', 'The President'],
		[{ v: 'Jim', f: 'Jim<div style="color:red; font-style:italic">Vice President</div>' }, 'Mike', 'VP'],
		['Alice', 'Mike', ''],
		['Bob', 'Jim', 'Bob Sponge'],
		['Carol', 'Bob', '']
	];
}

/**
 * @override
 *
 * @properties={typeid:24,uuid:"2DBF2FAE-BA43-4EC9-AD99-89F2708341F3"}
 */
function getChartOptions() {
	return {
		allowHtml: true
	};
}

/**
 * @override
 *
 * @properties={typeid:24,uuid:"19A74C35-48D6-46D2-AD2B-29E1420F2468"}
 */
function getChartType() {
	return 'OrgChart';
}