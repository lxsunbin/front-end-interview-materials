/**
 * @description https://leetcode-cn.com/problems/palindrome-number/
 * 回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。例如，121 是回文，而 123 不是。
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
