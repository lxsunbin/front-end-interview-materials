/**
 * @description https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/
 * @param {*} n
 * @return {*}
 */
var fib = function (n) {
	if (n < 2) return n;
	let pre = 0,
		cur = 1;

	for (let i = 2; i <= n; ++i) {
		cur = cur + pre;
		pre = cur - pre;
	}

	return cur;
};
console.log(fib(10));
