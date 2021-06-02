const animals = ['🐷', ['🐶', '🐂'], ['🐎', ['🐑', ['🐲']], '🐛']];
const res = animals.flat(Infinity);
const res2 = animals.reduce((acc, cur) => [...acc, ...cur], []);

// reduce实现
//arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
//如果没有提供initialValue，reduce 会从索引1的地方开始执行 callback 方法，跳过第一个索引。如果提供initialValue，从索引0开始。
const flatReduce = arr =>
	arr.reduce(
		(acc,
		cur => (Array.isArray(cur) ? [...acc, flat(cur)] : [...acc, cur]),
		[])
	);

// reduce实现（参数）
const flatReduce = (arr, num) =>
	num > 0
		? arr.reduce(
				(acc,
				cur =>
					Array.isArray(cur)
						? [...acc, flat(cur, num - 1)]
						: [...acc, cur],
				[])
		  )
		: [...arr];

// 栈实现
const flatStack = arr => {
	const res = [];
	const statck = [...arr];
	while (statck.length !== 0) {
		const val = statck.pop();
		if (Array.isArray(val)) {
			statck.push(...val); //如果是数组再次入栈，并且展开了一层
		} else {
			res.unshift(val);
		}
	}
	return res;
};
