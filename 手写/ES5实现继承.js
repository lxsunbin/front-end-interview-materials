/**
 * @description: 原型继承
    缺点就是原型是所有子类实例共享的，其中一个子例更改原型引用类型属性就全会改变（引用值共享），创建子类时，无法向父类构造函数传参数
 */
function Parent(name) {
	this.name = name;
}
Parent.prototype.say = function () {
	console.log(this.name);
};
function Child(age) {
	this.age = age;
}
Child.prototype = new Parent('parent');

/**
 * @description: 构造函数继承
    缺点就是不能继承父类原型（无法拿到原型上的方法），函数在构造函数中，每个子类实例不能共享函数，浪费内存
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
}

/**
 * @description: 组合继承
    缺点就是父类构造函数会被调用两次;并且生成了两个实例，子类实例中的属性和方法会覆盖子类原型(父类实例)上的属性和方法，所以增加了不必要的内存
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
}
Child.prototype = new Parent();
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
	this.age = age;
}
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;
