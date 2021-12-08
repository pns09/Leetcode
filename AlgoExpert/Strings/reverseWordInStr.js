function reverseWordsInString(string) {
  // Write your code here.
  //  O(n^2) time | O(n) space
  let reverseStr = '';
  let finalStr = '';
  for (let i = string.length - 1; i >= 0; i--) {
    if (string[i] === ' ') {
      finalStr += wordReverseHelper(reverseStr);
      finalStr += ' ';
      reverseStr = '';
    } else reverseStr += string[i];
  }
  return (finalStr += wordReverseHelper(reverseStr));
}

const wordReverseHelper = (reverseStr) => {
  let tempWord = '';
  for (let j = reverseStr.length - 1; j >= 0; j--) {
    tempWord += reverseStr[j];
  }
  return tempWord;
};

console.log(reverseWordsInString('I am going to work at Tesla!'));

// output : Tesla! at work to going am I
