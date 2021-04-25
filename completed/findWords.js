// My approach - Brute force - O(n^3)
/**
 * @param {string[]} words
 * @return {string[]}
 */
 var findWords = function (words) {
    const keyboard = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
    let newLetter = '';
    const resultArr = [];
    const k = 0;
    for (let i = 0; i < words.length; i++) {
      for (let j = 0; j < words[i].length; j++) {
        while (k < keyboard.length) {
          if (keyboard[k].includes(words[i][j].toLowerCase())) {
            newLetter += words[i][j];
            if ([words[i]].includes(newLetter)) {
              resultArr.push(newLetter);
              newLetter = '';
              break;
            }
            j++;
          } else {
            if (newLetter.length > 0) {
              newLetter = '';
              break;
            }
            k++;
          }
        }
        k = 0;
        j = 0;
        break;
      }
    }
    return resultArr;
  };
  
  // Elegant solution - using Obj and filter.
  const LETTER_TO_ROW = {
    q: 0, w: 0, e: 0, r: 0, t: 0, y: 0, u: 0, i: 0, o: 0, p: 0,
    a: 1, s: 1, d: 1, f: 1, g: 1, h: 1, j: 1, k: 1, l: 1,
    z: 2, x: 2, c: 2, v: 2, b: 2, n: 2, m: 2
  };
  
  var findWords = function(words) {
    return words.filter(word => {
        let isSameRow = true;
        let row = LETTER_TO_ROW[word[0].toLowerCase()];
        for (let i = 1; i < word.length; i++) {
            if (LETTER_TO_ROW[word[i].toLowerCase()] !== row) {
                isSameRow = false;
                break;
            }
        }
        return isSameRow;
    });
  };
  
  
  // // Solving with Regex.
  //  const findWords = words =>
  //  words.filter(word => layouts.some(layout => layout.test(word)));
  
  // const top = /^[qwertyuiop]+$/i;
  // const mid = /^[asdfghjkl]+$/i;
  // const bottom = /^[zxcvbnm]+$/i;
  // const layouts = [top, mid, bottom];
  
  console.log(findWords((words = ['Hello', 'Alaska', 'Dad', 'Peace'])));
  