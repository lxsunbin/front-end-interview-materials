/**
 * @description: 原型继承
    缺点就是原型是所有子类实例共享的，改变一个其他也会改变，创建子类时，无法向父类构造函数传参数
 */
function Parent(name) {
	this.name = name;
}
Parent.prototype.say = function () {
	console.log(this.name);
};
function Child(age) {
	this.age = age;
	this.gender = 'male';
}
Child.prototype = new Parent('parent');

/**
 * @description: 构造函数继承
    缺点就是不能继承父类原型，函数在构造函数中，每个子类实例不能共享函数，浪费内存
 */
function Parent(name) {
	this.name = name;
}
Parent.prototype.say = function () {
	console.log(this.name);
};
function Child(name, age) {
	Parent.call(this, name);
	this.age = age;
	thie.gender = 'male';
}

/**
 * @description: 组合继承
    缺点就是父类原型和子类原型是同一个对象，无法区分子类真正是由谁构造
 */
function Parent(name) {
	this.name = name;
}
Parent.prototype.say = function () {
	console.log(this.name);
};
function Child(name, age) {
	Parent.call(this, name);
	this.age = age;
	thie.gender = 'male';
}
Child.prototype = Parent.prototype;
Child.prototype.constructor = Child;

/**
 * @description: 寄生组合继承
 */
function Parent(name) {
	this.name = name;
}
Parent.prototype.say = function () {
	console.log(this.name);
};
function Child(name, age) {
	Parent.call(this, name);
	this.age = 22;
	thie.gender = 'male';
}
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;
