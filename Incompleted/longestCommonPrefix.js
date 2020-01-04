// My longest solution - 88/118 test cases passes
// var longestCommonPrefix = function(strs) {
//   if (strs.length === 0) return "";
//   if (strs.length === 1) return strs.toString();
//   if (strs.length === 2) {
//     var arr = strs.concat().sort(),
//       a1 = arr[0],
//       a2 = arr[arr.length - 1],
//       L = a1.length,
//       i = 0;
//     while (i < L && a1.charAt(i) === a2.charAt(i)) i++;
//     return a1.substring(0, i);
//   } else {
//     const arr2 = strs[strs.length - 1];

//     for (var i = 0; i < strs.length; i++) {
//       if (strs[i].charAt(i) !== arr2.charAt(i)) {
//         return "";
//       } else if (strs[i].charAt(i) === arr2.charAt(i)) {
//         var prefix = strs[i].substr(0, i);
//       }
//     }
//   }
//   return prefix;
// };

// longestCommonPrefix([["c", "acc", "ccc"]]);


// Google answer for the same, this works!
// var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return "";
  if (strs.length === 1) return strs.toString();
  if (strs.length >= 2) {
    var arr = strs.concat().sort(),
      a1 = arr[0],
      a2 = arr[arr.length - 1],
      L = a1.length,
      i = 0;
    while (i < L && a1.charAt(i) === a2.charAt(i)) i++;
    return a1.substring(0, i);
  }
// console.log(longestCommonPrefix(["flo", "flower", "flight"]));


// Optimized solution
// var longestCommonPrefix = function(strs) {
//     if (strs.length === 0) return '';
//     let r = '';
//     for (let i = 0; i < strs[0].length; i++) {
//       for (let j = 1; j < strs.length; j++) {
//         if (strs[0][i] !== strs[j][i]) return r;
//       }
//       r += strs[0][i];
//     }
//     return r;
//   };


