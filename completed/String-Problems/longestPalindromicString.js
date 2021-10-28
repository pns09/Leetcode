// /**
//  * @param {string} s
//  * @return {string}
//  */
// var longestPalindrome = function (s) {
//   let subStrings = [];
//   let map = {};
//   let tempStr;

//   for (let i = 0; i < s.length; i++) {
//     tempStr = s.substring(i, s.lastIndexOf(s[i]) + 1);
//     if (tempStr.length > 1) {
//       if (tempStr == tempStr.split('').reverse().join('')) {
//         subStrings.push(tempStr);
//       }
//     }
//   }

//   if (subStrings.length > 1) {
//     for (let i = 0; i < subStrings.length; i++) {
//       map[subStrings[i].length] = i;
//     }
//     let index = Math.max(...Object.keys(map));
//     return subStrings[map[index]];
//   } else if (subStrings.length) {
//     return subStrings[0];
//   } else {
//     return tempStr;
//   }
// };

// console.log(longestPalindrome('aacabdkacaa'));
