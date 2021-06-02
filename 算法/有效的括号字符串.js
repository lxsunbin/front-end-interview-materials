/**
 * @description https://leetcode-cn.com/problems/valid-parenthesis-string/
 * https://leetcode-cn.com/problems/valid-parenthesis-string/solution/you-xiao-de-gua-hao-zi-fu-chuan-xian-jian-ce-you-g/
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
	let left = [],
		star = [];
	for (let i = 0; i < s.length; i++) {
		if (s[i] == '(') left.push(i);
		if (s[i] == '*') star.push(i);
		if (s[i] == ')') {
			if (left.length == 0) {
				if (star.length == 0) return false;
				star.pop();
			} else {
				left.pop();
			}
		}
	}
	if (left.length > star.length) return false;
	while (left.length && star.length) {
		if (left.pop() > star.pop()) return false;
	}
	return true;
};
