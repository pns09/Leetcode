/**
 * @param {string} word
 * @param {string} abbr
 * @return {boolean}
 */
 var validWordAbbreviation = function (word, abbr) {
    if (word.length < abbr.length) return false;
    let sub = 0;
    if (abbr[0] == 0) sub = 1;
    let num = abbr.match(/\d+/g);
    if (num && num[0][0] == 0) sub = 1;
    let numTotal = num ? num.reduce((a, b) => parseInt(a) + parseInt(b), 0) : 0;
    let formedLetters = '';
    let formedNumDashes = '';
  
    for (let i = 0; i < abbr.length; i++) {
      if (abbr.charCodeAt(i) >= 97) {
        formedLetters += abbr[i];
      }
    }
  
    for (let i = 0; i < numTotal; i++) {
      formedNumDashes += '-';
    }
  
    totalLen = (formedLetters + formedNumDashes).length;
    console.log(formedLetters + formedNumDashes);
    return totalLen - sub === word.length;
  };
  
  console.log(validWordAbbreviation('word', '3d'));
  
  // var validWordAbbreviation = function (word, abbr) {
  //   let skipCount = 0,
  //     j = 0;
  //   for (const a of abbr.split('')) {
  //     if (!isNaN(a)) {
  //       const num = Number(a);
  //       if (!skipCount && !num) return false;
  //       skipCount = skipCount * 10 + num;
  //     } else {
  //       j += skipCount;
  //       if (a !== word[j]) return false;
  //       j++;
  //       skipCount = 0;
  //     }
  //   }
  //   // the tailing could be digit
  //   return skipCount + j === word.length;
  // };
  
  // console.log(validWordAbbreviation((word = 'international'), (abbr = 'i12')));
  