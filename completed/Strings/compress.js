/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  //O(N) | O(1)
  if (!chars.length) return 0;
  let j = 0;
  let curr = chars[0];
  let counter = 0;

  for (let i = 0; i <= chars.length; i++) {
    if (chars[i] === curr) {
      counter++;
    } else {
      chars[j] = curr;
      if (counter > 1) {
        let s = counter.toString();
        for (let k = 0; k < s.length; k++) {
          chars[++j] = s[k]; // pre increment j : decoded as  j = 1 + j;
        }
      }
      j++;
      curr = chars[i];
      counter = 1;
    }
  }
  // return left; // 
  return chars;
};

console.log(compress(['a', 'a', 'b', 'b', 'c', 'c', 'c']));
// output: 6
// ["a","2","b","2","c","3"]

// 2
// Input: chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
// Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
// Explanation: The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".
