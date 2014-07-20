module.exports = (function () {
	var Slacker = function (timeout, funcarr) {
		this.timeout = timeout;
		this.funcs   = funcarr === undefined ? new Array() : funcarr;
	}

	Slacker.prototype.addFunction = function(_func) {
		if (typeof _func !== 'function') return;

		// Arrayify. Thanks to http://stackoverflow.com/questions/960866/
		// 					   converting-the-arguments-object-to-an-array-
		// 					   in-javascript
		arguments = Array.prototype.slice.call(arguments, 0);

		if (arguments.length > 1) {
			arguments.shift()
			this.funcs.push({function : _func, args : arguments});
			return;
		}

		this.funcs.push(_func);
	};

	Slacker.prototype.start = function() {
		if (!this.funcs.length) return;
		if (this.funcs.length > 1) setTimeout(this.start.bind(this), this.timeout);

		var todo = this.funcs.shift();
		if (typeof todo === 'function') { todo(); return; };
		todo.function.apply(this, todo.args);

	};

	return Slacker;
})();