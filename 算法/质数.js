/**
 * @description 质数是指在大于1的自然数中，除了1和它本身以外不再有其他因数的自然数。
 *  https://leetcode-cn.com/problems/count-primes/
 * @param {*} num
 * @return {*}
 */
function isPrime(num) {
	if (typeof num !== 'number' || !Number.isInteger(num)) {
		return false;
	}
	if (num <= 3) {
		return num > 1;
	} else {
		let sq = parseInt(Math.sqrt(num));
		for (let i = 2; i <= sq; i++) {
			if (num % i === 0) {
				return false;
			}
		}
	}
	return true;
}

var countPrimes = function (n) {
	if (n <= 2) {
		return 0;
	}
	let count = 0;
	//厄拉多塞筛法
	let flag = new Array(n).fill(true);
	for (let num = 2; num < n; num++) {
		if (flag[num]) {
			count++;
			for (let help = num + num; help < n; help += num) {
				flag[help] = false;
			}
		}
	}
	return count;
};
countPrimes(10);
