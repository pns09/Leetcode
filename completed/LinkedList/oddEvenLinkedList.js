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
var oddEvenList = function (head) {
  let oddList = new ListNode(-Infinity);
  let oddNode = oddList;
  let evenList = new ListNode(-Infinity);
  let evenNode = evenList;

  let count = 1;

  while (head) {
    if (count % 2 === 0) {
      evenNode.next = head;
      evenNode = evenNode.next;
    } else {
      oddNode.next = head;
      oddNode = oddNode.next;
    }
    head = head.next;
    count++;
  }

  evenNode.next = null;
  oddNode.next = evenList.next;

  return oddList.next;
};

// Input: head = [1,2,3,4,5]
// Output: [1,3,5,2,4]
