/**
 * @description 快速排序
 * @param {*} arr
 * @return {*}
 */
const quickSort = arr => {
	if (arr.length == 0) return arr;
	const index = Math.floor(arr.length / 2);
	const mid = arr.splice(index, 1)[0];
	let left = [],
		right = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < mid) left.push(arr[i]);
		if (arr[i] > mid) right.push(arr[i]);
	}
	return [...quickSort(left), mid, ...quickSort(right)];
};
