"use strict";

const express = require("express");
const words = require("./words");
const router = express.Router();

router.get("/", function (req, res) {
  res.status(200).json({ message: "Connected!" });
});

router.use("/words", words);

module.exports = router;
