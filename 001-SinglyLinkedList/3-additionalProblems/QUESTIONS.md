1. Create a function called “at” that takes in a Singly Linked List (ListNode) and an index as an argument, and returns either the ListNode at that index or undefined.

```javascript
    const listNode = [[4], [-5], [0], [16]];  // pretend this is a SLL

    at(listNode, 0) === [4];
    at(listNode, 3) === [16];
    at(listNode, -5) === null;
    at(listNode, 100) === null;
```

2. Create a function called "insertAtBeginning" that takes in a Singly Linked List (ListNode) and a number, and returns a newly created Linked List that added the number as the first listNode.

```javascript
   const listNode = [[4], [-5], [0], [16]]; // pretend this is a SLL

   insertAtBeginning(listNode, 8) === [[8], [4], [-5], [0], [16]];
   insertAtBeginning(null, 12) === [[12]];
```

3. Create a function called "insertAtIndex" that takes in a Singly Linked List (ListNode) of size N, a number n that is between [0, N] Inclusive, and any number x, and returns a newly created Linked List that inserted a new ListNode at index n with element X. You may assume that the second argument is always a valid argument.

```javascript
  const listNode = [[4], [-5], [0], [16]]; // pretend this is a SLL

  insertAtIndex(listNode, 1, 100) === [[4], [100], [-5], [0], [16]];
  insertAtIndex(listNode, 4, 100) === [[4], [-5], [0], [16], [100]];
  insertAtIndex(listNode, 0, 100) === [[100], [4], [-5], [0], [16]];
  insertAtIndex(listNode, -1, 100) // this will never happen, as -1 is not a valid index
  insertAtIndex(listNode, 5, 100) // this will never happen, as the size of the passed listNode is 4, and 5 > 4.
```

4. Create a function called "removeAtIndex" that takes in a Singly Linked List (ListNode) of size N, and a non-negative integer that is less than N, and returns a Linked List with the element at that index removed.

```javascript
  const listNode = [[4], [-5], [0], [16]]; // pretend this is a SLL

  insertAtIndex(listNode, 1) === [[4], [0], [16]];
  insertAtIndex(listNode, 3) === [[4], [-5], [0]];
  insertAtIndex(listNode, 0) === [[-5], [0], [16]];
  insertAtIndex(listNode, -1) // this will never happen, as -1 is not a valid index
  insertAtIndex(listNode, 4) // this will never happen, as listNode doesn't have an element at the fourth index.
```

5. Create a function called "indexOf" that takes in a Singly Linked List (ListNode) and a number, and returns the first index where that number occurs. If the number doesn't exist in the List, then return -1;

```javascript
  const listNode = [[4], [-5], [0], [0]]; // pretend this is a SLL

  indexOf(listNode, -5) === 1;
  indexOf(listNode, 0) === 2;
  indexOf(listNode, 100) === -1;
```

6. Create a function called "nodeBefore" that takes in a Singly Linked List (ListNode) and a number, and returns the listNode that occurs before the first instance of the number. Otherwise return null.

```javascript
  const listNode = [[4], [-5], [0], [0]]; // pretend this is a SLL

  nodeBefore(listNode, -5) === [4];
  nodeBefore(listNode, 0) === [-5];
  nodeBefore(listNode, 100) === null;
  nodeBefore(listNode, 4) === null;
```
