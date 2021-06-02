/**
 * @description https://leetcode-cn.com/problems/palindrome-number/
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
	let str = String(x);
	let head = 0;
	let tail = str.length - 1;
	while (head < tail) {
		if (str[head] !== str[tail]) {
			return false;
		}
		head++;
		tail--;
	}
	return true;
};
