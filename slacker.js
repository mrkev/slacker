module.exports = (function () {
	var Slacker = function (timeout, funcarr) {
		this.timeout = timeout;
		this.funcs   = funcarr === undefined ? [] : funcarr;
	}

	Slacker.prototype.addFunction = function(func) {
		this.funcs.push(func);
	};

	Slacker.prototype.start = function() {
		if (!this.funcs.length) return;
		setTimeout(this.start.bind(this), this.timeout);
		this.funcs.shift()();
	};

	return Slacker;
})();