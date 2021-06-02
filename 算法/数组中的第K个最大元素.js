/**
 * @description https://leetcode-cn.com/problems/kth-largest-element-in-an-array/
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
	return nums.sort((a, b) => b - a)[k - 1];
};
