Slacker
========

Cuz running your functions at top speed isn't for everyone.*

## Usage


    var slacker = require('slacker');
    var arr = [ function () {console.log('yo');},
    			function () {console.log('yo');},
    			function () {console.log('yo');},
    			function () {console.log('derp');},
    			function () {console.log('yo');} ];
    
    var senator = new Slacker(1000, arr) // interval, function array
    
    senator.start();
    
    // Now just wait until the senator decides to go through its 
    // work (tbh still better than irl)

----------

*\* Especially for freely-hosted web services, which like to 502 and 503, which is why I built this in the first place*