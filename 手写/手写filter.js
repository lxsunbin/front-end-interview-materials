Array.prototype.myFilter = function (callback, thisArg) {
	if (this == null) {
		throw new TypeError('this is null or not defined');
	}
	if (typeof callback !== 'function') {
		throw new TypeError(callback + ' is not a function');
	}
	const O = Object(this);
	const len = O.length >>> 0;
	let k = 0,
		res = [];
	while (k < len) {
		if (k in O) {
			if (callback.call(thisArg, O[k], k, O)) {
				res.push(O[k]);
			}
		}
		k++;
	}
	return res;
};

/**
O.length >>> 0 是什么操作？就是无符号右移 0 位，那有什么意义嘛？就是为了保证转换后的值为正整数。其实底层做了 2 层转换，第一是非 number 转成 number 类型，第二是将 number 转成 Uint32 类型。
https://zhuanlan.zhihu.com/p/100790268
 */
