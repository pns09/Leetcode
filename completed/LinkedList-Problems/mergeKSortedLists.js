/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  let root = lists[0];
  for (let i = 1; i < lists.length; i++) {
    root = mergeLists(root, lists[i]);
  }
  return root || null;
};

const mergeLists = (l1, l2) => {
  let finalList = new ListNode(-1);
  let newNode = finalList;

  while (l1 && l2) {
    if (l1.val <= l2.val) {
      newNode.next = l1;
      l1 = l1.next;
    } else {
      newNode.next = l2;
      l2 = l2.next;
    }

    newNode = newNode.next;
  }

  newNode.next = l1 !== null ? l1 : l2;
  return finalList.next;
};

console.log(
  mergeKLists([
    [1, 4, 5],
    [1, 3, 4],
    [2, 6],
  ])
);

// output: [1,1,2,3,4,4,5,6]
