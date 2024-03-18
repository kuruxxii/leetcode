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

function removeElements(head: ListNode | null, val: number): ListNode | null {
  // create a virtual head node
  const dummyNode = new ListNode(1, head);
  let prev: ListNode = dummyNode,
    curr: ListNode = head;
  while (curr !== null) {
    if (curr.val === val) {
      prev.next = curr.next;
    } else {
      prev = prev.next;
    }
    curr = curr.next;
  }
  return dummyNode.next;
}
