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
    
    var senator = new Ugh(1000, arr) // interval, function array
    
    senator.addFunction(function () { console.log('DONE'); });

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

----------

*\* Especially for freely-hosted web services, which like to 502 and 503, which is why I built this in the first place. kthxbye.*