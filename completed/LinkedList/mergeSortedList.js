//1 - without extra space 
function mergeLists(head1, head2) {
  // O(N + M) | O(1)
  let first = head1;
  let second = head2;
  let prev = null;

  while (first && second) {
    if (first.value < second.value) {
      prev = first;
      first = first.next;
    } else {
      if (prev !== null) prev.next = second;
      prev = second;
      second = second.next;
      prev.next = first;
    }
  }
  if (first === null) prev.next = second;
  return head1.value < head2.value ? head1 : head2;
}

//2 - creating new linked list 
function mergeLists(head1, head2) {
  // O(N + M) | O(M + N)
  console.log('im head1 : ' + JSON.stringify(head1));
  console.log('im head2 : ' + JSON.stringify(head2));

  if (!head1 || !head2) return head1 || head2;
  let finalList = new SinglyLinkedListNode(-1);
  let newNode = finalList;

  while (head1 && head2) {
    if (head1.data <= head2.data) {
      newNode.next = head1;
      head1 = head1.next;
    } else if (head1.data > head2.data) {
      newNode.next = head2;
      head2 = head2.next;
    }
    newNode = newNode.next;
  }
  newNode.next = head1 !== null ? head1 : head2;
  return finalList.next;
}

console.log(mergeLists([1, 2, 3, 2][(3, 4)]));
