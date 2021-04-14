// Storing the count value in Obj as key value pair and
// compaing with the vowels array to get the sum of vowels - O(n);
const vowelCount = (str) => {
  let vowelObj = {};
  for (let char of str) {
    if (vowelObj[char]) {
      vowelObj[char] += 1;
    } else {
      vowelObj[char] = 1;
    }
  }
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let sum = 0;
  for (let i in Object.keys(vowelObj)) {
    if (vowels.indexOf(Object.keys(vowelObj)[i]) > -1) {
      let value = vowelObj[Object.keys(vowelObj)[i]];
      sum += value;
    }
  }
  return sum;
};

// easy method. - O(n)
const vowelCount = (str) => {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let sum = 0;
  for (let char of str) {
    if (vowels.includes(char)) {
      sum++;
    }
  }
  return sum;
};

console.log(vowelCount('aeiouaeiouaeioubc'));
