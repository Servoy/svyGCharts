{
	"name": "svygooglecharts-svygooglecharts",
	"displayName": "Google Charts",
	"version": 1,
	"definition": "svygooglecharts/svygooglecharts/svygooglecharts.js",
	"icon": "svygooglecharts/svygooglecharts/images/svygooglecharts-icon.png",
	"libraries": [
		{"name":"ng-google-chart.js", "version":"0.1.0", "url":"svygooglecharts/svygooglecharts/js/ng-google-chart.js", "mimetype":"text/javascript"},
		{"name":"svygooglecharts.css", "version":"1.0.0", "url":"svygooglecharts/svygooglecharts/svygooglecharts.css", "mimetype":"text/css"}		
	],
	"model":
	{
		"chartSpec"					: { "type": "object", "pushToServer": "deep", "tags" : { "scope": "private" } },
		"size" 						: { "type" :"dimension",  "default" : {"width": 600, "height": 400} }, 
		"location" 					: { "type": "point" },
		"styleClass"				: { "type": "styleclass"},
		"visible"					: { "type": "visible" },
		"enabled"					: { "type": "enabled", "blockingOn": false, "default": true, "for": ["onSelect", "onDoubleClick", "onMouseOver", "onMouseOut"] },
		"readOnly" 					: { "type": "protected", "blockingOn": true, "default": false, "for": ["onSelect", "onDoubleClick", "onMouseOver", "onMouseOut"], "tags": {"scope":"runtime"} }
	},
	"api": {
		"drawChart": {
			"parameters": [
				{ "name": "type", "type": "string" },
				{ "name": "data", "type": "object" },
				{ "name": "options", "type": "object" }	
			]
		},
		"setValue": {
			"parameters": [
				{ "name": "row", "type": "int" },
				{ "name": "column", "type": "int" },
				{ "name": "value", "type": "object" }	
			]
		},
		"setSelection": {
			"parameters": [
				{ "name": "row", "type": "int" },
				{ "name": "column", "type": "int" }
			]
		},
		"getSelection": {
			"parameters": [],
			"returns": "ChartSelection[]" 
		}
	},
	"handlers": {
		"onError": {
			"description": "Called when an error occurs in the google chart library. A JSEvent, a chart specific error code and an error message is provided as arguments.",
			"parameters": [
				{ "name": "event", "type": "JSEvent" },
				{ "name": "errorCode", "type": "string" },
				{ "name": "errorMessage", "type": "string" }
			]
		},
		"onSelect": {
			"description": "Called when a chart item is selected. A JSEvent and the selection as a ChartSelection array is provided as arguments.",
			"parameters": [
				{ "name": "event", "type": "JSEvent" },
				{ "name": "selection", "type": "ChartSelection[]" }
			]
		},
		"onDoubleClick": {
			"description": "Called when a chart item is double clicked on. A JSEvent and the selection as a ChartSelection array is provided as arguments.",
			"parameters": [
				{ "name": "event", "type": "JSEvent" },
				{ "name": "selection", "type": "ChartSelection[]" }
			]
		},
		"onMouseOver": {
			"description": "Called when the mouse enters a chart item. A JSEvent and the selection as a ChartSelection array is provided as arguments.",
			"parameters": [
				{ "name": "event", "type": "JSEvent" },
				{ "name": "selection", "type": "ChartSelection[]" }
			]
		},
		"onMouseOut": {
			"description": "Called when the mouse leaves a chart item. A JSEvent and the selection as a ChartSelection array is provided as arguments.",
			"parameters": [
				{ "name": "event", "type": "JSEvent" },
				{ "name": "selection", "type": "ChartSelection[]" }
			]
		}
	}, 
	"types": {
		"ChartSelection": {
			"row" 					: { "type": "int" },
			"column" 				: { "type": "int" },
			"value" 				: { "type": "object" }
		}
	}
}