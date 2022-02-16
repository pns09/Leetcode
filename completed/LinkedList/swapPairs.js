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
// Recursicce
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

// Iterative
var swapPairs = function(head) {
  //O(N) | O(N)
  let dummy = new ListNode(-1);
  dummy.next = head;
  
  let prevNode = dummy;
  
  while(head && head.next){
      let firstNode = head;
      let secondNode = head.next;

      //swapping
      prevNode.next = secondNode;
      firstNode.next = secondNode.next;
      secondNode.next = firstNode;

      prevNode = firstNode;
      head = firstNode.next;

      
  }
  
  return dummy.next;
};