class Node {
  public val: number;
  public next: Node | null;
  constructor(val?: number, next?: Node | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/*
consider edge cases where
- the linked list is empty before/after adding/deleting a node
- addition and deletion happens at "index === 0" or "index === size (size - 1)""
and remember to update this.head and this.tail if needed
*/

class MyLinkedList {
  private size: number;
  private head: Node | null;
  private tail: Node | null;
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  get(index: number): number {
    if (index > this.size - 1) {
      return -1;
    } else {
      let curr = this.head;
      for (let i = 0; i < index; i++) {
        curr = curr.next;
      }
      return curr.val;
    }
  }

  addAtHead(val: number): void {
    let newNode = new Node(val, this.head);
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
    this.size++;
  }

  addAtTail(val: number): void {
    let newNode = new Node(val);
    if (this.tail) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }
    this.tail = newNode;
    this.size++;
  }

  addAtIndex(index: number, val: number): void {
    if (index > this.size) {
      return;
    }
    if (index === this.size) {
      this.addAtTail(val);
      return;
    }
    let newNode = new Node(val);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.size++;
      return;
    }
    let dummyNode = new Node(0, this.head);
    let prev = dummyNode,
      curr = this.head;
    for (let i = 0; i < index; i++) {
      curr = curr.next;
      prev = prev.next;
    }
    prev.next = newNode;
    newNode.next = curr;
    this.size++;
  }

  deleteAtIndex(index: number): void {
    if (index >= this.size) {
      return;
    }
    let dummyNode = new Node(0, this.head);
    let prev = dummyNode,
      curr = this.head;
    if (index === 0) {
      this.head = curr.next;
      if (this.size === 1) {
        this.tail = null;
      }
    } else {
      for (let i = 0; i < index; i++) {
        curr = curr.next;
        prev = prev.next;
      }
      prev.next = curr.next;
      if (index === this.size - 1) {
        this.tail = prev;
      }
    }
    this.size--;
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
