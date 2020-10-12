const axios = require("axios");
const { Trie } = require("./trie");

const DICTIONARY_WORDS_URL = "http://recruiting.bluenile.com/words.txt";

/**
 * IIFE which gets constructed trie of dictionary words
 *
 * @returns {function} a getter function for trie
 * @description Immediately Invoked Function Expression (IIFE),
 * is used to serve cache purpose, it only constructs trie once
 * and all instances will share same trie
 */
const TrieDictionary = (function () {
  axios.get(DICTIONARY_WORDS_URL).then((res) => {
    const dictionaryWords = res.data.toString().split("\n");

    const trie = new Trie();
    dictionaryWords.map((word) => {
      trie.insert(word);
    });

    // trie initialiazation happens only once
    this.constructedTrie = trie;
  });

  return function getTrie() {
    return this.constructedTrie;
  };
})();

module.exports = TrieDictionary;
