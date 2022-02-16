/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
// This problem is a combination of these three easy problems:
// Middle of the Linked List.
// Reverse Linked List.
// Merge Two Sorted Lists.
var reorderList = function (head) {
  // find middle node by using two pointers - fast and slow
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // reverse node from mid to end (slow -> null)
  let prev = null;
  while (slow) {
    const next = slow.next;
    slow.next = prev;
    prev = slow;
    slow = next;
  }

  // merge 2 nodes using the odd, even rule by maintaining a count pointer
  let count = 0;
  let newList = new ListNode(-1);
  let node = newList;
  while (head && prev) {
    if (count % 2 !== 0) {
      node.next = prev;
      prev = prev.next;
    } else {
      node.next = head;
      head = head.next;
    }
    count++;
    node = node.next;
  }

  return newList.next;
};

// Input: head = [1,2,3,4,5]
// Output: [1,5,2,4,3]
