const axios = require('axios');
const Trie = require('./trie');

const getDictionaryWords = (function() {
  axios.get('http://recruiting.bluenile.com/words.txt').then(res => {
    const dictionaryWords = res.data.toString().split('\n');
    const myTrie = new Trie();
    dictionaryWords.map((word) => {
      myTrie.add(word);
    });
    this.constructedTrie = myTrie;
  });
  return function getDictionaryWords() {
    return this.constructedTrie;
  }
})();

module.exports = getDictionaryWords

