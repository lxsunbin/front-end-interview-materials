/**
apply，call，bind三者的区别
1、三者都可以改变函数的this对象指向。
2、三者第一个参数都是this要指向的对象，如果如果没有这个参数或参数为undefined或null，则默认指向全局window。
3、三者都可以传参，但是apply是数组，而call是参数列表，且apply和call是一次性传入参数，而bind可以分为多次传入。
4、bind 是返回绑定this之后的函数，便于稍后调用；apply 、call 则是立即执行 。
 */

// 1、手写call
Function.prototype.myCall = function (context = window) {
	let obj = context || window; //这里可用ES6方法，为参数添加默认值，js严格模式全局作用域this为undefined
	obj.fn = this; //this为调用的上下文,this此处为函数，将这个函数作为obj的方法
	const args = [...arguments].slice(1); //第一个为obj所以删除,伪数组转为数组
	let res = obj.fn(...args);
	delete obj.fn; // 不删除会导致context属性越来越多
	return res;
};

//2、手写apply
Function.prototype.myApply = function (context = window) {
	// 箭头函数从不具有参数对象！！！！！这里不能写成箭头函数
	let obj = context || window;
	obj.fn = this;
	const args = arguments[1] || []; //若有参数，得到的是数组
	let res = obj.fn(...args);
	delete obj.fn;
	return res;
};

//3、手写bind
Function.prototype.myBind = function (context, ...outerArgs) {
	var fn = this;
	return function (...innerArgs) {
		//返回了一个函数，...rest为实际调用时传入的参数
		return fn.apply(context, [...outerArgs, ...innerArgs]); //返回改变了this的函数，
		//参数合并
	};
};
