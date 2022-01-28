/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = (products, searchWord) => {
  products.sort();

  let trie = new Trie(products);
  let node = trie.root;

  let result = [];
  // result array will be length of the searchwWord - return array[array]
  for (let i = 0; i < searchWord.length; i++) {
    result.push([]);
  }

  let i = 0;
  for (let char of searchWord) {
    if (node[char]) {
      result[i] = node[char].suggestions;
      node = { ...node[char] };
      i++;
    } else {
      break;
    }
  }

  return result;
};

class Trie {
  constructor(products) {
    this.root = {};
    this.insert(products);
  }

  insert(products) {
    for (let product of products) {
      let node = this.root;
      for (let char of product) {
        if (!node[char]) {
          node[char] = { suggestions: [product] };
        } else {
          if (node[char].suggestions.length < 3) {
            node[char].suggestions.push(product);
          }
        }
        node = node[char];
      }
    }
  }
}
console.log(suggestedProducts((products = ['mobile', 'mouse', 'moneypot', 'monitor', 'mousepad']), (searchWord = 'mouse')));

// Input: products = ["mobile","mouse","moneypot","monitor","mousepad"]
// searchWord = "mouse"
// Output: [
// ["mobile","moneypot","monitor"],
// ["mobile","moneypot","monitor"],
// ["mouse","mousepad"],
// ["mouse","mousepad"],
// ["mouse","mousepad"]
// ]
// Explanation: products sorted lexicographically = ["mobile","moneypot","monitor","mouse","mousepad"]
// After typing m and mo all products match and we show user ["mobile","moneypot","monitor"]
// After typing mou, mous and mouse the system suggests ["mouse","mousepad"]

// Input: ["mobile","mouse","moneypot","monitor","mousepad"]
// searcgWord : "monkey"
// Output:
// [['mobile', 'moneypot', 'monitor'], ['mobile', 'moneypot', 'monitor'], ['moneypot', 'monitor'], [], [], []];
