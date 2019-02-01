/**
 * @properties={typeid:35,uuid:"F2C7DFB9-B920-453E-8E24-4C42BA9460B3",variableType:-4}
 */
var SAMPLES = [{
		type: 'PieChart',
		data: "[ \n\
          ['Language', 'Speakers (in millions)'],\n\
          ['Assamese', 13], ['Bengali', 83], ['Bodo', 1.4],\n\
          ['Dogri', 2.3], ['Gujarati', 46], ['Hindi', 300],\n\
          ['Kannada', 38], ['Kashmiri', 5.5], ['Konkani', 5],\n\
          ['Maithili', 20], ['Malayalam', 33], ['Manipuri', 1.5],\n\
          ['Marathi', 72], ['Nepali', 2.9], ['Oriya', 33],\n\
          ['Punjabi', 29], ['Sanskrit', 0.01], ['Santhali', 6.5],\n\
          ['Sindhi', 2.5], ['Tamil', 61], ['Telugu', 74], ['Urdu', 52]\n\
        ]",
		options: "{\n\
	          title: 'Indian Language Use',\n\
	          legend: 'none',\n\
	          pieSliceText: 'label',\n\
		      width: 600, \n\
		      height: 400, \n\
	          slices: {  4: {offset: 0.2},\n\
	                    12: {offset: 0.3},\n\
	                    14: {offset: 0.4},\n\
	                    15: {offset: 0.5}\n\
	          }\n\
	        }"
	}, {
		type: 'PieChart',
		data: "[ \n\
          ['Task', 'Hours per Day'], \n\
          ['Work',     11], \n\
          ['Eat',      2], \n\
          ['Commute',  2], \n\
          ['Watch TV', 2], \n\
          ['Sleep',    7] \n\
        ]",
		options: "{\n\
	          title: 'My Daily Activities', \n\
	          pieHole: 0.4, \n\
	          width: 600, \n\
	          height: 400 \n\
	    }"
	}, {
		type: 'ColumnChart',
		data: "[ \n\
         ['Element', 'Density', { role: 'style' }, { role: 'annotation' } ], \n\
         ['Copper', 8.94, '#b87333', 'Cu' ], \n\
         ['Silver', 10.49, 'silver', 'Ag' ], \n\
         ['Gold', 19.30, 'gold', 'Au' ], \n\
         ['Platinum', 21.45, 'color: #e5e4e2', 'Pt' ] \n\
        ]",
		options: '{\n\
	          title: "Density of Precious Metals, in g/cm^3", \n\
        width: 600, \n\
        height: 400, \n\
        bar: {groupWidth: "95%"}, \n\
        legend: { position: "none" }, \n\
	    width: 600, \n\
	    height: 400 \n\
	    }'
	}, {
		type: 'CandlestickChart',
		data: "[ \n\
         ['Mon', 20, 28, 38, 45], \n\
         ['Tue', 31, 38, 55, 66], \n\
         ['Wed', 50, 55, 77, 80], \n\
         ['Thu', 77, 77, 66, 50], \n\
         ['Fri', 68, 66, 22, 15] \n\
        ]",
		options: '{\n\
	          legend: "none", \n\
	          firstRowIsData: true, \n\
	          width: 600, \n\
	          height: 400 \n\
	    }'
	}, {
		type: 'OrgChart',
		data: "[ \n\
         [{v:'Mike', f:'Mike<div style=\"color:red; font-style:italic\">President</div>'}, \n\
           '', 'The President'], \n\
          [{v:'Jim', f:'Jim<div style=\"color:red; font-style:italic\">Vice President</div>'}, \n\
           'Mike', 'VP'], \n\
          ['Alice', 'Mike', ''], \n\
          ['Bob', 'Jim', 'Bob Sponge'], \n\
          ['Carol', 'Bob', ''] \n\
        ]",
		options: '{\n\
	          allowHtml:true, \n\
	          width: 600, \n\
	          height: 400 \n\
	    }'
	}]