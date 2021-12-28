// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeKthNodeFromEnd(head, k) {
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
