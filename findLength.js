/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
 var findLength = function (A, B) {
    let res = 0;
    let same;
    let lastRow = Array(B.length);
  
    for (let c = 0; c < B.length; c++) {
      same = +(A[0] === B[c]);
      lastRow[c] = same;
      if (same && !res) res = 1;
    }
    // console.log(...lastRow);
  
    for (let r = 1; r < A.length; r++) {
      for (let c = B.length - 1; c > 0; c--) {
        same = +(A[r] === B[c]);
        if (same) {
          lastRow[c] = lastRow[c - 1] + 1;
          res = res > lastRow[c] ? res : lastRow[c];
        } else {
          lastRow[c] = 0;
        }
      }
  
      same = +(A[r] === B[0]);
      lastRow[0] = same;
      if (same && !res) res = 1;
      // console.log(...lastRow);
    }
  
    return res;
  };
  
  console.log(findLength([0, 1, 1, 1, 1], [1, 0, 1, 0, 1]));
  // [1, 0, 0, 0, 0], [0, 0, 0, 0, 1]
  