/**
 * @override
 *
 * @properties={typeid:24,uuid:"2E735F1E-34D6-457F-80BB-4A0215A483FC"}
 */
function getChartData() {
	return [
		[ { type: 'string', id: 'Position' }, { type: 'string', id: 'Name' }, { type: 'date', id: 'Start' }, { type: 'date', id: 'End' }],
		[ 'President', 'George Washington', new Date(1789, 3, 30), new Date(1797, 2, 4) ],
	    [ 'President', 'John Adams', new Date(1797, 2, 4), new Date(1801, 2, 4) ],
	    [ 'President', 'Thomas Jefferson', new Date(1801, 2, 4), new Date(1809, 2, 4) ],
	    [ 'Vice President', 'John Adams', new Date(1789, 3, 21), new Date(1797, 2, 4)],
	    [ 'Vice President', 'Thomas Jefferson', new Date(1797, 2, 4), new Date(1801, 2, 4)],
	    [ 'Vice President', 'Aaron Burr', new Date(1801, 2, 4), new Date(1805, 2, 4)],
	    [ 'Vice President', 'George Clinton', new Date(1805, 2, 4), new Date(1812, 3, 20)],
	    [ 'Secretary of State', 'John Jay', new Date(1789, 8, 25), new Date(1790, 2, 22)],
	    [ 'Secretary of State', 'Thomas Jefferson', new Date(1790, 2, 22), new Date(1793, 11, 31)],
	    [ 'Secretary of State', 'Edmund Randolph', new Date(1794, 0, 2), new Date(1795, 7, 20)],
	    [ 'Secretary of State', 'Timothy Pickering', new Date(1795, 7, 20), new Date(1800, 4, 12)],
	    [ 'Secretary of State', 'Charles Lee', new Date(1800, 4, 13), new Date(1800, 5, 5)],
	    [ 'Secretary of State', 'John Marshall', new Date(1800, 5, 13), new Date(1801, 2, 4)],
	    [ 'Secretary of State', 'Levi Lincoln', new Date(1801, 2, 5), new Date(1801, 4, 1)],
	    [ 'Secretary of State', 'James Madison', new Date(1801, 4, 2), new Date(1809, 2, 3)]
	];
}

/**
 * @override
 *
 * @properties={typeid:24,uuid:"6F292D80-956B-4079-B18B-A4EEE47E35E9"}
 */
function getChartOptions() {
	return {
		
	};
}

/**
 * @override
 *
 * @properties={typeid:24,uuid:"052D1AD9-22C1-4130-BD25-416807B13DC9"}
 */
function getChartType() {
	return 'Timeline';
}

/**
 * @override
 *
 * @properties={typeid:24,uuid:"8FBB0F11-752A-4E72-B63F-DEF32D4097B6"}
 */
function getChartUrl() {
	return 'https://developers.google.com/chart/interactive/docs/gallery/timeline';
}
