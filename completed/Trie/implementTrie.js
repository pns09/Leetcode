class Trie {
  constructor() {
    this.root = {};
    this.endSymbol = '*';
  }
  
  /**
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let node = this.root;

    for (let i = 0; i < word.length; i++) {
      if (!node[word[i]]) {
        node[word[i]] = {};
      }
      node = node[word[i]];
    }

    node[this.endSymbol] = true;
  }

  /**
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    let node = this.root;
    for (let i = 0; i < word.length; i++) {
      if (!node[word[i]]) return false;
      node = node[word[i]];
    }
    return node['*'] ? true : false;
  }
  
  /**
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    let node = this.root;
    for (let i = 0; i < prefix.length; i++) {
      if (!node[prefix[i]]) return false;
      node = node[prefix[i]];
    }
    return true;
  }
}
