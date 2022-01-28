// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// 1 - in-place modification
function removeDuplicatesFromLinkedList(linkedList) {
  // O(N) | O(1) - without extra space
  let currNode = linkedList;

  while (currNode !== null) {
    let nextNode = currNode.next;
    while (nextNode !== null && nextNode.value === currNode.value) {
      nextNode = nextNode.next;
    }

    currNode.next = nextNode;
    currNode = nextNode;
  }

  return linkedList;
}

// 2 - creating new linked list using extra space
function removeDuplicatesFromLinkedList(linkedList) {
  // O(N) | O(N)
  let uniqueList = new LinkedList(0);
  let finalList = uniqueList;

  while (linkedList != null) {
    if (uniqueList.value != linkedList.value) {
      uniqueList.next = new LinkedList(linkedList.value);
      uniqueList = uniqueList.next;
    }
    linkedList = linkedList.next;
  }
  return finalList.next;
}
