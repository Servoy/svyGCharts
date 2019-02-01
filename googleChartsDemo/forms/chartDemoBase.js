/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"77387D45-A60F-40AE-8AB8-4F80CA1B41C7"}
 */
var options;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"26D7A9A8-451F-452A-BC80-F2B6652EFA0E"}
 */
var data;

/**
 * @type {String}
 *
 * @properties={typeid:35,uuid:"7CF0C1C3-8792-48F3-8946-3D5F71214A28"}
 */
var chartType;

/**
 * Callback method for when form is shown.
 *
 * @param {Boolean} firstShow form is shown first time after load
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"C1ADF7C7-F500-40CB-B657-C5EC50745234"}
 */
function onShow(firstShow, event) {
	createChart();
}

/**
 * @param {JSEvent} event
 * @param {Array<svygooglecharts-svygooglecharts.ChartSelection>} selection
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"86830A5F-47BC-44F6-8274-FFA33E604BB8"}
 */
function onSelect(event, selection) {
	if (selection) {
		elements.lblChartEvents.text = event.getType() + ' called from chart "' + event.getElementName() + '" from row ' + selection[0].row + ', column ' + selection[0].column + ' with value ' + selection[0].value;
	}
}

/**
 * @param {JSEvent} event
 * @param {string} errorCode
 * @param {string} errorMessage
 *
 * @private
 *
 * @properties={typeid:24,uuid:"7D824DDE-2A5F-4C79-B901-0E37F1AEA409"}
 */
function onError(event, errorCode, errorMessage) {
	elements.lblChartEvents.text = event.getType() + ' called from chart "' + event.getElementName() + '": ' + errorCode + ' ' + errorMessage;
}

/**
 * @param {JSEvent} event
 * @param {Array<svygooglecharts-svygooglecharts.ChartSelection>} selection
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"766BFFC1-2AC6-4985-A2BB-76E66CED29FC"}
 */
function onMouseOver(event, selection) {
	elements.lblChartEvents.text = event.getType() + ' called from chart "' + event.getElementName() + '" from row ' + selection[0].row + ', column ' + selection[0].column + ' with value ' + selection[0].value;
}

/**
 * @param {JSEvent} event
 * @param {Array<svygooglecharts-svygooglecharts.ChartSelection>} selection
 *
 * @protected
 *
 * @properties={typeid:24,uuid:"ED33066E-0166-4126-B322-0575C3AB8B26"}
 */
function onMouseOut(event, selection) {
	elements.lblChartEvents.text = event.getType() + ' called from chart "' + event.getElementName() + '" from row ' + selection[0].row + ', column ' + selection[0].column + ' with value ' + selection[0].value;
}

/**
 * @protected 
 * @properties={typeid:24,uuid:"1B7BFE54-438E-40DA-9DED-48757011E013"}
 */
function getSelection() {
	var selection = elements.svygooglecharts.getSelection();
	if (selection) {
		elements.lblChartEvents.text = 'selection of chart is row ' + selection[0].row + ', column ' + selection[0].column + ' with value ' + selection[0].value;
	} else {
		elements.lblChartEvents.text = 'Nothing is currently selected in chart';		
	}
}

/**
 * @param {JSEvent} event
 * @param {Array<svygooglecharts-svygooglecharts.ChartSelection>} selection
 *
 * @protected 
 *
 * @properties={typeid:24,uuid:"79E8E484-ECFC-489F-9697-38BFE3B0388C"}
 */
function onDoubleClick(event, selection) {
	elements.lblChartEvents.text = event.getType() + ' called from chart "' + event.getElementName() + '" from row ' + selection[0].row + ', column ' + selection[0].column + ' with value ' + selection[0].value;
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"AC9CF95A-B8F1-4FF5-8766-6BE8E49CA8A0"}
 */
function onAction_createChart(event) {
	createChart();
}

/**
 * @private 
 * @properties={typeid:24,uuid:"291DD496-A60A-4C6A-BBA0-5BFFB429422D"}
 */
function createChart() {
	//convert options string to object and properly serialize it
	var optsToSend = eval('(' + options + ')');
	optsToSend = JSON.stringify(optsToSend);
	//create a real array from data string
	var dataToSend = eval(data);
	elements.svygooglecharts.drawChart(chartType, dataToSend, optsToSend);
}

/**
 * Callback method when form is (re)loaded.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"2317D548-4D89-4777-872E-9DDCF5834A13"}
 */
function onLoad(event) {
	setUpChart();
}

/**
 * @private 
 * @properties={typeid:24,uuid:"2D566A9D-F2BA-4D8B-9BDC-19EF2D9DF5F1"}
 */
function setUpChart() {
	chartType = getChartType();
	var opts = getChartOptions();
	var dataArray = getChartData();
	
	var optionString = JSON.stringify(opts, null, '\t');
	options = optionString;
	
	var dataString = JSON.stringify(dataArray).split('],[').join('],\n\t[');
	
	dataString = '[\n\t' + dataString.substr(1);
	dataString = dataString.substr(0, dataString.length - 1) + '\n]';
	data = dataString;
}

/**
 * Override this method to provide form specific chart data
 * @abstract
 * @protected 
 * @properties={typeid:24,uuid:"4123DBC0-85B6-4EE3-9D3F-28633145A35F"}
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
 * Override this method to provide form specific chart options
 * @abstract
 * @protected 
 * @properties={typeid:24,uuid:"304FC7E2-49A3-46A1-9D7B-E7CE7C9D5612"}
 */
function getChartOptions() {
	return {
		title: 'My Daily Activities',
		someProp: {someValue: 12},
		is3D: true
	}
}

/**
 * Override this method to set the form specific chart type
 * @abstract
 * @protected 
 * @properties={typeid:24,uuid:"2120FE31-F624-45F8-AFC4-B90460F41F26"}
 */
function getChartType() {
	return 'PieChart';
}

/**
 * Override this method to return the URL of the docs for this chart type
 * @abstract
 * @protected 
 * @properties={typeid:24,uuid:"63686F5E-A07A-49D7-AF85-9C8B10B81463"}
 */
function getChartUrl() {
	return 'https://developers.google.com/chart/interactive/docs/gallery';
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"76B01F05-2335-4EDE-B314-BF6534CCEF2B"}
 */
function onAction_clearChart(event) {
	elements.svygooglecharts.clearChart();
}

/**
 * Perform the element default action.
 *
 * @param {JSEvent} event the event that triggered the action
 *
 * @private
 *
 * @properties={typeid:24,uuid:"F5A25EBA-15B4-40B4-A4BA-0C265AB960DB"}
 */
function onAction_showDocs(event) {
	var url = getChartUrl();
	if (url) {
		application.showURL(url, '_blank');
	}
}
