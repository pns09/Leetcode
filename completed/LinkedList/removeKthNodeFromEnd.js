/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let headCopy = head;
  let counter = 0;

  while (headCopy) {
    counter++;
    headCopy = headCopy.next;
  }

  let nodeToRemove = counter - n; // 5-2 = 3 - remove node at 3

  if (nodeToRemove === 0) {
    head = head.next;
    return head;
  }

  let oneBeforeNode = 0;
  let listCopy = head;

  while (listCopy) {
    if (oneBeforeNode === nodeToRemove - 1) { // 2 == 2 -> next node is what we need to remove 
      listCopy.next = listCopy.next.next;
    }
    oneBeforeNode++;
    listCopy = listCopy.next;
  }
  return head;
};

console.log(removeNthFromEnd([1, 2, 3, 4, 5], (n = 2)));
// Input: head = [1,2,3,4,5], n = 2
// Output: [1,2,3,5]
