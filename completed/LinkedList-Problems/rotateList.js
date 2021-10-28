/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

//  Input: head = [1,2,3,4,5], k = 2
//  Output: [4,5,1,2,3]

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const rotateRightAgain = (head, k) => {
  let lastVal, nodeToInsert;
  let newList = new ListNode();
  let copyNewList = newList;

  if (head && head.next) {
    while (head && head.next) {
      newList.next = new ListNode(head.val);
      newList = newList.next;
      head = head.next;
      lastVal = head.val;

      if (!head.next) {
        newList.next = null;
        nodeToInsert = new ListNode(lastVal);
        nodeToInsert.next = copyNewList.next;
      }
    }
  } else {
    return head;
  }
  k--;

  if (k >= 0) return rotateRightAgain(nodeToInsert, k);
  else return nodeToInsert;
};

var rotateRight = function (head, k) {
  if (k == 0 || !head) {
    return head;
  }
  let current = head;
  let count = 0;
  while (current) {
    current = current.next;
    count++;
  }
  k = k % count;
  k--;

  if (k >= 0) return rotateRightAgain(head, k);
  else return head;
};

console.log(rotateRight([1, 2, 3, 4, 5], (k = 2)));
