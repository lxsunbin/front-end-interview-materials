/**
 * @description: 冒泡排序
 * 比较两个记录键值的大小，如果这两个记录键值的大小出现逆序，则交换这两个记录
 */
const bubbleSort = arr => {
	for (let i = 1; i < arr.length; i++) {
		for (let j = i; j > 0; j--) {
			if (arr[j] < arr[j - 1]) {
				[arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
			}
		}
	}
	return arr;
};

/**
 * @description 快速排序
 * 在n个记录中取某一个记录的键值为标准，通常取第一个记录键值为基准，通过一趟排序将待排的记录分为小于或等于这个键值的两个独立的部分，这时一部分的记录键值均比另一部分记录的键值小，然后，对这两部分记录继续分别进行快速排序，以达到整个序列有序
 */
const quickSort = arr => {
	if (arr.length <= 1) return arr;
	let right = [],
		left = [],
		keys = arr.shift();
	for (let value of arr) {
		if (value > keys) {
			right.push(value);
		} else {
			left.push(value);
		}
	}
	return [...quickSort(left), keys, ...quickSort(right)];
};

/**
 * @description 插入排序
 * 第i（i大于等于1）个记录进行插入操作时，R1、 R2，...，是排好序的有序数列，取出第i个元素，在序列中找到一个合适的位置并将她插入到该位置上即可。
 */
const insertSort = arr => {
	for (let i = 1; i < arr.length; i++) {
		let j = i - 1;
		if (arr[i] < arr[j]) {
			let temp = arr[i];
			while (j >= 0 && temp < arr[j]) {
				arr[j + 1] = arr[j];
				j--;
			}
			arr[j + 1] = temp;
		}
	}
	return arr;
};
