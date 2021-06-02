const EventEmitter = require('events').EventEmitter;

class MyEventEmitter extends EventEmitter {}
const myEventEmitter = new MyEventEmitter();
myEventEmitter.on('event', function () {
	console.log('event!');
});
myEventEmitter.on('event', function () {
	console.log('event2!');
});
console.log(myEventEmitter.listeners('event'));
myEventEmitter.on('error', function () {
	console.log('处理错误!');
});
myEventEmitter.emit('event');
myEventEmitter.emit('error', '这是一个错误');
