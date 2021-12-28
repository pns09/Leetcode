function mergeLists(head1, head2) {
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
