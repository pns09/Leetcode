/**
 * @param {string[]} arr
 * @return {number}
 */
 // longest subsequence in an array
var maxLength = function (arr) {
  let result = [''];
  let best = 0;

  for (let i = 0; i < arr.length; i++) {
    let resultsLen = result.length;
    for (let j = 0; j < resultsLen; j++) {
      let str = result[j] + arr[i];
      let newSet = new Set(str.split(''));
      if (str.length !== newSet.size) continue;

      result.push(str);
      best = Math.max(best, str.length);
    }
  }
  return best;
};

console.log(maxLength(['cha', 'r', 'act', 'ers']));

// Input: arr = ["un","iq","ue"]
// Output: 4
// Explanation: All the valid concatenations are:
// - ""
// - "un"
// - "iq"
// - "ue"
// - "uniq" ("un" + "iq")
// - "ique" ("iq" + "ue")
// Maximum length is 4
