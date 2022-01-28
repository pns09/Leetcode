/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function (head) {
  // O(N) | O(N)
  if (head === null) return null;

   // Find the middle element for the list.
  let mid = getMidVal(head);

  // The mid becomes the root of the BST.
  let root = new TreeNode(mid.val);

  // Base case when there is just one element in the linked list
  if (head === mid) {
    return root;
  }

  root.left = sortedListToBST(head);
  root.right = sortedListToBST(mid.next);

  return root;
};

const getMidVal = (head) => {
  let fastPointer = head;
  let slowPointer = head;
  let prevPointer = null;

  while (fastPointer !== null && fastPointer.next != null) {
    prevPointer = slowPointer;
    fastPointer = fastPointer.next.next;
    slowPointer = slowPointer.next;
  }

  // Handling the case when slowPtr was equal to head.
  if (slowPointer.val !== head.val) {
    prevPointer.next = null;
  }

  return slowPointer;
};
