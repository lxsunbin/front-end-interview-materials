/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @description https://leetcode-cn.com/problems/linked-list-cycle/
 * 天秀解法：https://leetcode-cn.com/problems/linked-list-cycle/solution/shi-chuan-yi-jiu-de-javsscripttian-xiu-j-u8kv/
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
	// 1、暴力法
	// cur1 每遍历到一个节点，就让 cur2 从头遍历之前所有节点
	// 如果 cur2 走到 cur1，所用的步数二者一样，则相遇点不是入环点
	// 如果 cur2 走到 cur1，用的步数二者不一样，则相遇点是入环点，cur1比 cur2多走一个环
	let cur1 = head;
	let step1 = 0;
	while (cur1) {
		step1++;
		let cur2 = head;
		let step2 = 0;
		while (cur2) {
			step2++;
			if (cur1 == cur2) {
				if (step1 == step2) {
					break;
				} else {
					return true;
				}
			}
			cur2 = cur2.next;
		}
		cur1 = cur1.next;
	}
	return false;

	// 2、借助哈希表
	// 哈希表存遍历过的节点，每遍历一个节点，都查看哈希表是否存在当前节点，如果存在，则说明链表有环
	// 如果不存在，则存入哈希表，继续遍历
	let map = new Map();
	while (head) {
		if (map.has(head)) {
			return true;
		}
		map.set(head, true);
		head = head.next;
	}
	return false;

	// 3、快慢指针法
	// 快、慢指针，从头节点出发
	// 慢指针每次走一步，快指针每次走两步，不断比较它们指向的节点的值
	// 如果节点值相同，说明有环。如果不同，继续循环。
	let fast = head;
	let slow = head;
	while (fast) {
		if (fast.next == null) return false;
		slow = slow.next;
		fast = fast.next.next;
		if (slow == fals) return true;
	}
	return false;
};
