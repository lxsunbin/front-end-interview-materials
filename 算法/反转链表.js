/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @description https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
	// 迭代
	// 1、利用3个变量在循环过程中记录最后3种信息
	// 2、cur游标，一直往后循环，最后会为null
	// 3、prev记录前一个节点
	// 4、oldNext，变更方向时，需要先用oldNext记住改变前的next节点，否则无法向后循环
	var prev = null,
		cur = head,
		temp;
	while (cur) {
		temp = cur.next; //修改前先记住下一个节点
		cur.next = prev; //改别指向，第一个节点prev是null,
		prev = cur; //记录前一个节点，供下次循环使用
		cur = temp; // cur通过temp指向下一节点
	}
	return prev; //cur会多循环直到null

	// 递归
	if (head == null || head.next == null) {
		return head;
	}
	const current = reverseList(head.next);
	//例如，1，2，3，4，5,null
	//current是5
	//head是4
	//head.next 是 5
	//head.next.next 就是5指向的指针，指向当前的head（4）
	//5-4-3-2-1-null
	head.next.next = head;
	//注意把head.next设置为null，切断4链接5的指针
	head.next = null;
	//每层递归返回当前的节点，也就是最后一个节点。（因为head.next.next改变了，所以下一层current变4，head变3）
	return current;
};
