// don, david -> addiv
// -> dvd - ddv

const getMatchingWords = (words, target) => {
  let res = [];

  for (let i = 0; i < words.length; i++) {
    let word = words[i];

    let p1 = 0;
    let p2 = 0;

    while (p1 < word.length) {
      if (p2 >= target.length) break;
      if (word[p1] === target[p2]) {
        p2++;
        p1++;
      } else p1++;
    }

    if (p2 === target.length) res.push(word);
  }

  return res;
};
console.log(getMatchingWords(['albert', 'catherine', 'david'], 'dvd'));
// output: ['david']

//initial approach
// const getMatchingWords = (words, target) => {
//   let res = [];

//   for (let i = 0; i < words.length; i++) {
//     let map = {};
//     let word = words[i];

//     for (let j = 0; j < word.length; j++) {
//       map[word[j]] = (map[word[j]] || 0) + 1;
//     }

//     let counter = 0;
//     for (let k = 0; k < target.length; k++) {
//       if (map[target[k]]) {
//         counter++; //3
//         let value = map[target[k]];
//         value--;
//         if (value === 0) delete map[target[k]];
//         map[target[k]] = value;
//       } else break;
//     }

//     if (counter === target.length) res.push(word);
//   }

//   let resWord = res.join('');
//   resWord = resWord[0].toUpperCase() + resWord.substring(1);
//   return resWord;
// };
