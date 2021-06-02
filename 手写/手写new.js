/**
new的过程文字描述：
1、创建一个空对象 obj;
2、将空对象的隐式原型（_proto_）指向构造函数的prototype。
3、使用 call 改变 this 的指向
4、如果无返回值或者返回一个非对象值，则将 obj 返回作为新对象；如果返回值是一个新对象的话那么直接直接返回该对象。
 */
function Person(name, age) {
	this.name = name;
	this.age = age;
}
Person.prototype.sayHi = function () {
	console.log('Hi！我是' + this.name);
};
let p1 = new Person('张三', 18);

//手动实现new
function create() {
	let obj = {};
	//获取构造函数
	let args = [...arguments];
	let fn = args.shift(); //使得arguments能调用数组方法,第一个参数为构造函数
	obj.__proto__ = fn.prototype;
	//改变this指向，为实例添加方法和属性
	let res = fn.apply(obj, args);
	//确保返回的是一个对象(万一fn不是构造函数)
	return typeof res === 'object' ? res : obj;
}
let p2 = create(Person, '李四', 19);
p2.sayHi();

function MyNew() {
	let obj = {};
	let Constructor = [].shift.call(arguments);
	obj.__proto__ = Constructor.prototype;
	let result = Constructor.call(obj, arguments);
	return typeof result === 'object' ? result : obj;
}
