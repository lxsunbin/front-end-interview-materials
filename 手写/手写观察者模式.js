class Subject {
	constructor() {
		this.observers = []; // 存放所有观察者
	}
	on(observer) {
		this.observers.push(observer);
	}
	notify(data) {
		this.observers.forEach(o => o.update(data));
	}
}

class Observer {
	constructor(name) {
		this.name = name; // 观察者的名字
	}
	update(newDate) {
		console.log(`我是观察者${this.name}：${newDate}`);
	}
}

// 测试代码
let subject = new Subject('message');

let o1 = new Observer('小红');
let o2 = new Observer('小明');

subject.on(o1);
subject.on(o2);

subject.notify('明天会下雨');
