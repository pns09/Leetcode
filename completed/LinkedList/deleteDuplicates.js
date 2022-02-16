/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var deleteDuplicates = function (head) {
  // O(N) | O(1)
  let curr = head;
  while (curr && curr.next) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next;
    } else {
      curr = curr.next;
    }
  }
  return head;
};
// Input: head = [1,1,2,3,3]
// Output: [1,2,3]

//2
var deleteDuplicates = function (head) {
  // O(N) | O(N)
  let newList = new ListNode(-101);
  let newNode = newList;
  let prev = newNode.val;

  while (head !== null) {
    if (prev !== head.val) {
      newNode.next = new ListNode(head.val);
      newNode = newNode.next;
      prev = head.val;
    }
    head = head.next;
  }
  return newList.next;
};
