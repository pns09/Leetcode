// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// 1
function removeKthNodeFromEnd(head, k) {
  // Do not return anything
  // O(N) | O(1)
  let first = head;
  let second = head;
  let counter = 1;

  while (counter <= k) {
    second = second.next;
    counter++;
  }

  if (second === null) {
    // when second is null and the first is pointing to head - update value and next values
    first.value = first.next.value;
    first.next = first.next.next;
    return;
  }

  while (second.next !== null) {
    // second.next is because we want our first pointer to be at one node before we want to remove
    second = second.next;
    first = first.next;
  }

  first.next = first.next.next;
}

// 2
function removeKthNodeFromEnd(head, k) {
  // Do not return anything
  // O(N) | O(1)
  let headCopy = head;
  let counter = 0;

  while (headCopy != null) {
    counter++;
    headCopy = headCopy.next;
  }

  let nodeToRemove = counter - k;
  if (nodeToRemove === 0) {
    head.value = head.next.value;
    head.next = head.next.next;
    return;
  }

  let listPointer = 0;
  while (head != null) {
    if (listPointer === nodeToRemove - 1) {
      head.next = head.next.next;
    }
    listPointer++;
    head = head.next;
  }
}
