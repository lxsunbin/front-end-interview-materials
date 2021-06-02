Array.prototype.myReduce = function (callback, initialValue) {
	if (this == null) {
		throw new TypeError('this is null or not defined');
	}
	if (typeof callback !== 'function') {
		throw new TypeError(callback + ' is not a function');
	}
	const O = Object(this);
	const len = O.length >>> 0;
	let k = 0,
		acc;

	if (arguments.length > 1) {
		acc = initialValue;
	} else {
		// 没传入初始值的时候，取数组中第一个非 empty 的值为初始值
		while (k < len && !(k in O)) {
			k++;
		}
		if (k > len) {
			throw new TypeError('Reduce of empty array with no initial value');
		}
		acc = O[k++];
	}
	while (k < len) {
		if (k in O) {
			acc = callback(acc, O[k], k, O);
		}
		k++;
	}
	return acc;
};

//------------------------------------------------------------------------------------------

/**
reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终为一个值，是ES5中新增的又一个数组逐项处理方法
参数：
callback（一个在数组中每一项上调用的函数，接受四个函数：）
        previousValue（上一次调用回调函数时的返回值，或者初始值）
        currentValue（当前正在处理的数组元素）
        currentIndex（当前正在处理的数组元素下标）
        array（调用reduce()方法的数组）
initialValue（可选的初始值。作为第一次调用回调函数时传给previousValue的值）
 */

function reduce(arr, cb, initValue) {
	var num = initValue == undefined ? (num = arr[0]) : initValue;
	var i = initValue == undefined ? 1 : 0;
	for (i; i < arr.length; i++) {
		num = cb(num, arr[i], i);
	}
	return num;
}

function fn(result, currentValue, index) {
	console.log(index);
	return result + currentValue;
}

var arr = [2, 3, 4, 5];
var b = reduce(arr, fn, 10);
var c = reduce(arr, fn);
console.log(b); // 24
