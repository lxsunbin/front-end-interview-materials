/**
 * @description https://leetcode-cn.com/problems/reverse-string/
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
	// const n = s.length;
	// for (let left = 0, right = n - 1; left < right; left++, right--) {
	// 	[s[left], s[right]] = [s[right], s[left]];
	// }
	let i = 0,
		x = s.length - 1;
	while (i < x) {
		[s[i], s[x]] = [s[x], s[i]];
		i++;
		x--;
	}
};
