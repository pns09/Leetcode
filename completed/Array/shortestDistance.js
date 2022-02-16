/**
 * @param {string[]} wordsDict
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var shortestDistance = function (wordsDict, word1, word2) {
  // O(N) | O(1)
  let min = Infinity;
  let indexX = null;
  let indexY = null;

  for (let i = 0; i < wordsDict.length; i++) {
    let currWord = wordsDict[i];
    if (word1 === currWord) {
      indexX = i;
    }
    if (word2 === currWord) {
      indexY = i;
    }
    if (indexX !== null && indexY !== null) {
      min = Math.min(min, Math.abs(indexY - indexX));
    }
  }
  return min;
};
console.log(shortestDistance(['practice', 'makes', 'perfect', 'coding', 'makes'], (word1 = 'coding'), (word2 = 'practice')));
// Input: wordsDict = ["practice", "makes", "perfect", "coding", "makes"], word1 = "coding", word2 = "practice"
// Output: 3

// 2
var shortestDistance = function (wordsDict, word1, word2) {
  // O(N^2) | O(1)

  let min = Infinity;

  for (let i = 0; i < wordsDict.length; i++) {
    if (wordsDict[i] == word1) {
      for (let j = 0; j < wordsDict.length; j++) {
        if (wordsDict[j] == word2) {
          min = Math.min(min, Math.abs(i - j));
        }
      }
    }
  }

  return min;
};
