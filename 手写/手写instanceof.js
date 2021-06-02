/**
instanceof作用:
判断一个实例是否是其父类或者祖先类型的实例。
instanceof 在查找的过程中会遍历左边变量的原型链，直到找到右边变量的 prototype , 查找失败，返回 false
 */
let myInstanceof = (target, origin) => {
	while (target) {
		if (target.__proto__ === origin.prototype) {
			return true;
		}
		target = target.__proto__;
	}
	return false;
};
let a = [1, 2, 3];
console.log(myInstanceof(a, Array)); // true
console.log(myInstanceof(a, Object)); // true

function isInstanceOf(left, right) {
	let prototype = right.prototype;
	let _proto = left.__proto__; // Object.getPrototypeOf(left)

	while (_proto) {
		if (_proto === prototype) return true;
		_proto = _proto.__proto__;
	}

	return false;
}
