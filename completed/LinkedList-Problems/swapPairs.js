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
var swapPairs = function (head) {
  if (head === null || head.next === null) {
    return head;
  }

  let slow = head;
  let fast = head.next;

  slow.next = swapPairs(fast.next);
  fast.next = slow;

  return fast;
};

// Input: head = [1,2,3,4]
// Output: [2,1,4,3]
