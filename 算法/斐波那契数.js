/**
 * @description https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/
 * 斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。
 */
var fib = function (n) {
	if (n < 2) return n;
	let cur = 1;
	let prev = 0;
	for (let i = 2; i <= n; i++) {
		[prev, cur] = [cur, (prev + cur) % 1000000007];
	}
	return cur;
};
console.log(fib(10));
