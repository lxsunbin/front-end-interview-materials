/**
柯里化的定义：接收一部分参数，返回一个函数接收剩余参数，接收足够参数后，执行原函数。

当柯里化函数接收到足够参数后，就会执行原函数，如何去确定何时达到足够的参数呢？
有两种思路：
1、通过函数的 length 属性，获取函数的形参个数，形参的个数就是所需的参数个数
2、在调用柯里化工具函数时，手动指定所需的参数个数
 */
var curry = fn =>
	(judge = (...args) => {
		console.log(args, fn.length);
		return args.length >= fn.length
			? fn(...args)
			: arg => judge(...args, arg);
	});

const add = (a, b, c) => a + b + c;
const curryTest = curry(add);
const res = curryTest(1)(2)(3);
