/**
nodeType===1 // 元素节点 e,g, div
nodeType===2 // 属性节点 e,g, with
nodeType===3 // 文本节点 e,g, "hello world"
 */
function traversal(node) {
	// 得先判断节点是否存在 && 节点下面是否还有其它节点，节点本身得是元素节点
	if (node && node.nodeType === 1) {
		console.log(node.tagName);
	}
	for (let i = 0; i < node.childNodes.length; i++) {
		if (node.childNodes[i].nodeType === 1) {
			// nodeType为1表示元素节点
			//递归先序遍历子节点
			traversal(item);
		}
	}
}
