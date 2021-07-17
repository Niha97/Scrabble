"use strict";

const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

//connect to DB
mongoose.connect('mongodb+srv://dev:testblog@cluster0.lp4ev.mongodb.net/blog?retryWrites=true&w=majority',
{ useNewUrlParser: true  },
() => console.log("Connected to db"));


// import routes
const words = require("./words");
const use = require("./user");

router.get("/", function (req, res) {
  res.status(200).json({ message: "Connected!" });
});


//route middlewares
router.use(express.json());
router.use("/api/node/v1/words", words);
router.use("/api/node/v1/user", use);

module.exports = router;
