function solution(A, B) {
  let count = 0;
  let isLargerFish = [];

  for (let p = 0; p < A.length; p++) {
    if (B[p] == 1) {
      isLargerFish.push(A[p]);
    } else {
      while (isLargerFish.length != 0) {
        if (isLargerFish[isLargerFish.length - 1] > A[p]) {
          count++;
          break;
        } else if (isLargerFish[isLargerFish.length - 1] < A[p]) {
          isLargerFish.pop();
          count++;
        }
      }
    }
  }
  return A.length - count;
}

console.log(solution((A = [4, 3, 2, 1, 5]), (B = [0, 1, 0, 0, 0])));
//   output: 2

// My approach
// function solution(A, B) {
//     let count = 0;
//     let isLargerFish = 0;

//     for (let p = 0; p < A.length; p++) {
//       if (B[p] == 1) {
//         isLargerFish = A[p];
//       } else if (isLargerFish != 0) {
//         if (isLargerFish > A[p]) {
//           count++;
//         } else if (isLargerFish < A[p]) {
//           count++;
//           isLargerFish = A[p];
//         }
//       }
//     }
//     return A.length - count;
//   }
