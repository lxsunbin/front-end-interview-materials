Object.assign2 = function (target, ...source) {
	if (target == null) {
		throw new TypeError('Cannot convert undefined or null to object');
	}
	let ret = Object(target); // Object本身是一个函数，可以当作工具方法使用，将任意值转为对象。这个方法常用于保证某个值一定是对象。
	source.forEach(function (obj) {
		if (obj != null) {
			for (let key in obj) {
				if (obj.hasOwnProperty(key)) {
					ret[key] = obj[key];
				}
			}
		}
	});
	return ret;
};
