/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  let freqObj = {};
  let isHighestArr = [];
  for (let i = 0; i < arr.length; i++) {
    freqObj[arr[i]] = (freqObj[arr[i]] || 0) + 1;
  }
  const frequentArr = Object.keys(freqObj);
  for (let i = 0; i < frequentArr.length; i++) {
    if (freqObj[frequentArr[i]] === parseInt(frequentArr[i])) {
      isHighestArr.push(frequentArr[i]);
    }
  }

  return isHighestArr.length > 0 ? Math.max(...isHighestArr) : -1;
};

console.log(findLucky([2, 2, 3, 4]));
