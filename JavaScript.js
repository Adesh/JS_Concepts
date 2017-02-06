/* Converting Decimal to Binary */
	// Ex:
		function dec2bin(dec){
		    return (dec >>> 0).toString(2);
		}

/* Converting Binary to Decimal */
	// Ex:
		function bin2dec(bin){
		    return parseInt(bin, 2).toString(10);
		}

/* optional parameters in JS */
	// Ex: 1
		function func(){
			for(var i in arguments){
				alert(arguments[i]);
		  		arguments[i] = arguments[i] || __defaultValue__; 
		  	}
		}
	// Ex: 2 -> default params
		function func2(a=1, b=2){
			//...
		}
	// Ex: 3 -> default params
		function func3(a,b, ...c){
			for(var i in c.length){
				alert(c[i]);	
			}
		}
		func(1);
		func('a','b','c','d');

/* bind() in JS */

/* inheritance in JS */
 
/* Hoisting in JS */
	// a variable can be used before it has been declared
	// Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope 
	// hoisting happens with initialization not with declaration
	// Ex:
		x = 5;
		alert(x); 	// will be found
		alert(y);	// will not be found
		var x; 		// Declaration - will not be hoisted
		var y = 7; 	// Initialize - will be hoisted
