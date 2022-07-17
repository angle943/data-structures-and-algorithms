class ListNode {
  value;
  next;

  constructor(value = 0, next = null) {
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
const toArray = (listNode) => {
  if (listNode === null) {
    return [];
  }

  return [listNode.value].concat(toArray(listNode.next));
}

const toArrayUsingLoops = (listNode) => {
  const output = [];

  let runner = listNode;
  while (runner !== null) {
    output.push(runner.value);
    runner = runner.next;
  }

  return output;
}

//
// Create a function called “consoleLog” that takes in a Singly Linked List and console logs the array representation of the Linked List.
//
const consoleLog = (listNode) => {
  console.log(toArray(listNode));
}

//
// Create a function called “size” that takes in a Singly Linked List (ListNode) and returns the number of ListNodes that the list contains.
//
const size = (listNode) => {
  if (listNode === null) {
    return 0;
  }

  return 1 + size(listNode.next);
}

const sizeUsingLoops = (listNode) => {
  let output = 0;
  let runner = listNode;

  while (runner !== null) {
    output += 1;
    runner = runner.next;
  }

  return output;
}

//
// Create a function called “push” that takes in a Singly Linked List (ListNode) as well as a ListNode and adds the ListNode to the end of the SLL. (like array’s push method).
//
const push = (list, listNode) => {
  if (list === null) {
    return listNode;
  }

  list.next = push(list.next, listNode);

  return list;
}

const pushUsingLoops = (list, listNode) => {
  if (list === null) {
    return listNode;
  }

  let runner = list;
  while (runner.next !== null) {
    runner = runner.next;
  }
  runner.next = listNode;
  return list;
}
