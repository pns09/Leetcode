/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
 var removeKdigits = function (num, k) {
  
  let resultArray = [];
  for (let i = 0; i < num.length; i++) {
    let currentChar = num.charAt(i);
    while (resultArray.length && k > 0 && resultArray[resultArray.length - 1] > currentChar) {
      resultArray.pop();
      k--;
    }
    resultArray.push(currentChar);
  }

  // If the k value is still not empty then the string doesn't have larger value inbetween. 
  // All the bigger numbers are at the end so pop it.
  for (let i = 0; i < k; i++) {
    resultArray.pop();
  }

  // If leading zeros are present and if resultArray is not empty
  if (resultArray.length) {
    while (resultArray[0] === '0') {
      resultArray.shift();
    }
  }

  return resultArray.length ? resultArray.join('') : '0';
};