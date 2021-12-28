// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function linkedListPalindrome(head) {
  // Write your code here.
  let slowPointer = head;
  let fastPointer = head;
  let previousNode = null;

  // Move fastPointer by 2; move slowPointer by only 1 to reach the mid-point of a linkedList
  while (fastPointer !== null) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  // Now, the slowPointer end location from above is the starting point to rotate the linked list to comapre
  while (slowPointer != null) {
    let currentNode = slowPointer.next;
    slowPointer.next = previousNode;
    previousNode = slowPointer;
    slowPointer = currentNode;
  }

  // Finally, compare the given linked list with that of reversed linked list from above.
  let listFromStart = head;
  while (previousNode != null) {
    if (listFromStart.value != previousNode.value) return false;
    previousNode = previousNode.next;
    listFromStart = listFromStart.next;
  }

  return true;
}
