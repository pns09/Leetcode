// Incomplete solution - partially executed - 38 pass/91
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
  let leftPointer = 0;
  let rightPointer = 0;

  let zeroCount = 0;
  let oneCount = 0;

  let finalCount = 0;

  while (leftPointer <= s.length - 1) {
    if (s[rightPointer] === '0') {
      zeroCount++;
    }

    if (s[rightPointer] === '1') {
      oneCount++;
    }

    if (oneCount === zeroCount) {
      finalCount++;
      leftPointer++;
      zeroCount = 0;
      oneCount = 0;
      rightPointer = leftPointer;
    } else {
      rightPointer++;
      if (!s[rightPointer]) {
        leftPointer++;
        zeroCount = 0;
        oneCount = 0;
        rightPointer = leftPointer;
      }
    }
  }
  return finalCount;
};

console.log(countBinarySubstrings('00100'));
