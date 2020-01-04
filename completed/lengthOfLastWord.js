// My solution - 59/59 test cases passed! Accepted!
var lengthOfLastWord = function(s) {
  var arr = s.trim().split(" ");
  if (arr.length === 0) return 0;
  if (arr.length === 1) {
    return arr[0].length;
  }

  if (arr.length >= 1) {
    return arr[arr.length - 1].length;
  }
};
console.log(lengthOfLastWord("hello paka"));
