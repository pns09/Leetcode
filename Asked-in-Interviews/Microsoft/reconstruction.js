const recconstruction = (dictionary, string) => {
  // O(N) | O(N)
  let originalSentence = [];
  let possibleStr = '';
  let i = 0;

  while (i < string.length) {
    possibleStr += string[i];
    if (dictionary.indexOf(possibleStr) > -1) {
      originalSentence.push(possibleStr);
      possibleStr = '';
    }
    i++;
  }

  return originalSentence.length === 0 ? null : originalSentence;
};

const dictionary = ['bed', 'bath', 'and', 'beeyond']; //or ['bedbath', 'and', 'beeyond']
console.log(recconstruction(dictionary, 'bedbathandbeyond'));
