/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
// 1 - In-place array modification solution
var findMedianSortedArrays = function (nums1, nums2) {
  // similar to merge sorted arrays(medium problem)
  // O(N) | O(1) ~ O(N) because of array(I guess)
  let p1 = nums1.length;
  let m1 = p1 - 1;
  nums1 = nums1.concat(Array(nums2.length).fill(0));
  let m2 = nums2.length - 1;

  for (let i = p1 + m2; i >= 0; i--) {
    if (m2 < 0) break;

    if (nums1[m1] >= nums2[m2]) {
      nums1[i] = nums1[m1];
      m1--;
    } else {
      nums1[i] = nums2[m2];
      m2--;
    }
  }

  let mid = Math.floor(nums1.length / 2);
  if (nums1.length % 2 === 0) {
    return (nums1[mid] + nums1[mid - 1]) / 2;
  } else {
    return nums1[mid];
  }
};

console.log(findMedianSortedArrays((nums1 = [1, 2]), (nums2 = [3, 4])));

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

// 2 - Create new array and then merge both arrays in a linked list problem solving fashion.
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
