	var Ugh = require('./slacker.js');
//	var arr = [ function () {console.log('Make budget');},
//	            function () {console.log('Work on budget');},
//	            function () {console.log('derp');},
//	            function () {console.log('get that budget done');},
//	            function () {console.log('almost...');} ];
//	
//	var senator = new Ugh(1000, arr) // interval, function array
//	
//	function say(msg) { console.log(msg); }
//	
//	senator.addFunction(say, 'DONE');
//	
//	senator.start();
	
	// Now just wait until the senator decides to go through its 
	// work (tbh still better than irl)	


	function work(who, days, things) {
		console.log(who, 'worked for', 
					days, 'days on',
					things.length, 'things.');
	}	


	var arr = [ {function: work, args: [ 'Marie',  500, ['science'] ]},
				{function: work, args: [ 'Sancho', 500, ['chivalry', 'friendship'] ]}
			  ];
	
	var senator = new Ugh(500, arr);
	senator.addFunction(work, 'Foo', 500, ['bars', 'tests', 'debugging']);
	senator.start();