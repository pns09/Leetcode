/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  // O(n^3) | O(n)
  if (!digits) return [];
  let letters = {
    1: ['1'],
    0: ['0'],
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
  };
  let res = [''];

  for (let i = 0; i < digits.length; i++) {
    let digit = digits[i]; // 2
    let resLen = res.length; // 1

    for (let j = 0; j < resLen; j++) {
      let lookUp = letters[digit];
      let firstEleInRes = res.shift();

      for (let k = 0; k < lookUp.length; k++) {
        let combination = firstEleInRes + lookUp[k];
        res.push(combination);
      }
    }
  }
  return res;
};

console.log(letterCombinations('23'));

// Backtracking solution
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  let combinations = [];
  if (digits.length === 0) {
    return combinations;
  }

  let letters = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  };

  let queue = [];
  backtrack(0, digits, letters, queue, combinations);
  return combinations;
};

const backtrack = (index, digits, letters, queue, combi) => {
  if (queue.length === digits.length) {
    combi.push(queue.join(''));
    return;
  } else {
    for (let item of letters[digits[index]]) {
      queue.push(item);
      backtrack(index + 1, digits, letters, queue, combi);
      queue.pop();
    }
  }
};
