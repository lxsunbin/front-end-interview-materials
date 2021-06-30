// const p = new Promise((resolve, reject) => {
// 	resolve(1);
// });
// p.then(res => {
// 	console.log(res);
// 	return 2;
// }).then(res => {
// 	console.log(res);
// });
// console.log(Object.prototype.toString.call(Promise.resolve('foo')));

const test = () =>
	new Promise((resolve, reject) => {
		resolve(1);
		// reject(1)
	});
const fn = async () => {
	const res = await test();
	console.log(res);
};
fn();
var a=1
console.log(a);
