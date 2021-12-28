// My implementation
function classPhotos(redShirtHeights, blueShirtHeights) {
  // Write your code here.
  redShirtHeights.sort();
  blueShirtHeights.sort();

  let isRedFollowed = false;
  let isBlueFollowed = false;

  for (let i = 0; i < redShirtHeights.length; i++) {
    if (redShirtHeights[i] < blueShirtHeights[i]) {
      if (!isRedFollowed) isBlueFollowed = true;
      else return false;
    } else if (redShirtHeights[i] > blueShirtHeights[i]) {
      if (!isBlueFollowed) isRedFollowed = true;
      else return false;
    } else {
      return false;
    }
  }
  return isBlueFollowed || isRedFollowed;
}

console.log([5, 8, 1, 3, 4], [6, 9, 2, 4, 5]);

// // Solution
// function classPhotos(redShirtHeights, blueShirtHeights) {
//   //o(nlogn) | o(1)
//   redShirtHeights.sort((a, b) => b - a);
//   blueShirtHeights.sort((a, b) => b - a);

//   let shirtColorInFirstRow = redShirtHeights[0] < blueShirtHeights[0] ? 'RED' : 'BLUE';

//   for (let i = 0; i < redShirtHeights.length; i++) {
//     let redtShirtHeight = redShirtHeights[i];
//     let blueShirtHeight = blueShirtHeights[i];
//     if (shirtColorInFirstRow === 'RED') {
//       if (redtShirtHeight >= blueShirtHeight) return false;
//     } else if (blueShirtHeight >= redtShirtHeight) return false;
//   }
//   return true;
// }
