/**
浅拷贝：指的是将一个对象的属性值赋值到另一个对象，如果有的属性的值为引用类型的话，那么会将这个引用的地址赋值给对象，因此两个对象会有同一个引用类型的引用。浅拷贝可以使用Object.assign和展开运算符来实现。

深拷贝：如果遇到属性值为引用类型的时候，它新建一个引用类型并将对应的值赋值给它，因此对象获得的一个新的引用类型而不是一个原有类型的引用。深拷贝对于一些对象可以使用JSON的两个函数来实现，但是由于json的对象格式比js的对象格式更加严格，所以如果属性值里面出现函数或者Symbol类型的值时，会转换失败。 
 */
let obj = {
	id: 1,
	name: 'Tom',
	msg: {
		age: 18
	},
	arr: [1, 2, 3]
};
let o = {};
const deepCopy = (newObj, oldObj) => {
	console.log(o, newObj, oldObj);
	for (let k in oldObj) {
		let item = oldObj[k];
		//判断是数组？对象？简单类型？
		if (item instanceof Array) {
			newObj[k] = [];
			deepCopy(newObj[k], item);
		} else if (item instanceof Object) {
			newObj[k] = {};
			deepCopy(newObj[k], item);
		} else {
			//简单数据类型，直接赋值
			newObj[k] = item;
		}
	}
};
deepCopy(o, obj);

// ---------------------------------------------------------------------------------

function deepCopy(obj, cache = new WeakMap()) {
	// 判断是否为引用类型
	if (!obj instanceof Object) return obj;

	// 避免循环引用
	if (cache.get(obj)) return cache.get(obj);

	// 支持函数
	if (obj instanceof Function) {
		return function () {
			obj.call(this, ...arguments);
		};
	}

	// 支持日期
	if (obj instanceof Date) return new Date(obj);

	// 支持正则
	if (obj instanceof RegExp) return new RegExp(obj.source, obj.flags);

	/*
        还可以继续添加其他支持的数据类型
    */

	// 支持数组和对象
	const res = Array.isArray(obj) ? [] : {};

	// 缓存遍历过的对象
	cache.set(obj, res);

	// 遍历对象或数组
	Object.keys(obj).forEach(key => {
		if (obj[key] instanceof Object) {
			res[key] = deepCopy(obj[key], cache);
		} else {
			res[key] = obj[key];
		}
	});

	// 返回最终结果
	return res;
}

// 测试代码

let a = {
	number: 1,
	string: '嘿嘿',
	regexp: new RegExp('\\d{3}', 'g'),
	date: new Date('1997-10-10'),
	arr: [1, 2, 3],
	obj: {
		name1: '3',
		name2: {
			inner: 3
		}
	}
};

let c = deepCopy(a);

console.log(a);
console.log(c);
