/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n, map = {}) {
  n = n.toString().split(''); // split the digit 

  let sum = 0;
  for (let i = 0; i < n.length; i++) {
    sum += Math.pow(n[i], 2); // calculate the sum which is sum of square of digits(n)
    // check if the sum is already stored in hashmap. if the sum is already present we found a cycle and so it cannot be a happy number 
    if (map[sum]) { 
      return false;
    }
  }
  // store the sum in hashmap
  map[sum] = true;
  if (sum === 1) return true; // if sum is 1 return true;
  return isHappy(sum, map);
};

console.log(isHappy(19));

// output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
