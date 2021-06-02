Array.prototype.newMap = function (fn, context) {
	let res = [];
	if (typeof fn !== 'function') {
		throw new TypeError(fn + 'is not a function');
	}
	var context = arguments[1];
	for (var i = 0; i < this.length; i++) {
		res.push(fn.call(context, this[i], i, this));
	}
	return res;
};

Array.prototype.reduceMap = function (fn, context) {
	let res = [];
	var context = arguments[1];
	this.reduce((_acc, cur, index, arr) => {
		return res.push(fn.call(context, cur, index, arr));
	}, []);
	return res;
};

console.log(
	[1, 2, 3].newMap(item => item * 3),
	[1, 2, 3].reduceMap(item => item * 3),
	[1, 2, 3].map(item => item * 3)
);
