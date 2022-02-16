/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    let currEle = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < currEle) {
        currEle = arr[j];
        sum += arr[j];
      } else sum += currEle;
    }
  }
  return sum % (Math.pow(10, 9) + 7);
};

console.log(sumSubarrayMins([3,1,2,4]))

// Input: arr = [3,1,2,4]
// Output: 17
// Explanation: 
// Subarrays are [3], [1], [2], [4], [3,1], [1,2], [2,4], [3,1,2], [1,2,4], [3,1,2,4]. 
// Minimums are 3, 1, 2, 4, 1, 1, 2, 1, 1, 1.
// Sum is 17.