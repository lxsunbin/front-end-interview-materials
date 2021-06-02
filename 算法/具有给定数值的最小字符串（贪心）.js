/**
 * @description https://leetcode-cn.com/problems/smallest-string-with-a-given-numeric-value/
 * @param {number} n 长度
 * @param {number} k 数值
 * @return {string}
 */
var getSmallestString = function (n, k) {
	let cur = 0,
		pre = 0,
		sum = k,
		res = '';
	for (let i = 1; i <= n; i++) {
		sum -= pre;
		cur = Math.min(26, sum - (n - i));
		pre = cur;
		res = String.fromCharCode(cur + 'a'.charCodeAt(0) - 1) + res;
	}
	return res;
};
