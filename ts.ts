function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
	return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, 'a'); // okay
// getProperty(x, 'm'); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
console.log('1' + 2);
