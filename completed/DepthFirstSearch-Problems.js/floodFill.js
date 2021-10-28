// /**
//  * @param {number[][]} image
//  * @param {number} sr
//  * @param {number} sc
//  * @param {number} newColor
//  * @return {number[][]}
//  */
const dfs = (image, i, j, color, newColor) => {
  if (i < 0 || j < 0 || i >= image.length || j >= image[i].length) {
    return;
  }

  if (image[i][j] == color) {
    image[i][j] = newColor;
    dfs(image, i - 1, j, color, newColor);
    dfs(image, i + 1, j, color, newColor);
    dfs(image, i, j - 1, color, newColor);
    dfs(image, i, j + 1, color, newColor);
    return image;
  }
};

var floodFill = function (image, sr, sc, newColor) {
  let color = image[sr][sc];
  if (image.length == 0) {
    return 0;
  }

  if (color != newColor) dfs(image, sr, sc, color, newColor);

  return image;
};

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    (sr = 1),
    (sc = 1),
    (newColor = 2)
  )
);

// /**
//  * @param {number[][]} image
//  * @param {number} sr
//  * @param {number} sc
//  * @param {number} newColor
//  * @return {number[][]}
//  */
//  var floodFill = function(image, sr, sc, newColor) {
//   const queue = [], visited = Array.from(Array(image.length), () => new Array(image[0].length));;
//   queue.push([sr, sc]);
//   const oldColor = image[sr][sc];
//   while(queue.length > 0) {
//       const current = queue.pop();
//       if ( current[0] >= 0 && current[0] < image.length && current[1] >= 0 && current[1] < image[0].length ) {
//           //console.log(visited)
//       if (visited[current[0]][current[1]] || image[current[0]][current[1]] !== oldColor ) continue;

//       image[current[0]][current[1]] = newColor;

//       queue.push(...getAdjacentCells(sr, sc));
//       visited[current[0]][current[1]] = true
//       }

//   }

//   return image;
// };

// var getAdjacentCells =  function(r, c) {
//   return [
//        [r, c -1],
//        [r, c + 1],
//        [r - 1, c],
//        [r + 1, c]
//   ]
// }
