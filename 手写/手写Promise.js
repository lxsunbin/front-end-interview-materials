class Promise {
	constructor(executor) {
		this.state = 'pending';
		this.value = undefined;
		this.reason = undefined;
		this.onResolvedCallbacks = [];
		this.onRejectedCallbacks = [];
		let resolve = value => {
			if (this.state === 'pending') {
				this.state = 'fulfilled';
				this.value = value;
				// 一旦resolve执行，调用成功数组的函数
				this.onResolvedCallbacks.forEach(fn => fn());
			}
		};
		let reject = reason => {
			if (this.state === 'pending') {
				this.state = 'rejected';
				this.reason = reason;
				// 一旦reject执行，调用失败数组的函数
				this.onRejectedCallbacks.forEach(fn => fn());
			}
		};
		try {
			executor(resolve, reject);
		} catch (err) {
			reject(err);
		}
	}
	then(onFulfilled, onRejected) {
		onFulfilled =
			typeof onFulfilled === 'function' ? onFulfilled : value => value;
		onRejected =
			typeof onRejected === 'function'
				? onRejected
				: err => {
						throw err;
				  };
		let promise2 = new Promise((resolve, reject) => {
			if (this.state === 'fulfilled') {
				setTimeout(() => {
					try {
						let x = onFulfilled(this.value);
						resolvePromise(promise2, x, resolve, reject);
					} catch (e) {
						reject(e);
					}
				}, 0);
			}
			if (this.state === 'rejected') {
				setTimeout(() => {
					try {
						let x = onRejected(this.reason);
						resolvePromise(promise2, x, resolve, reject);
					} catch (e) {
						reject(e);
					}
				}, 0);
			}
			if (this.state === 'pending') {
				this.onResolvedCallbacks.push(() => {
					setTimeout(() => {
						try {
							let x = onFulfilled(this.value);
							resolvePromise(promise2, x, resolve, reject);
						} catch (e) {
							reject(e);
						}
					}, 0);
				});
				this.onRejectedCallbacks.push(() => {
					setTimeout(() => {
						try {
							let x = onRejected(this.reason);
							resolvePromise(promise2, x, resolve, reject);
						} catch (e) {
							reject(e);
						}
					}, 0);
				});
			}
		});
		return promise2;
	}
	catch(fn) {
		return this.then(null, fn);
	}
}
function resolvePromise(promise2, x, resolve, reject) {
	if (x === promise2) {
		return reject(new TypeError('Chaining cycle detected for promise'));
	}
	let called;
	if (x != null && (typeof x === 'object' || typeof x === 'function')) {
		try {
			let then = x.then;
			if (typeof then === 'function') {
				then.call(
					x,
					y => {
						if (called) return;
						called = true;
						resolvePromise(promise2, y, resolve, reject);
					},
					err => {
						if (called) return;
						called = true;
						reject(err);
					}
				);
			} else {
				resolve(x);
			}
		} catch (e) {
			if (called) return;
			called = true;
			reject(e);
		}
	} else {
		resolve(x);
	}
}
//resolve方法
Promise.resolve = function (val) {
	return new Promise((resolve, reject) => {
		resolve(val);
	});
};
//reject方法
Promise.reject = function (val) {
	return new Promise((resolve, reject) => {
		reject(val);
	});
};
//race方法
Promise.race = function (iterators) {
	return new Promise((resolve, reject) => {
		for (const p of iterators) {
			Promise.resolve(p)
				.then(res => {
					resolve(res);
				})
				.catch(e => {
					reject(e);
				});
		}
	});
};
//all方法(获取所有的promise，都执行then，把结果放到数组，一起返回)
Promise.all = function (iterator) {
	let count = 0; //用于计数，当等于len时就resolve
	let len = iterator.length;
	let res = []; //用于存放结果
	return new Promise((resolve, reject) => {
		for (let i in iterator) {
			Promise.resolve(iterator[i]) //先转化为Promise对象
				.then(data => {
					res[i] = data;
					if (++count === len) {
						resolve(res);
					}
				})
				.catch(e => {
					reject(e);
				});
		}
	});
};

// 只要其中的一个 promise 成功，就返回那个已经成功的 promise
// 如果可迭代对象中没有一个 promise 成功（即所有的 promises 都失败/拒绝），就返回一个失败的 promise 和 AggregateError 类型的实例，它是 Error 的一个子类，用于把单一的错误集合在一起
Promise.any = function (promises) {
	return new Promise((resolve, reject) => {
		promises = Array.isArray(promises) ? promises : [];
		let len = promises.length;
		// 用于收集所有 reject
		let errs = [];
		// 如果传入的是一个空数组，那么就直接返回 AggregateError
		if (len === 0)
			return reject(new AggregateError('All promises were rejected'));
		promises.forEach(promise => {
			promise.then(
				value => {
					resolve(value);
				},
				err => {
					len--;
					errs.push(err);
					if (len === 0) {
						reject(new AggregateError(errs));
					}
				}
			);
		});
	});
};
