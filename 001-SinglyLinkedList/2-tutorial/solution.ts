class ListNode {
  value: number;
  next: ListNode | null;

  constructor(value = 0,
              next: ListNode | null = null) {
    this.value = value;
    this.next = next;
  }
}

const node4 = new ListNode(16, null);
const node3 = new ListNode(0, node4);
const node2 = new ListNode(-5, node3);
const node1 = new ListNode(4, node2);

//
// Create a function called “toArray” that takes in a Singly Linked list (ListNode) and returns an array representation of the data.
//
const toArray = (listNode: ListNode | null): number[] => {
  if (listNode === null) {
    return [];
  }

  return [listNode.value].concat(toArray(listNode.next));
}

const toArrayUsingLoops = (listNode: ListNode | null): number[] => {
  const output: number[] = [];

  let runner: ListNode | null = listNode;
  while (runner !== null) {
    output.push(runner.value);
    runner = runner.next;
  }

  return output;
}

//
// Create a function called “consoleLog” that takes in a Singly Linked List and console logs the array representation of the Linked List.
//
const consoleLog = (listNode: ListNode | null): void => {
  console.log(toArray(listNode));
}

//
// Create a function called “size” that takes in a Singly Linked List (ListNode) and returns the number of ListNodes that the list contains.
//
const size = (listNode: ListNode | null): number => {
  if (listNode === null) {
    return 0;
  }

  return 1 + size(listNode.next);
}

const sizeUsingLoops = (listNode: ListNode | null): number => {
  let output = 0;
  let runner: ListNode | null = listNode;

  while (runner !== null) {
    output += 1;
    runner = runner.next;
  }

  return output;
}

//
// Create a function called “push” that takes in a Singly Linked List (ListNode) as well as a ListNode and adds the ListNode to the end of the SLL. (like array’s push method).
//
const push = (list: ListNode | null, listNode: ListNode): ListNode => {
  if (list === null) {
    return listNode;
  }

  list.next = push(list.next, listNode);

  return list;
}

const pushUsingLoops = (list: ListNode | null, listNode: ListNode): ListNode => {
  if (list === null) {
    return listNode;
  }

  let runner: ListNode | null = list;
  while (runner.next !== null) {
    runner = runner.next;
  }
  runner.next = listNode;
  return list;
}
