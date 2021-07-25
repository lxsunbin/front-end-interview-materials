/**
 * @description https://leetcode-cn.com/problems/climbing-stairs/
 * @param {number} n
 * @return {number}
 */
const climbStairs = n => {
	let prev = 1;
	let cur = 1;
	for (let i = 2; i <= n; i++) {
		// const temp = cur; // 暂存上一次的cur
		// cur = prev + cur; // 当前的cur = 上上次cur + 上一次cur
		// prev = temp; // prev 更新为 上一次的cur
		[prev, cur] = [cur, cur + prev];
	}
	return cur;

	let dp = [];
	(dp[0] = 0), (dp[1] = 1), (dp[2] = 2);
	for (let i = 3; i <= n; i++) {
		dp[i] = dp[i - 2] + dp[i - 1];
	}
	return dp[n];
};
