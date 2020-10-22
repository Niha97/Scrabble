"use strict";

const Scrabble = require("../services/scrabble");
const express = require("express");
const words = express.Router();

//Middle ware that is specific to this router
words.get("/:word", async function (req, res) {
  const scrabble = new Scrabble();
  const words = await scrabble.getWords(req.params.word)
  res.send(words);
});

module.exports = words;
