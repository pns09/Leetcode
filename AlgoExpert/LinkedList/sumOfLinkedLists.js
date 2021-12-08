// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
  // Write your code here.
  let carry = 0;
  let processLinkedList = new LinkedList(0);
  let finalLinkedList = processLinkedList;

  while (linkedListOne != null || linkedListTwo != null) {
    let sum = (linkedListOne ? linkedListOne.value : 0) + (linkedListTwo ? linkedListTwo.value : 0) + carry;

    processLinkedList.next = new LinkedList(sum % 10);
    if (sum > 9) {
      carry = 1;
    } else carry = 0;

    processLinkedList = processLinkedList.next;
    linkedListOne = linkedListOne ? linkedListOne.next : null;
    linkedListTwo = linkedListTwo ? linkedListTwo.next : null;
  }
  if (carry) processLinkedList.next = new LinkedList(carry);
  return finalLinkedList.next;
}
