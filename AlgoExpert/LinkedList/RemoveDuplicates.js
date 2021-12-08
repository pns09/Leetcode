// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function removeDuplicatesFromLinkedList(linkedList) {
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