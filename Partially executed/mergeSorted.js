// // Accomplish without return statement? How?
var merge = function(nums1, m, nums2, n) {
  nums1.splice(nums1.indexOf(nums1[m]), nums1.length);
  nums2.splice(nums2.indexOf(nums2[n]), nums2.length);
  return nums1.concat(nums2).sort();
};

console.log(merge([1, 2, 3, 0, 0, 0, 8], 3, [2, 5, 6, 7], 3));
