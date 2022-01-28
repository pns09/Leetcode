var WordDictionary = function () {
  this.root = {};
  this.end = '*';
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let node = this.root;

  for (let i = 0; i < word.length; i++) {
    if (!node[word[i]]) {
      node[word[i]] = {};
    }
    node = node[word[i]];
  }
  node[this.end] = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  // dfs function to call recursively
  const dfs = (root, i) => {
    let node = root;

    // if we reach the i that's the length of word and currentNode is a word ending, word exists.
    if (i === word.length) return node['*'] ? true : false;

    // if char is a dot, that means we can match it with any letter.
    // to do that programmatically, we go through all of the children of the current node. why?
    // we don't know which, if any, of the children can use the dot to make the given string.
    // so we go through all of them and check if any of them can return true.
    if (word[i] === '.') {
      let keys = Object.keys(node);
      for (let key of keys) {
        if (dfs(node[key], i + 1)) return true;
      }
      return false;
    } else {
      // if char isn't a dot, it's more straightforward...
      if (!node[word[i]]) return false;
      // go on to the next node in our dictionary and the next letter in the word
      return dfs(node[word[i]], i + 1);
    }
  };

  return dfs(this.root, 0);
};

// Input[('WordDictionary', 'addWord', 'addWord', 'addWord', 'search', 'search', 'search', 'search')][([], ['bad'], ['dad'], ['mad'], ['pad'], ['bad'], ['.ad'], ['b..'])];
// Output[(null, null, null, null, false, true, true, true)];
