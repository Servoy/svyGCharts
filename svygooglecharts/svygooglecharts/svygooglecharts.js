angular
	.module('svygooglechartsSvygooglecharts', ['servoy', 'googlechart'])
	.directive('svygooglechartsSvygooglecharts', ['googleChartApiPromise', '$timeout',
	function(googleChartApiPromise, $timeout) {
		return {
			restrict: 'E',
			scope: {
				model: "=svyModel",
				api: "=svyApi",
				svyServoyapi: "=",
				handlers: "=svyHandlers"
			},
			link: function($scope, $element, $attrs) {

				//used by events fired
				$scope.elementName = null;
				
				if ($scope.svyServoyapi.isInDesigner() && !$scope.model.chartSpec) {
					//create dummy chart for designer
					$scope.model.chartSpec = { };
					$scope.model.chartSpec.type = 'PieChart';
					$scope.model.chartSpec.options = {
				        title: 'My Daily Activities'
			        };
					$scope.model.chartSpec.data = [
			          ['Task', 'Hours per Day'],
			          ['Work',     11],
			          ['Eat',      2],
			          ['Commute',  2],
			          ['Watch TV', 2],
			          ['Sleep',    7]
			        ]
				}

				googleChartApiPromise.then(drawChart);
				
				/******************** API ********************/

				/**
				 * Draws a chart of the given type using the given data and options
				 * 
				 * @see https://developers.google.com/chart/interactive/docs/gallery for types and their options
				 * 
				 * @param {String} type e.g. 'BarChart', 'ScatterChart', 'ColumnChart', 'PieChart'
				 * @param {Array<Array>} data
				 * @param {Object} options
				 * 
				 * @example 
				 * var data = [
				 * 	['Genre', 'Fantasy & Sci Fi', 'Romance', 'Mystery/Crime', 'General', 'Western', 'Literature', { role: 'annotation' }],
				 * 	['2010', 10, 24, 20, 32, 18, 5, ''],
				 * 	['2020', 16, 22, 23, 30, 16, 9, ''],
				 * 	['2030', 28, 19, 29, 30, 12, 13, '']];
				 * 
				 * var options = {
				 * 	width: 800,
				 * 	height: 600,
				 * 	legend: { position: 'top', maxLines: 3 },
				 * 	bar: { groupWidth: '75%' },
				 * 	isStacked: true
				 * 	};
				 * 
				 * 	elements.%%elementName%%.drawChart('BarChart', data, options);
				 */
				$scope.api.drawChart = function(type, data, options) {
					if (typeof options === 'string') {
						options = JSON.parse(options);
					}
					
					$scope.model.chartSpec = { };
					$scope.model.chartSpec.type = type;
					$scope.model.chartSpec.options = options;
					$scope.model.chartSpec.data = data;
					
					$scope.svyServoyapi.apply('chartSpec');

					googleChartApiPromise.then(drawChart);
				}

				/**
				 * Sets the given value of the given row and column and updates the chart
				 * 
				 * @param {Number} row
				 * @param {Number} column
				 * @param {Object} value
				 */
				$scope.api.setValue = function(row, column, value) {
					if ($scope.data) {
						$scope.data.setValue(row, column, value);
					}
				}

				/**
				 * Sets the selection of the chart of the given row and column
				 * 
				 * @param {Number} row or null if the whole row should be selected
				 * @param {Number} column or null if the whole column should be selected
				 */
				$scope.api.setSelection = function(row, column) {
					if ($scope.chartInternal.chart) {
						$scope.chartInternal.chart.setSelection([{ row: row, column: column }]);
					}
				}

				/**
				 * Gets the current selection of the chart as a ChartSelection array
				 * 
				 * @return {ChartSelection[]} selection
				 */
				$scope.api.getSelection = function() {
					if ($scope.chartInternal.chart) {
						var selection = $scope.chartInternal.chart.getSelection();
						if (selection && selection.length > 0) {
							var result = [];
							for (var i = 0; i < selection.length; i++) {
								var entry = selection[i];
								var value = null;
								if (entry.row && entry.column) {
									value = $scope.data.getValue(entry.row, entry.column);
								}
								result.push({ row: entry.row, column: entry.column, value: value })
							}
							return result;
						}
					}
					return null;
				}

				/******************** HANDLERS ********************/

				//variables used for double click detection
				var selectLastClick = 0;
				var selectClickWaitPromise = 0;
				var selectDoubleClickDuration = 300;
				var selectClickSelectedItems;
				
				$scope.onSelect = function(selectedItems) {
					if (!$scope.handlers.onSelect && !$scope.handlers.onDoubleClick) {
						return;
					}
					
					if ($scope.handlers.onDoubleClick) {
						var ts = (new Date()).getTime();
						//TODO maybe enhance this to also check if the same selection was clicked on
						if ((ts - selectLastClick) < selectDoubleClickDuration) {
							//double click
							$timeout.cancel(selectClickWaitPromise);
							selectLastClick = 0;
							doubleClickHandler();
						} else {
							//single click; wait to see if it "becomes" a double click
							selectClickWaitPromise = $timeout(function() {
								singleClickHandler();
							}, selectDoubleClickDuration);
							selectLastClick = ts;
							if (selectedItems && selectedItems.length > 0) {
								selectClickSelectedItems = selectedItems;
							}
						}
					} else {
						singleClickHandler();
					}
				}
				
				function doubleClickHandler() {
					var jsEvent = createJSEvent('doubleClick');
					if (selectClickSelectedItems) {
						var result = new Array();
						for (var i = 0; i < selectClickSelectedItems.length; i++) {
							var item = selectClickSelectedItems[i];
							var value;
							if (item.row != null && item.column != null) {
								value = $scope.data.getValue(item.row, item.column);
							}
							result.push({ column: item.column, row: item.row, value: value });
						}
						$scope.handlers.onDoubleClick(jsEvent, result);
						$scope.chartInternal.chart.setSelection(selectClickSelectedItems);
						selectClickSelectedItems = null;
					}
				}
				
				function singleClickHandler() {
					var jsEvent = createJSEvent('onSelect');
					var selection = getSelection();
					if (selection) {
						$scope.handlers.onSelect(jsEvent, selection);
					}
				}

				$scope.onReady = function(chartWrapper) {
					console.log('svygooglecharts ready');
					$scope.chartInternal.chart = chartWrapper.getChart();
				}

				$scope.mouseoverHandler = function(row, column) {
					if (!$scope.handlers.onMouseOver) {
						return;
					}
					var jsEvent = createJSEvent('onMouseOver');
					var value;
					if (row != null && column != null) {
						value = $scope.data.getValue(row, column);
					}

					//call handler
					$scope.handlers.onMouseOver(jsEvent, [{ row: row, column: column, value: value }]);
				}

				$scope.mouseoutHandler = function(row, column) {
					if (!$scope.handlers.onMouseOut) {
						return;
					}
					var jsEvent = createJSEvent('onMouseOut');
					var value;
					if (row != null && column != null) {
						value = $scope.data.getValue(row, column);
					}

					//call handler
					$scope.handlers.onMouseOut(jsEvent, [{ row: row, column: column, value: value }]);
				}

				$scope.onError = function(error) {
					if ($scope.handlers.onError) {
						//call handler
						var jsEvent = createJSEvent('onError');
						$scope.handlers.onError(jsEvent, error.id, error.message);
					}
				}

				/******************** INTERNAL ********************/

				function drawChart() {
					if ($scope.model.visible === false) {
						return;
					}
					$scope.chartInternal = { };
					if ($scope.model.chartSpec.type) {
						$scope.chartInternal.type = $scope.model.chartSpec.type;
					}
					if ($scope.model.chartSpec.options) {
						$scope.chartInternal.options = $scope.model.chartSpec.options;
					}
					if ($scope.model.chartSpec.data) {
						var firstRowIsData = $scope.chartInternal.options.firstRowIsData === true;
						$scope.data = google.visualization.arrayToDataTable($scope.model.chartSpec.data, firstRowIsData);
						$scope.chartInternal.data = $scope.data;
					}
				}

				function getSelection() {
					var chart = $scope.chartInternal.chart;
					if (!chart) {
						return null;
					}
					var selection = chart.getSelection();
					if (!selection || selection.length == 0) return;
					var result = new Array();
					for (var i = 0; i < selection.length; i++) {
						var item = selection[i];
						var value;
						if (item.row != null && item.column != null) {
							value = $scope.data.getValue(item.row, item.column);
						}
						result.push({ column: item.column, row: item.row, value: value });
					}
					return result;
				}

				/**
				 * Create a JSEvent with the given type
				 */
				function createJSEvent(type) {
					if (!$scope.elementName) {
						var form;
						var parent = $element[0];
						var targetElNameChain = new Array();
						while (parent) {
							form = parent.getAttribute("ng-controller");
							if (form) {
								break;
							}
							if (parent.getAttribute("name")) targetElNameChain.push(parent.getAttribute("name"));
							parent = parent.parentNode;
						}
						var formScope = angular.element(parent).scope();
						for (var i = 0; i < targetElNameChain.length; i++) {
							if (formScope.model[targetElNameChain[i]]) {
								$scope.elementName = targetElNameChain[i];
								break;
							}
						}
					}

					//create JSEvent
					var jsEvent = { svyType: 'JSEvent' };

					jsEvent.elementName = $scope.elementName;
					jsEvent.eventType = type;

					jsEvent.data = null;
					return jsEvent;
				}
			},
			controller: function($scope, $element, $attrs) { },
			templateUrl: 'svygooglecharts/svygooglecharts/svygooglecharts.html'
		};
	}]).value('googleChartApiConfig', {
        version: '1.1',
        optionalSettings: {
            packages: ['corechart'], language: navigator.locale ? navigator.locale.split('-')[0] : 'en'
        }
    })