/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @description https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
	/* 
        依题意 可以有两种思路
        1. loop 循环依次对比
        2. 递归 分治剪枝：返回有效期望链表项
    */
	// 1. loop 循环依次对比
	let p = (head = { next: null });
	while (l1 || l2) {
		if ((l1 && !l2) || (l1 && l1.val < l2.val)) {
			// 得到 p.next 指向 以及 更新 l1
			p.next = l1;
			l1 = l1.next;
		} else {
			// 得到 p.next 指向 以及 更新 l2
			p.next = l2;
			l2 = l2.next;
		}
		// 更新p
		p = p.next;
	}
	return head.next;

	// 2. 递归
	// 当其中有null 则返回有效值
	if (!l1 || !l2) return l1 || l2;
	// 进行大小对比
	if (l1.val < l2.val) {
		l1.next = mergeTwoLists(l1.next, l2);
		return l1;
	} else {
		l2.next = mergeTwoLists(l1, l2.next);
		return l2;
	}
};

// 1、head 创建新的链表节点， h 保存新链表的头节点
// 2、若l1与l2都未遍历完毕，将较小的节点接在新链表上
// 3、若一方遍历完毕则将另一方接上
// 4、返回新链表头节点的next
var mergeTwoLists = function (l1, l2) {
	var head = new ListNode();
	var h = head;
	while (l1 && l2) {
		if (l1.val < l2.val) {
			head.next = l1;
			l1 = l1.next;
		} else {
			head.next = l2;
			l2 = l2.next;
		}
		head = head.next;
	}
	if (l1) head.next = l1;
	if (l2) head.next = l2;
	return h.next;
};
