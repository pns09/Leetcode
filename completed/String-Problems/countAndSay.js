/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let finalStr = '1';
  if (n === 1) {
    return finalStr;
  }

  let counterPointer = 0;
  let characterPointer = 0;
  let currentSay = '';

  while (n > 1) {
    while (counterPointer < finalStr.length) {
      while (finalStr[characterPointer] === finalStr[counterPointer]) {
        counterPointer++;
      }
      currentSay += `${counterPointer - characterPointer}${finalStr.charAt(characterPointer)}`;
      characterPointer = counterPointer;
    }
    finalStr = currentSay;
    currentSay = '';
    counterPointer = 0;
    characterPointer = 0;
    n--;
  }

  return finalStr;
};

console.log(countAndSay(4)); // output: 1211
