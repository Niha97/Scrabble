const Scrabble = require('../services/scrabble');
const express = require('express');
const words = express.Router();

//Middle ware that is specific to this router
words.get('/:word', function (req, res) {
  const listedWords = new Scrabble(req.params.word).getWords();
  res.send(listedWords);
});

module.exports = words;