var plusOne = function (digits) {
  // O(N) | O(1)
  for (let i = digits.length - 1; i > -1; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i] = digits[i] + 1;
      return digits;
    }
  }

  digits.unshift(1);

  return digits;
};

console.log(plusOne([9, 9, 9]));

console.log(plusOne([6, 1, 4, 5, 3, 9, 0, 1, 9, 5, 1, 8, 6, 7, 0, 5, 5, 4, 3]));
