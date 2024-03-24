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

// The number of nodes in the list may be odd.

function swapPairs(head: ListNode | null): ListNode | null {
  const dummyNode: ListNode = new ListNode(0, head);
  let ref: ListNode | null = dummyNode;
  while (ref && ref.next && ref.next.next) {
    // Since ref.next and ref.next.next may be null, we'd better define nodeOne and nodTwo inside the while loop.
    let nodeOne: ListNode = ref.next,
      nodeTwo: ListNode = ref.next.next;
    let temp: ListNode | null = nodeTwo.next;
    // swap
    ref.next = nodeTwo;
    nodeTwo.next = nodeOne;
    nodeOne.next = temp;
    // move forward
    ref = nodeOne;
  }
  return dummyNode.next;
}

/*
In the given code, head remains pointing to the original head of the linked list
because the code does not modify the head pointer directly. 
Instead, it creates a new dummy node (dummyNode) and performs the swapping operations 
on the nodes referenced by dummyNode.next.
*/
