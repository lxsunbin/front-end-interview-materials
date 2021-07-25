{
	/* <div id="container">
	<div class="node_1">
		<div class="node_1_1"></div>
		<div class="node_1_2"></div>
		<div class="node_1_3"></div>
	</div>
	<div class="node_2">
		<div class="node_2_1"></div>
		<div class="node_2_2"></div>
	</div>
	<div class="node_3"></div>	
</div> */
}

function breathTravalSal(node) {
	const nodes = [];
	const queue = [];
	if (node) {
		queue.push(node);
		while (queue.length) {
			const item = queue.shift();
			nodes.push(item);
			for (let v of item.children) {
				queue.push(v);
			}
		}
	}
	return nodes;
}
function deepTravalSal(node) {
	const nodes = [];
	const stack = [];
	if (node) {
		stack.push(node);
		while (stack.length) {
			const item = stack.pop();
			const len = item.children.length;
			nodes.push(item);
			for (let i = len - 1; i >= 0; i--) {
				stack.push(item.children[i]);
			}
		}
	}
	return nodes;
}
const parentDOM = document.getElementById('container');
console.log(breathTravalSal(parentDOM), deepTravalSal(parentDOM));
