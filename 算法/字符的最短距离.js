/**
 * @description https://leetcode-cn.com/problems/shortest-distance-to-a-character/
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function (S, C) {
	let len = S.length;
	// 存储C出现在S中的index
	let cArr = [];
	let res = [];
	for (let i = 0; i < len; i++) {
		if (S[i] === C) {
			cArr.push(i);
		}
	}
	for (let i = 0; i < len; i++) {
		let distance = Math.abs(i - cArr[0]);
		for (let j = 0; j < cArr.length; j++) {
			if (distance > Math.abs(i - cArr[j])) {
				distance = Math.abs(i - cArr[j]);
			}
		}
		res.push(distance);
	}
	return res;
};
