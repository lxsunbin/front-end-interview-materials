class Cat {
	constructor(name) {
		this.name = name;
	}
	speak() {
		console.log(this.name + ' makes a noise.');
	}
}
class Lion extends Cat {
	constructor(name, color) {
		// 即调用父类的构造函数
		super(name);
		this.color = color;
	}
	speak() {
		// 调用父类的 speak 方法
		super.speak();
		console.log(this.name + ' roars.');
	}
}
var a = {
	val() {
		return this === super.valueOf();
	}
};
console.log(a.val()); // 返回 true
var lion = new Lion('狮子', '黄色');
console.log(lion.speak());
