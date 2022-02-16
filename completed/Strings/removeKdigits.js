/**
 * @param {string} num
 * @param {string} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
  let min = [];
  for (let i = 0; i < num.length; i++) {
    let currentChar = num.charAt(i);
    while (min.length && k > 0 && min[min.length - 1] > currentChar) {
      min.pop();
      k--;
    }
    min.push(currentChar);
  }

  // If the k value is still not empty then the string doesn't have larger value inbetween.
  // All the bigger numbers are at the end so pop it.
  for (let i = 0; i < k; i++) {
    min.pop();
  }

  // If leading zeros are present and if min is not empty
  if (min.length) {
    while (min[0] === '0') {
      min.shift();
    }
  }

  return min.length ? min.join('') : '0';
};

console.log(removeKdigits((num = '100001'), (k = 4)));

//1
// Input : (num = '1432219'), (k = 3)
// Output : "1219"

//2
// Input : (num = '100001'), (k = 4)
// Output : "0"
