
/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
 var countCharacters = function (words, chars) {
    let charObj = {};
    let totalSum = 0;
  
    for (let i = 0; i < chars.length; i++) {
      charObj[chars[i]] = (charObj[chars[i]] || 0) + 1;
    }
  
    for (let i = 0; i < words.length; i++) {
      let charObjCopy = { ...charObj };
      for (let j = 0; j < words[i].length; j++) {
        if (charObjCopy[words[i][j]]) {
          charObjCopy[words[i][j]]--;
          if (words[i].length === j + 1) {
            totalSum += words[i].length;
          }
        } else break;
      }
    }
    return totalSum;
  };
  
  console.log(
    countCharacters(
      [
        'dyiclysmffuhibgfvapygkorkqllqlvokosagyelotobicwcmebnpznjbirzrzsrtzjxhsfpiwyfhzyonmuabtlwin',
        'ndqeyhhcquplmznwslewjzuyfgklssvkqxmqjpwhrshycmvrb',
        'ulrrbpspyudncdlbkxkrqpivfftrggemkpyjl',
        'boygirdlggnh',
        'xmqohbyqwagkjzpyawsydmdaattthmuvjbzwpyopyafphx',
        'nulvimegcsiwvhwuiyednoxpugfeimnnyeoczuzxgxbqjvegcxeqnjbwnbvowastqhojepisusvsidhqmszbrnynkyop',
        'hiefuovybkpgzygprmndrkyspoiyapdwkxebgsmodhzpx',
        'juldqdzeskpffaoqcyyxiqqowsalqumddcufhouhrskozhlmobiwzxnhdkidr',
        'lnnvsdcrvzfmrvurucrzlfyigcycffpiuoo',
        'oxgaskztzroxuntiwlfyufddl',
        'tfspedteabxatkaypitjfkhkkigdwdkctqbczcugripkgcyfezpuklfqfcsccboarbfbjfrkxp',
        'qnagrpfzlyrouolqquytwnwnsqnmuzphne',
        'eeilfdaookieawrrbvtnqfzcricvhpiv',
        'sisvsjzyrbdsjcwwygdnxcjhzhsxhpceqz',
        'yhouqhjevqxtecomahbwoptzlkyvjexhzcbccusbjjdgcfzlkoqwiwue',
        'hwxxighzvceaplsycajkhynkhzkwkouszwaiuzqcleyflqrxgjsvlegvupzqijbornbfwpefhxekgpuvgiyeudhncv',
        'cpwcjwgbcquirnsazumgjjcltitmeyfaudbnbqhflvecjsupjmgwfbjo',
        'teyygdmmyadppuopvqdodaczob',
        'qaeowuwqsqffvibrtxnjnzvzuuonrkwpysyxvkijemmpdmtnqxwekbpfzs',
        'qqxpxpmemkldghbmbyxpkwgkaykaerhmwwjonrhcsubchs',
      ],
      'usdruypficfbpfbivlrhutcgvyjenlxzeovdyjtgvvfdjzcmikjraspdfp'
    )
  );
  