/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let triangle = [];

  if (numRows === 0) return triangle;

  // initial row in a pascals triangle starts with 1
  triangle.push([1]);

  for (let i = 1; i < numRows; i++) { 
    let prevRow = triangle[i - 1]; // get one row above the current row as we are already created 1st row.
    let newRow = []; // create curr row

    newRow.push(1);

    for (let j = 1; j < prevRow.length; j++) {
      newRow.push(prevRow[j - 1] + prevRow[j]);
    }

    newRow.push(1);
    triangle.push(newRow);
  }

  return triangle;
};
console.log(generate(5));
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
