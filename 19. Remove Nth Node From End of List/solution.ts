/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const dummyNode: ListNode = new ListNode(0, head);
  let slowIndex: ListNode = dummyNode,
    fastIndex: ListNode = dummyNode;
  while (n) {
    fastIndex = fastIndex.next;
    n--;
  }
  while (fastIndex.next) {
    slowIndex = slowIndex.next;
    fastIndex = fastIndex.next;
  }
  slowIndex.next = slowIndex.next.next;
  return dummyNode.next;
}

// If you wonder why returning head does not work, think about Input: head = [1], n = 1;
