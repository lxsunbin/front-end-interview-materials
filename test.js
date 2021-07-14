/* 
 实现一个randomString函数，返回一个数组，
 该数组内有一千个字符串，
 每串字符串为6位数0-9的随机验证码，不可重复。
*/
function randomString() {
	let res = [];
	const arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	while (res.length < 1000) {
		let item = '';
		for (let i = 0; i < 6; i++) {
			item += arr[Math.floor(Math.random() * 10)];
		}
		!res[item] && res.push(item);
	}
	console.log(res, res.length);
}
randomString();

/*
  实现一个sum函数，接收一个arr，
  累加arr的项，只能使用add方法，
  该方法接收两个数，
  模拟异步请求后端返回一个相加后的值
*/
function add(a, b) {
	return Promise.resolve(a + b);
}
function sum(arr) {
	return new Promise(resolve => {
		arr.reduce(
			(p, n) => p.then(total => add(total, n)),
			Promise.resolve(0)
		).then(resolve);
	});
}
(async () => {
	const result = await sum([1, 2, 3, 4]);
	console.log(result);
})();

/*
  请实现抽奖函数rand，保证随机性
  输入为表示对象数组，对象有属性n表示人名，w表示权重
  随机返回一个中奖人名，中奖概率和w成正比
*/
let peoples = [
	{ n: 'p1', w: 100 },
	{ n: 'p2', w: 200 },
	{ n: 'p3', w: 1 }
];
let rand = function (p) {
	const totalWeight = p.reduce(function (pre, cur) {
		cur.startW = pre;
		return (cur.endW = pre + cur.w);
	}, 0);
	console.log(totalWeight, p);
	let random = Math.ceil(Math.random() * totalWeight);
	let selectPeople = p.find(
		people => people.startW < random && people.endW > random
	);
	return selectPeople.n;
};
rand(peoples);

a = '';
var n = 0;
console.log(a, global.a);
Object.defineProperty(global, a, {
	get() {
		console.log(n);
		return ++n;
	}
});
if (a == 1 && a == 2 && a == 3) {
	console.log(1);
}

for (var i = 0; i < 4; i++) {
	setTimeout(i => {
		console.log(i);
	}, 100);
}
