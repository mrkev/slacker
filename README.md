Ugh
========

Now? Ugh. Running functions at top speed isn't for everyone.*

## Usage


	var Ugh = require('ugh');
	var arr = [ function () {console.log('Make budget');},
	            function () {console.log('Work on budget');},
	            function () {console.log('derp');},
	            function () {console.log('get that budget done');},
	            function () {console.log('almost...');} ];
	
	var senator = new Ugh(1000, arr); // interval, function array
	
	senator.start();
	
	// Now just wait until the senator decides to go through its 
	// work (tbh still better than irl)	
    
This eventually prints

    yo
    yo
    yo
    derp
    yo
    DONE

👍

But what if you have a function like this:

	function work(who, days, things) {
		console.log(who, 'worked for', 
					days, 'days on',
					things.length, 'things.');
	}	

You can use named functions and pass arguments by specifing them in a 
dictionary or passing more arguments to `addFunction`.

	var arr = [ {function: work, args: [ 'Marie',  500, ['science'] ]},
				{function: work, args: [ 'Sancho', 500, ['stuff', 'travel'] ]}
			  ];
	
	var slacker = new Ugh(500, arr);
	slacker.addFunction(work, 'Foo', 500, ['bars', 'tests', 'debugging']);
	slacker.start();
	
Output:

	Marie worked for 500 days on 1 things.
	Sancho worked for 500 days on 2 things.
	Foo worked for 500 days on 3 things.

Hellzyeah👌

----------

*\* Especially for freely-hosted web services, which like to 502 and 503, 
which is why I built this in the first place. kthxbye.*