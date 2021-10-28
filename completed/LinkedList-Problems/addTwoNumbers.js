/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
//  Input: l1 = [2,4,3], l2 = [5,6,4]
//  Output: [7,0,8]

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let newList = new ListNode();
  let copyNewList = newList;
  let carry = 0;

  while (l1 || l2) {
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    newList.next = new ListNode(sum % 10);
    newList = newList.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
    if (sum > 9) {
      carry = 1;
    } else {
      carry = 0;
    }
  }
  if (carry) {
    newList.next = new ListNode(1);
  }

  return copyNewList.next;
};
