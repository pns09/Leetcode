// (string) return string - reverse string word

// 'This is an interview question ' - case sensitive and space b/w word in a str
// "question interview an is This"

const reverseWordsInaString = (string) => {
  // O(N) - time
  // O(N) - space
  if (!string) return '';

  string.trim();

  if (string.length === 0) return '';

  let word = '';
  let reversedWordsArr = [];

  for (let i = 0; i < string.length; i++) {
    if (string[i].trim() === '') {
      reversedWordsArr.push(word);
      word = '';
    } else {
      word += string[i];
    }
  }

  if (word.length > 0) reversedWordsArr.push(word);

  const reversedWords = reverseWordsHelper(reversedWordsArr);
  return reversedWords.join(' ');
};

const reverseWordsHelper = (arr) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
};

console.log(reverseWordsInaString());
