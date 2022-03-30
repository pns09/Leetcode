// Idea is to use two heaps(max and min)
// Time -> constructor: O(1), addNum: O(logn), findMedian: O(1)
// Space -> O(n)

/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.minHeap = new Heap('min');
  this.maxHeap = new Heap('max');
};

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  this.maxHeap.push(num);
  this.minHeap.push(this.maxHeap.top());
  this.maxHeap.pop();

  if (this.minHeap.size > this.maxHeap.size) {
    this.maxHeap.push(this.minHeap.top());
    this.minHeap.pop();
  }
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  if (this.maxHeap.size === this.minHeap.size) return (this.maxHeap.top() + this.minHeap.top()) * 0.5;
  return this.maxHeap.top();
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */

class Heap {
  constructor(type) {
    this.storage = [];
    this.size = 0;
    this.type = type;
  }

  swap(index1, index2) {
    let temp = this.storage[index1];
    this.storage[index1] = this.storage[index2];
    this.storage[index2] = temp;
  }

  comparator(a, b) {
    if (this.type === 'min') return a - b;
    else return b - a;
  }

  push(data) {
    this.storage[this.size] = data;
    this.size++;
    this.heapifyUp();
  }

  heapifyUp() {
    let index = this.size - 1;
    let parentIndex = Math.trunc((index - 1) / 2);
    while (parentIndex >= 0 && this.comparator(this.storage[parentIndex], this.storage[index]) > 0) {
      this.swap(parentIndex, index);
      index = parentIndex;
      parentIndex = Math.trunc((index - 1) / 2);
    }
  }

  pop() {
    if (this.size == 0) throw new Error('Empty Heap');
    let data = this.storage[0];
    this.storage[0] = this.storage[this.size - 1];
    this.size--;
    this.heapifyDown();
  }

  heapifyDown() {
    let index = 0;
    while (2 * index + 1 < this.size) {
      let nextIndex = 2 * index + 1;
      if (2 * index + 2 < this.size && this.comparator(this.storage[nextIndex], this.storage[2 * index + 2]) > 0) nextIndex = 2 * index + 2;
      if (this.comparator(this.storage[index], this.storage[nextIndex]) <= 0) break;
      this.swap(index, nextIndex);
      index = nextIndex;
    }
  }

  top() {
    return this.storage[0];
  }
}

console.log(numberOfCleanRooms());


// -------------------------------------------------------------------------------------------------------------------

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let count = 0;
  let max = Math.pow(10, 9);
  for (let i = 0; i < A.length; i++) {
    if (A[i] == 0) {
      for (let j = i + 1; j < A.length; j++) {
        if (A[i] != A[j]) count++;
      }
    }
  }

  if (count >= max) return -1;
  else return count;
}
console.log(solution([1, 0, 1, 1, 1]));

/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function (s) {
  let dp = [];

  for (let row = 0; row <= s.length; row++) {
    let arr = [];

    for (let col = 0; col <= s.length; col++) arr.push(0);

    dp.push(arr);
  }

  let rev = s.split('');

  rev = rev.reverse();

  rev = rev.join('');

  for (let row = 1; row <= s.length; row++)
    for (let col = 1; col <= s.length; col++) {
      if (s[row - 1] === rev[col - 1]) dp[row][col] = 1 + dp[row - 1][col - 1];
      else dp[row][col] = Math.max(dp[row - 1][col], dp[row][col - 1]);
    }

  return s.length - dp[s.length][s.length];
};

console.log(minInsertions('mbadm'));

// const dfs = (arr, i, j) => {
//     let endTime = 0;
//     if (i < 0 || j < 0 || i >= arr.length || j >= arr[i].length || arr[i][j] == '#') {
//       return;
//     }

//     if (arr[i][j] == '.') {
//       arr[i][j] = '#';
//       dfs(arr, i + 1, j);
//       dfs(arr, i - 1, j);
//       dfs(arr, i, j - 1);
//       dfs(arr, i, j + 1);
//       endTime += new Date().getTime();
//       return endTime;
//     }
//   };

//   const reachTheEnd = (arr, maxTime) => {
//     let startTime = new Date().getTime();
//     let arrAfterSplit = [];

//     for (let i = 0; i < arr.length; i++) {
//       let tempArr = arr[i].split('');
//       arrAfterSplit.push(tempArr);
//     }

//     for (let i = 0; i < arrAfterSplit.length; i++) {
//       for (let j = 0; j < arrAfterSplit[i].length; j++) {
//         if (arrAfterSplit[i][j] == '.') return dfs(arrAfterSplit, i, j) - startTime;
//       }
//     }
//   };

//   console.log(reachTheEnd(['..##', '#.##', '#...']));

// function findMedian(arr) {
//   // Write your code here
//   arr = arr.sort();
//   let length = arr.length;

//   return arr[Math.floor(length / 2)];
// }

// console.log(findMedian([0, 1, 2, 3, 4, 5, 6, 7, 8]));

// function diagonalDifference(arr) {
//   // Write your code here
//   let leftToRightSum = 0;
//   let rightToLeftSum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     leftToRightSum += arr[i][i] ? arr[i][i] : 0;
//     rightToLeftSum += arr[arr.length - 1 - i][i] ? arr[arr.length - 1 - i][i] : 0;
//   }
// }

// console.log(diagonalDifference([[], [], []]));

// const blocked = '#';
// const unblocked = '.';
// let rows, columns, grid, dp, visited;

// function setCellAndPushToQueue(row, col, queue, nextValue) {
//   if (row < rows && col < columns && row >= 0 && col >= 0 && grid[row][col] == unblocked) {
//     const currentValue = dp[row][col] == undefined ? Infinity : dp[row][col];
//     if (currentValue <= nextValue) return;
//     if (currentValue != Infinity) {
//       visited[row][col] = false;
//     }
//     queue.push([row, col]);
//     dp[row][col] = nextValue;
//   }
// }

