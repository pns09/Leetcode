/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// Similar to two Pointer approach.
var isPalindrome = function (head) {
  let fastPointer = head;
  let slowPointer = head;
  let prev = null;

  while (fastPointer.next !== null && fastPointer.next.next != null) {
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;
  }

  while (slowPointer != null) {
    const node = slowPointer.next;
    slowPointer.next = prev;
    prev = slowPointer;
    slowPointer = node;
  }

  while (prev != null && head != null) {
    if (prev.val !== head.val) return false;
    prev = prev.next;
    head = head.next;
  }
  return true;
};

console.log(isPalindrome([1, 2, 2, 1]));
