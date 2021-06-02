var isStraight = function (nums) {
	nums.sort(function (a, b) {
		return a - b;
	});
	let sum = 0;
	for (let i = 0; i < nums.length - 1; i++) {
		if (nums[i] == 0) continue;
		if (nums[i] == nums[i + 1]) return false;
		console.log(i, nums[i], nums[i + 1]);
		sum = sum + nums[i + 1] - nums[i];
	}
	return sum < 5;
};
isStraight([1, 2, 3, 4, 5]);
