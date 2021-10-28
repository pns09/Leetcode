/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
//  Input: list1 = [0,1,2,3,4,5], a = 3, b = 4, list2 = [1000000,1000001,1000002]
//  Output: [0,1,2,1000000,1000001,1000002,5]
//  Explanation: We remove the nodes 3 and 4 and put the entire list2 in their place.
//  The blue edges and nodes in the above figure indicate the result.

/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
  let newL1Nodes = new ListNode();
  let copyL1 = newL1Nodes;

  let lastNodes = new ListNode();
  let copyLastNodes = lastNodes;
  let nodesToSkip = b - a;

  while (a > 0) {
    a--;
    newL1Nodes.next = new ListNode(list1.val);
    newL1Nodes = newL1Nodes.next;
    list1 = list1.next;
  }

  newL1Nodes.next = list2;

  while (nodesToSkip >= 0) {
    nodesToSkip--;
    list1 = list1.next;
  }

  while (list1 !== null) {
    lastNodes.next = new ListNode(list1.val);
    lastNodes = lastNodes.next;
    list1 = list1.next;
  }

  while (newL1Nodes.next) {
    newL1Nodes = newL1Nodes.next;
  }

  newL1Nodes.next = copyLastNodes.next;

  return copyL1.next;
};

console.log(mergeInBetween([0, 1, 2, 3, 4, 5], 3, 4, [1000000, 1000001, 1000002]));