// function adjacentCells(row, col) {
//   return {
//     left: [row, col - 1],
//     right: [row, col + 1],
//     top: [row - 1, col],
//     bottom: [row + 1, col],
//   };
// }

// function reachTheEnd(input, maxTime) {
//   const queue = [];
//   grid = input.map((pattern) => pattern.split(''));
//   rows = grid.length;
//   columns = grid[0].length;
//   dp = Array.from(Array(rows), () => new Array(columns));
//   visited = Array.from(Array(rows), () => new Array(columns));
//   queue.push([0 /* row */, 0 /*col */]);
//   dp[0][0] = 0;

//   while (queue.length != 0) {
//     const [row, col] = queue.pop();
//     if (visited[row][col]) continue;
//     const adjacentCellsObject = adjacentCells(row, col);
//     const value = dp[row][col] + 1;
//     // check top
//     const [trow, tcol] = adjacentCellsObject.top;
//     setCellAndPushToQueue(trow, tcol, queue, value);

//     // check bottom
//     const [brow, bcol] = adjacentCellsObject.bottom;
//     setCellAndPushToQueue(brow, bcol, queue, value);

//     // check left
//     const [lrow, lcol] = adjacentCellsObject.left;
//     setCellAndPushToQueue(lrow, lcol, queue, value);

//     // check right
//     const [rrow, rcol] = adjacentCellsObject.right;
//     setCellAndPushToQueue(rrow, rcol, queue, value);
//     visited[row][col] = true;
//   }

//   return dp[rows - 1][columns - 1] <= maxTime;
// }

// // console.log(reachTheEnd(['..##', '#.##', '#...'], 5));
// // console.log(reachTheEnd(['..', '..'], 3));
// // console.log(dp);

// const binarySearch = (arr, target) => {
//   let startIndex = 0;
//   let endIndex = arr.length - 1;

//   while (startIndex <= endIndex) {
//     let middle = startIndex + Math.floor((endIndex - startIndex) / 2);
//     console.log('mid ' + arr[middle]);
//     if (target == arr[middle]) {
//       return middle;
//     }
//     if (target < arr[middle]) {
//       endIndex = middle - 1;
//     } else {
//       startIndex = middle + 1;
//     }
//     console.log('start ' + arr[startIndex]);
//     console.log('last ' + arr[endIndex]);
//   }
//   return -1;
// };

// console.log(binarySearch([1, 3, 5, 6], 2));

// const maxValues = (arr, k) => {
//   let maxValuesArr = [];
//   if (arr.length == k) {
//     maxValuesArr.push(Math.max(...arr));
//     return maxValuesArr;
//   }

//   let i = 0;
//   let tempSubArrEle = [];
//   while (i < arr.length) {
//     tempSubArrEle.push(arr[i]);
//     i++;
//     if (tempSubArrEle.length == k) {
//       maxValuesArr.push(Math.max(...tempSubArrEle));
//       tempSubArrEle.shift();
//     }
//   }
//   return maxValuesArr;
// };
// console.log(maxValues([1, 3, -1, -3, 5, 3, 6, 7], (k = 3)));

// const autoComplete = (arr, str) => {
//   let hasPrefixes = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].indexOf(str) === 0) {
//       hasPrefixes.push(arr[i]);
//     }
//   }
//   return hasPrefixes;
// };

// console.log(autoComplete(['dog', 'deer', 'deal'], 'de'));

// const scheduler = (fun, n) => {
//   setInterval(() => {
//     fun();
//   }, n);
// };

// const largestSum = (arr) => {
//   let oddEleSum = 0;
//   let evenEleSum = 0;

//   for (let i = 0; i < arr.length; i++) {
//     if (i % 2 == 0) {
//       evenEleSum += arr[i];
//     } else {
//       oddEleSum += arr[i];
//     }
//   }
//   return Math.max(evenEleSum, oddEleSum);
// };

// console.log(largestSum([2, 4, 6, 2, 5]))

// function findMaximumNonAdjacentSum(arr) {
//   let len = arr.length;
//   if (len == 0) {
//     return 0;
//   }

//   if (len == 1) {
//     return arr[0];
//   }

//   let sum = Array(len).fill(0);
//   sum[len - 1] = arr[len - 1];
//   sum[len - 2] = Math.max(arr[len - 1], arr[len - 2]);

//   for (let i = len - 3; i >= 0; i--) {
//     sum[i] = Math.max(arr[i] + sum[i + 2], sum[i + 1]);
//   }

//   return sum[0];
// }

// console.log(findMaximumNonAdjacentSum([5, 1, 1, 5]));

// /**
//  * @param {string[]} sentence
//  * @param {number} rows
//  * @param {number} cols
//  * @return {number}
//  */
// var wordsTyping = function (sentence, rows, cols) {
//   const screenlength = rows * cols;
//   const sentenceStr = sentence.join('-');
//   let fitSentenceStr = '';
//   let count = 0;
//   while (fitSentenceStr.length <= screenlength) {
//     fitSentenceStr += sentenceStr + '-';
//     if (fitSentenceStr.length <= screenlength) count++;
//   }
//   return count;
// };
// console.log(wordsTyping(['f', 'p', 'a'], 8, 7));

// function matrix(n) {
//   let totalElems = n * n;
//   let matrix = [];
//   let tempArr = [];

//   for (let i = 1; i <= totalElems; i++) {
//     tempArr.push(i);
//     if (tempArr.length === n) {
//       matrix.push(tempArr);
//       tempArr = [];
//     }
//   }
//   return matrix;
// }
// console.log(matrix(4));
// -------------------------------------------------------------------------------------------------------------
