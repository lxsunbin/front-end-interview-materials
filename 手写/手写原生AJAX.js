/**
1、创建 XMLHttpRequest 实例
2、发出 HTTP 请求
3、服务器返回 XML 格式的字符串
4、JS 解析 XML，并更新局部页面
不过随着历史进程的推进，XML 已经被淘汰，取而代之的是 JSON。
 */
myButton.addEventListener('click', function () {
	ajax();
});

function ajax() {
	let xhr = new XMLHttpRequest(); //实例化，以调用方法
	xhr.open('get', 'https://www.google.com');
	xhr.onreadystatechange = () => {
		//每当 readyState 属性改变时，就会调用该函数。
		if (xhr.readyState === 4) {
			//XMLHttpRequest 代理当前所处状态。
			if (xhr.status >= 200 && xhr.status < 300) {
				//200-300请求成功
				let string = xhr.responseText;
				//JSON.parse() 方法用来解析JSON字符串，构造由字符串描述的JavaScript值或对象
				let object = JSON.parse(string);
			}
		}
	};
	xhr.send(); //用于实际发出 HTTP 请求。不带参数为GET请求
}

function ajaxPromise(url) {
	const p = new Promise((resolve, reject) => {
		let xhr = new XMLHttpRequest();
		xhr.open('get', url);
		xhr.onreadystatechange = () => {
			if (xhr.readyState == 4) {
				if (xhr.status >= 200 && xhr.status <= 300) {
					resolve(JSON.parse(xhr.responseText));
				} else {
					reject('请求出错');
				}
			}
		};
		xhr.send(); //发送hppt请求
	});
	return p;
}
let url = '/data.json';
ajaxPromise(url)
	.then(res => console.log(res))
	.catch(reason => console.log(reason));

//------------------------------------------------------------------------------------------
/*
	1. get()方法
	   参数：url（请求的地址）、data（携带数据）、callback（成功回调函数）、dataType（返回数据类型）
	2. post()方法
	   参数：url（请求的地址）、data（携带数据）、callback（成功回调函数）、dataType（返回数据类型）
	3. ajax()方法
	   参数：obj（对象中包含了各种参数），其中有url、data、dataType、async、type
*/

let $ = {
	createXHR: function () {
		if (window.XMLHttpRequest) {
			return new XMLHttpRequest();
		} else {
			return new ActiveXObject();
		}
	},
	get: function (url, data, callback, dataType) {
		let dataType = dataType.toLowerCase();
		if (data) {
			url += '?';
			Object.keys(data).forEach(key => (url += `${key}=${data[key]}&`));
			url = url.slice(0, -1);
		}
		let xhr = this.createXHR();

		xhr.open('get', url);
		xhr.send();
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
				if (
					(xhr.status >= 200 && xhr.status < 300) ||
					xhr.status == 304
				) {
					let res =
						dataType === 'json'
							? JSON.parse(xhr.responseText)
							: xhr.responseText;
					callback(res, xhr.status, xhr);
				}
			}
		};
	},
	post: function (url, data, callback, dataType) {
		let dataType = dataType.toLowerCase();

		let xhr = this.createXHR();

		let str = '';
		if (data) {
			Object.keys(data).forEach(key => (str += `${key}=${data[key]}&`));
			str = str.slice(0, -1);
		}
		xhr.setRequestHeader(
			'Content-Type',
			'application/x-www-form-urlencoded'
		);
		xhr.send(str);
		xhr.onreadystatechange = function () {
			if (xhr.readyState === 4) {
				if (
					(xhr.status >= 200 && xhr.status < 300) ||
					xhr.status == 304
				) {
					let res =
						dataType === 'json'
							? JSON.parse(xhr.responseText)
							: xhr.responseText;
					callback(res, xhr.status, xhr);
				}
			}
		};
	},
	ajax: function (params) {
		// 初始化参数
		let type = params.type ? params.type.toLowerCase() : 'get';
		let isAsync = params.isAsync ? params.isAsync : 'true';
		let url = params.url;
		let data = params.data ? params.data : {};
		let dataType = params.dataType.toLowerCase();

		let xhr = this.createXHR();

		let str = '';

		// 拼接字符串
		Object.keys(data).forEach(key => (str += `${key}=${data[key]}&`));
		str = str.slice(0, -1);

		if (type === 'get') url += `?${str}`;

		return new Promise((resolve, reject) => {
			// 创建请求
			xhr.open(type, url, isAsync);

			if (type === 'post') {
				xhr.setRequestHeader(
					'Content-Type',
					'application/x-www-form-rulencoded'
				);
				xhr.send(str);
			} else {
				xhr.send();
			}

			xhr.onreadystatechange = function () {
				if (xhr.readyState === 4) {
					if (
						(xhr.status >= 200 && xhr.status < 300) ||
						xhr.status == 304
					) {
						let res =
							dataType === 'json'
								? JSON.parse(xhr.responseText)
								: xhr.responseText;
						resolve(res); // 请求成功，返回数据
					} else {
						reject(xhr.status); // 请求失败，返回状态码
					}
				}
			};
		});
	}
};
