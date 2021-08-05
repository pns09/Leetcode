// /** My not working solution 15/21 only passed
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number[]}
//  */
var topKFrequent = function (nums, k) {
  let freqObj = {};
  let freqElem = [];
  let otherElem = [];
  if (nums.length < 2) return nums;

  for (let i = 0; i < nums.length; i++) {
    freqObj[nums[i]] = (freqObj[nums[i]] || 0) + 1;
  }

  let freqObjArr = Object.keys(freqObj);
  for (let i = 0; i < freqObjArr.length; i++) {
    if (freqObj[freqObjArr[i]] >= 2) {
      freqElem.push(freqObjArr[i]);
      if (freqElem.length === k) {
        return freqElem;
      }
    } else {
      otherElem.push(freqObjArr[i]);
    }
  }
  if (freqElem.length < k) {
    return freqElem.concat(otherElem);
  }
};

/** Solution
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
  // with Objects approach.
  // const map = {}
  // nums.forEach(num => map[num] = map[num] ? map[num]+1 : 1)
  // return Object.entries(map).sort((a,b) => b[1] - a[1]).map(num => num[0]).slice(0,k)

  // With hashmap approach
  const hashMap = new Map();

  nums.forEach((num) => {
    hashMap.set(num, (hashMap.get(num) || 0) + 1);
  });

  return [...hashMap.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map((num) => num[0]);
};

console.log(topKFrequent([3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 10, 11, 5, 6, 2, 4, 7, 8, 5, 6], 10));
