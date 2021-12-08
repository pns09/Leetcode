function isValidSubsequence(array, sequence) {
  // Write your code here.
  //   O(n) | O(1)
  let sequenceIndex = 0;

  for (let i = 0; i < array.length; i++) {
    if (sequenceIndex === sequence.length) break;
    if (array[i] === sequence[sequenceIndex]) {
      sequenceIndex++;
    }
  }

  return sequenceIndex === sequence.length;
}

console.log(isValidSubsequence([1, 1, 6, 1], [1, 1, 1, 6]));
