/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  //  O(N) | O(N)
  let p1 = 0;
  let p2 = 0;
  let mergedArr = [];

  while (p1 < nums1.length && p2 < nums2.length) {
    let n1 = nums1[p1] ? nums1[p1] : 0;
    let n2 = nums2[p2] ? nums2[p2] : 0;
    if (n1 < n2) {
      mergedArr.push(n1);
      p1++;
    } else {
      mergedArr.push(n2);
      p2++;
    }
  }

  if (p1 < nums1.length) {
    while (p1 < nums1.length) {
      mergedArr.push(nums1[p1]);
      p1++;
    }
  } else if (p2 < nums2.length) {
    while (p2 < nums2.length) {
      mergedArr.push(nums2[p2]);
      p2++;
    }
  }

  let median = -1;
  let idx = Math.floor(mergedArr.length / 2);
  if (mergedArr.length % 2 == 0) {
    median = (mergedArr[idx] + mergedArr[idx - 1]) / 2;
  } else {
    median = mergedArr[idx];
  }

  return median;
};

console.log(findMedianSortedArrays((nums1 = [1, 2]), (nums2 = [3, 4])));

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
