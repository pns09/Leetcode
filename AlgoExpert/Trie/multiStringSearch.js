function multiStringSearch(bigString, smallStrings) {
  // Write your code here.
  const suffixTrie = new SuffixTrie(bigString);
  return smallStrings.map((smallString) => suffixTrie.contains(smallString));
}

class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = '*';
    this.insertStringInTrie(string);
  }

  insertStringInTrie(string) {
    for (let j = 0; j < string.length; j++) {
      let node = this.root;
      for (let i = j; i < string.length; i++) {
        let char = string[i];
        if (!node[char]) node[char] = {};
        node = node[char];
      }
    }

    // node[this.endSymbol] = true;
  }

  contains(string) {
    let node = this.root;
    for (let i = 0; i < string.length; i++) {
      let char = string[i];
      if (!node[char]) return false;
      node = node[char];
    }
    return true;
  }
}

// Do not edit the line below.
exports.multiStringSearch = multiStringSearch;
