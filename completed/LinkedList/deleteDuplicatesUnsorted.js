// 1
var deleteDuplicatesUnsorted = function (head) {
  let newList = new ListNode(-1);
  let node = newList;
  let map = {};
  let arr = [];

  while (head) {
    arr.push(head.val);
    map[head.val] = (map[head.val] || 0) + 1;
    head = head.next;
  }

  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] === 1) {
      node.next = new ListNode(arr[i]);
      node = node.next;
    }
  }

  return newList.next;
};

// 2
var deleteDuplicatesUnsorted = function (ll) {
  let map = {};
  let current = ll;

  //traverse and fill my map with node occurences
  while (current) {
    if (!map[current.val]) {
      map[current.val] = 1;
    } else {
      map[current.val]++;
    }
    current = current.next;
  }

  //traverse the list and delete where necessary
  let dummyHead = new ListNode(0, ll);
  current = dummyHead;
  while (current) {
    //check for duplicates
    while (current.next && map[current.next.val] > 1) {
      current.next = current.next.next;
    }

    current = current.next;
  }

  return dummyHead.next;
};

// Input: head = [3,2,2,1,3,2,4]
// Output: [1,4]
// Explanation: 3 appears twice and 2 appears three times. After deleting all 3's and 2's, we are left with [1,4].
