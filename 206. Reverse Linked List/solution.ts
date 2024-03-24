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

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null,
    curr: ListNode | null = head,
    temp: ListNode | null = null;
  while (curr) {
    temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev;
}

/*
In JavaScript and TypeScript, when you pass a value to a function, it can be passed either by value or by reference, depending on the type of the value.

Passing by Value:
- For primitive types like `number`, `boolean`, `string`, `null`, and `undefined`, values are passed by copying their value.
- When you pass a primitive value to a function, a copy of that value is created and passed to the function.
- Any changes made to the parameter inside the function will not affect the original variable outside the function.

Passing by Reference:
- For non-primitive types like objects (including arrays, functions, and in this case, linked list nodes), values are passed by reference.
- When you pass an object to a function, a reference (address in memory) to that object is passed, not the entire object itself.
- If you modify the properties or values of the object inside the function, the original object outside the function will also be modified
  because they both point to the same memory location.

In the case of the `reverseList` function, the `head` parameter is passed by reference because it is a `ListNode` object (or `null`).
This means that inside the function, you are working with a reference to the original linked list, not a copy of the entire list.

The key points to understand are:

1. The `head` parameter inside the function points to the same memory location as the original linked list passed from outside the function.
2. When you modify the `next` pointers of the nodes inside the function, you are modifying the original linked list because the nodes are passed by reference.
3. The function returns a new "head" pointer (`prev`) that points to the first node of the reversed linked list, which is still part of the original list (just with modified `next` pointers).
*/
