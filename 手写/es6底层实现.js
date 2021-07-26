var arr = ['a', 'b', 'c', 'd', 'e', 10];
Array.prototype.myForeach = function (fn, thisArg) {
	//    如果不是函数 抛错
	if (typeof fn != 'function') {
		throw new Error(`${fn} is no a function`);
	}
	// this表示当前被调用的数组
	var self = this;
	for (var i = 0; i < self.length; i++) {
		fn.call(thisArg, self[i], i, self);
	}
};
// arr.myForeach((item, index) => {
// 	console.log(item, index)
// 	return (arr[index] = index)
// })
// console.log(arr)

// map : 映射，遍历数组并且返回一个新的数组
Array.prototype.myMap = function (fn, thisArg) {
	// 如果不是函数 抛错
	if (typeof fn != 'function') {
		return new Error(`${fn} is no a function`);
	}
	var self = this;
	var selfArray = [];
	for (var i = 0; i < self.length; i++) {
		// 调用返回的每一项都放到新数组中
		selfArray[i] = fn.call(thisArg, self[i], i, self);
	}
	// 返回新数组
	return selfArray;
};
// let newArray = arr.myMap((ite, index, arr) => {
// 	return index
// })
// console.log(newArray)

// filter: 返回满足条件的每一项到新数组
Array.prototype.myFilter = function (fn, thisArg) {
	if (typeof fn != 'function') {
		return new Error(`${fn} is no a function`);
	}
	let self = this;
	let newArray = [];
	for (var i = 0; i < self.length; i++) {
		// if (fn(self[i], i, self)) {
		// 	newArray.push(self[i])
		// }
		// 调用fn函数返回结果，如果满足条件则把此项放入新数组中
		fn.call(thisArg, self[i], i, self) && newArray.push(self[i]);
	}
	return newArray;
};
// let filterArray = arr.myFilter((item) => {
// 	return item == 'a'
// })
// console.log(filterArray)

// find: 返回满足条件的第一个元素
Array.prototype.myFind = function (fn, thisArg) {
	if (typeof fn != 'function') {
		return new Error(`${fn} is no a function`);
	}
	let self = this;
	for (var i = 0; i < self.length; i++) {
		if (fn.call(thisArg, self[i], i, self)) {
			// 如果当前元素满足，则返回此元素
			return self[i];
		}
	}
};
// let findArray = arr.myFind((ite) => {
// 	return ite > 9
// })
// console.log(findArray)

// every: 判断数组中每一项是否满足条件 如有是返回true 否则返回false
Array.prototype.myEvery = function (fn, thisArg) {
	if (typeof fn != 'function') {
		return new Error(`${fn} is no a function`);
	}
	let self = this;
	for (var i = 0; i < self.length; i++) {
		// 如果数组中有一项不满足条件，则返回false
		if (!fn.call(thisArg, self[i], i, self)) {
			return false;
		}
	}
	// 否则返回true（循环遍历已经完成，没有为false的）
	return true;
};
// let isEvery = arr.myEvery((ite) => {
// 	return ite > 9
// })
// console.log(isEvery)

// some: 判断数组中是否有一项满足条件，如果有返回true，否则返回false
Array.prototype.mySome = function (fn, thisArg) {
	if (typeof fn != 'function') {
		return new Error(`${fn} is no a function`);
	}
	let self = this;
	for (var i = 0; i < self.length; i++) {
		//当前项如果满足条件则返回true
		if (fn.call(thisArg, self[i], i, self)) {
			return true;
		}
	}
	// 循环遍历已经完成，依然没有一项为true，则返回false
	return false;
};
// let isSome = arr.mySome((ite) => {
// 	return ite > 9
// })
// console.log(isSome)
