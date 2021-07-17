"use strict";

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
// const TrieDictionary = (function () {
//   let trie;
//   axios.get(DICTIONARY_WORDS_URL).then((res) => {
//     const dictionaryWords = res.data.toString().split("\n");

//     trie = new Trie();
//     dictionaryWords.map((word) => {
//       trie.insert(word);
//     });

//     console.log("trie initialization happened");
//   });

//   return async function () {
//     console.log("calling from cache");
//     return await trie;
//   };
// })();


/**
 * Function which returns cached constructed trie of dictionary words
 *
 * @returns {function} a closure function which returns trie of words
 * @description Memoized function to return constructed trie of words
 */
const TrieDictionary = function() {
  let trie;
  return async function() {
    if(trie===undefined) {
      let res = await axios.get(DICTIONARY_WORDS_URL);
      trie = new Trie();
      res.data.toString().split("\n").map(word => {
        trie.insert(word);
      });
      console.log("calling from server");
      return trie;
    } else {
      console.log("calling from cache");
      return trie
    }
  }
}

module.exports = TrieDictionary;
