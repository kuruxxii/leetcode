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

/*
head = head.next doesn't actually remove the head node from the linked list; it only moves the head pointer to the next node. 
However, the reason why this works in the given implementation is that the returned value becomes the new head of the modified linked list.
*/

function removeElements(head: ListNode | null, val: number): ListNode | null {
  // removes any occurrences of val at the beginning of the linked list
  while (head !== null && head.val === val) {
    head = head.next;
  }
  if (head === null) {
    return head;
  }
  // iterates through the linked list, removing any nodes with the value val
  let prev: ListNode = head,
    curr: ListNode = head.next;
  while (curr) {
    if (curr.val === val) {
      prev.next = curr.next;
    } else {
      // Without type assertion, the compiler would think prev's type is ListNode, pre.next's type is ListNode | null
      prev = prev.next as ListNode;
    }
    curr = curr.next;
  }
  return head;
}
