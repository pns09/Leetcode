/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let stack1 = [];
  let stack2 = [];

  while (l1) {
    stack1.push(l1.val);
    l1 = l1.next;
  }

  while (l2) {
    stack2.push(l2.val);
    l2 = l2.next;
  }

  let carry = 0;
  let result = null;

  while (stack1.length || stack2.length) {
    let a = 0;
    let b = 0;

    if (stack1.length) a = stack1.pop();
    if (stack2.length) b = stack2.pop();

    let total = a + b + carry;

    let tempNode = new ListNode(total % 10);
    carry = Math.floor(total / 10);

    if (result === null) {
      result = tempNode;
    } else {
      tempNode.next = result;
      result = tempNode;
    }
  }

  if (carry !== 0) {
    let tempNode = new ListNode(carry);
    tempNode.next = result;
    result = tempNode;
  }

  return result;
};

console.log(addTwoNumbers([7, 2, 4, 3], [5, 6, 4]));
// Input: l1 = [7,2,4,3], l2 = [5,6,4]
// Output: [7,8,0,7]
