/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * https://leetcode-cn.com/problems/two-sum/
 */
var twoSum = function (nums, target) {
	let hashMap = new Map();
	for (let i = 0; i < nums.length; i++) {
		let another = target - nums[i];
		if (hashMap.has(another)) {
			return [hashMap.get(another), i];
		}
		hashMap.set(nums[i], i);
	}
};
