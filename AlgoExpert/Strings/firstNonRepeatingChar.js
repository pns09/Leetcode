function firstNonRepeatingCharacter(string) {
  // Write your code here.
  let repeatingCount = 0;
  for (let i = 0; i < string.length; i++) {
    let j = 0;
    while (j < string.length) {
      if (i != j && string[i] === string[j]) repeatingCount++;
      j++;
    }
    if (repeatingCount === 0) {
      return i;
    } else repeatingCount = 0;
  }
  return -1;
}

console.log(firstNonRepeatingCharacter('faadabcbbebdf'));

// output : 6
