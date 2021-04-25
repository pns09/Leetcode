
// Try to solve it in less no. steps using while loop.
/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var validMountainArray = function (arr) {
    const maxNum = Math.max(...arr);
    const slope1 = arr.slice(0, arr.indexOf(maxNum));
    const slope2 = arr.slice(arr.indexOf(maxNum) + 1);
  
    if (slope1.length === 0 || slope2.length === 0) return false;
  
    for (let i = 0; i < slope1.length; i++) {
      if (slope1[i] < maxNum) {
        if (slope1[i + 1] >= 0) {
          if (slope1[i] >= slope1[i + 1]) {
            return false;
          }
        }
      } else {
        return false;
      }
    }
  
    for (let i = slope2.length - 1; i >= 0; i--) {
      if (slope2[i] < maxNum) {
        if (slope2[i - 1] >= 0) {
          if (slope2[i] >= slope2[i - 1]) {
            return false;
          }
        }
      } else {
        return false;
      }
    }
  
    return true;
  };
  
  console.log(validMountainArray([3,5,5]));
  