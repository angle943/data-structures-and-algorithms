class ListNode {
  value: number;
  next: ListNode | null;

  constructor(value = 0, next: ListNode | null = null) {
    this.value = value;
    this.next = next;
  }
}

const node4 = new ListNode(16, null);
const node3 = new ListNode(0, node4);
const node2 = new ListNode(-5, node3);
const node1 = new ListNode(4, node2);
