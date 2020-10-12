const getTrie = require("./dictionary");
const points = require("./points.js");

class Scrabble {
  constructor() {
    this.trie = getTrie();
    this.words = [];
    this.scoreBoard = [];
  }

  /**
   * Searches if a string formed by list of letters is a word or not
   *
   * @param node trie node
   * @param list array of letters [a,h,t]
   * @param string string
   * @param score score of string
   */
  search = (node, list, string, score) => {
    // if list = [a,h,t], to avoid strings like `that`
    // which contains duplicates
    list = list.filter((l) => string.indexOf(l) === -1);

    // search node keys for list of input letters
    if (node.keys.size != 0 && list.length > 0) {
      for (let letter of list) {
        if (node.isEnd()) {
          this.insert(string, score);
        }
        if (node.keys.has(letter)) {
          this.search(
            node.keys.get(letter),
            list,
            string.concat(letter),
            score + this.score(letter)
          );
        }
      }
    } else {
      if (node.isEnd()) {
        this.insert(string, score);
      }
      return;
    }
  };

  /**
   * Normalizes request input based on scrabble logic
   * @param {string} input - "HAT"
   * @returns {Array} - "[a,h,t]"
   */
  normalize = (input) => {
    return input.toLowerCase().split("").sort();
  };

  /**
   * Sorts strings scoreBoard based on strings score
   * @return {Object}
   */
  sort = () => {
    this.scoreBoard.sort((a, b) => {
      return a.score < b.score ? 1 : -1;
    });
  };

  /**
   * Gets sorted possible dictionary words of requested input letters
   * @param {string} input - "aht"
   * @returns {Array} - ["hat","th","ha","ah","at","a"]
   */
  getWords = (input) => {
    const list = this.normalize(input);
    this.search(this.trie.root, list, "", 0);
    this.sort();
    return this.scoreBoard.map((obj) => obj.string);
  };

  /**
   * Inserts strings into words array and scores of strings to scoreboard
   * @param {string} string
   * @param {number} score
   */
  insert = (string, score) => {
    if (string !== "" && this.words.indexOf(string) === -1) {
      this.scoreBoard.push({ string, score });
      this.words.push(string);
    }
  };

  /**
   * Gets scrabble points of letters
   */
  score = (letter) => {
    const score = new Proxy(points, {
      get: (keys, letter) => {
        for (let k in keys) if (new RegExp(k).test(letter)) return keys[k];
        return null;
      },
    });
    return score[letter];
  };
}

module.exports = Scrabble;
