// Do not edit the class below except for the
// populateSuffixTrieFrom and contains methods.
// Feel free to add new properties and methods
// to the class.
class SuffixTrie {
  constructor(string) {
    this.root = {};
    this.endSymbol = '*';
    this.populateSuffixTrieFromÎ(string);
  }

  populateSuffixTrieFromÎ(string) {
    for (let i = 0; i < string.length; i++) {
      this.insertSubstringInTrie(i, string);
    }
  }

  insertSubstringInTrie(i, string) {
    let node = this.root;

    for (let j = i; j < string.length; j++) {
      let char = string[j];
      if (!node[char]) node[char] = {};
      node = node[char];
    }
    node[this.endSymbol] = true;
  }

  contains(string) {
    let node = this.root;

    for (let i = 0; i < string.length; i++) {
      if (!node[string[i]]) return false;
      node = node[string[i]];
    }

    return node['*'] ? true : false;
  }
}

// Do not edit the line below.
exports.SuffixTrie = SuffixTrie;
