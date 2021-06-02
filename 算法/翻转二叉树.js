/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @description https://leetcode-cn.com/problems/invert-binary-tree/
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
	// if (root == null) return null;
	// const left = invertTree(root.left);
	// const right = invertTree(root.right);
	// root.left = right;
	// root.right = left;
	// return root;
	if (root !== null) {
		[root.left, root.right] = [
			invertTree(root.right),
			invertTree(root.left)
		];
	}
	return root;
};
