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
	let res = 0,
		flag = 1;
	if (n < 2) {
		return 0;
	}
	for (let i = 1; i < n; i++) {
		for (let j = 2; j <= Math.sqrt(i); j++) {
			if (i % j === 0) {
				flag = 0;
				break;
			}
		}
		if (flag == 2) {
			res++;
		} else {
			flag = 2;
		}
	}
	return res;
};
countPrimes(10);
