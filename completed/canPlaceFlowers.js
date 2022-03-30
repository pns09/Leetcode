/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let count = 0;

  for (let i = 0; i < flowerbed.length; i++) {
    if (flowerbed[i] === 0) {
      let isleftEmpty = i === 0 || flowerbed[i - 1] === 0;
      let isrightEmpty = i === flowerbed.length - 1 || flowerbed[i + 1] === 0;

      if (isleftEmpty && isrightEmpty) {
        flowerbed[i] = 1;
        count++;
        if (count >= n) {
          return true;
        }
      }
    }
  }
  return count >= n;
};

console.log(canPlaceFlowers([1, 0, 0, 0, 1], (n = 1)));
// Input: flowerbed = [1,0,0,0,1], n = 1
// Output: true
// flowerbed = [1,0,0,0,1], n = 2
// Output: false
