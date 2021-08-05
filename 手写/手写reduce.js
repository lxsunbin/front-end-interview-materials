Array.prototype.myreduce = function (fn, initialValue) {
	// fn(accumulator, currentValue, currentIndex, sourceArray)
	// 判断调用对象是否为数组
	if (Object.prototype.toString.call([]) !== '[object Array]') {
		throw new TypeError('not a array');
	}
	// 判断调用数组是否为空数组
	const sourceArray = this;
	if (sourceArray.length === 0) {
		throw new TypeError('empty array');
	}
	// 判断传入的第一个参数是否为函数
	if (typeof fn !== 'function') {
		throw new TypeError(`${fn} is not a function`);
	}

	// 第二步
	// 回调函数参数初始化
	let accumulator, currentValue, currentIndex;
	if (initialValue) {
		accumulator = initialValue;
		currentIndex = 0;
	} else {
		accumulator = arr[0];
		currentIndex = 1;
	}

	// 第三步
	// 开始循环
	while (currentIndex < sourceArray.length) {
		currentValue = sourceArray[currentIndex];
		accumulator = fn(accumulator, currentValue, currentIndex, sourceArray);
		currentIndex++;
	}

	// 第四步
	// 返回结果
	return accumulator;
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
