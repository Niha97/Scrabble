//Trie data structure
class TrieNode {
  constructor() {
    this.keys = new Map();
    this.end = false;
  }

  setEnd(value) {
    this.end = value;
  }

  isEnd() {
    return this.end;
  }
}

/**
 * Initialize trie here.
 */
class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * Inserts a word into the trie.
   * @param {string} word
   * @param {Node} node
   * @return {void}
   */
  insert = (word, node = this.root) => {
    if (word.length === 0) {
      node.setEnd(true);
      return;
    }
    if (node.keys.has(word[0])) {
      this.insert(word.substr(1), node.keys.get(word[0]));
    } else {
      node.keys.set(word[0], new TrieNode());
      return this.insert(word.substr(1), node.keys.get(word[0]));
    }
  };
}

module.exports = { Trie, TrieNode };
