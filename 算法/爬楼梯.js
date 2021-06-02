/**
 * @description https://leetcode-cn.com/problems/climbing-stairs/
 * @param {number} n
 * @return {number}
 */
const climbStairs = n => {
	let prev = 1;
	let cur = 1;
	for (let i = 2; i < n + 1; i++) {
		const temp = cur; // 暂存上一次的cur
		cur = prev + cur; // 当前的cur = 上上次cur + 上一次cur
		prev = temp; // prev 更新为 上一次的cur
	}
	return cur;
};
