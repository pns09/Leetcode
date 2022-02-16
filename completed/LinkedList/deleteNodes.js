/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// Input: head = [1,2,3,4,5,6,7,8,9,10,11,12,13], m = 2, n = 3
// Output: [1,2,6,7,11,12]
// Explanation: Keep the first (m = 2) nodes starting from the head of the linked List  (1 ->2) show in black nodes.
// Delete the next (n = 3) nodes (3 -> 4 -> 5) show in read nodes.
// Continue with the same procedure until reaching the tail of the Linked List.
// Head of the linked list after removing nodes is returned.
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var deleteNodes = function (head, m, n) {
  let modifiedLinkedList = new ListNode();
  let result = modifiedLinkedList;
  let mCounter = 0;
  let nCounter = 0;

  while (head !== null) {
    if (mCounter == m) {
      nCounter++;
      if (nCounter == n) {
        mCounter = 0;
        nCounter = 0;
      }
    } else {
      mCounter++;
      modifiedLinkedList.next = new ListNode(head.val);
      modifiedLinkedList = modifiedLinkedList.next;
    }
    head = head.next;
  }
  return result.next;
};

console.log(deleteNodes((head = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]), (m = 2), (n = 3)));
