"use strict";

const express = require("express");
const User =  require('../models/User');
const use = express.Router();


use.post("/register", async function (req, res) {
  const ui = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });
  try {
    const savedUser = await ui.save();
    res.send(savedUser);
  } catch (err) {
    console.log(err);
    res.status(400).send(err)
  }
});

//Middle ware that is specific to this router
use.post("/login", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const DB = new db();

  const foundUser = await DB.findUserInDbByUsername(username);

  if (!foundUser) {
    res.status(400).send('user not found');
    return;
  }

  const isPasswordCorrect = DB.checkPassword(foundUser, password);
  if (!isPasswordCorrect) {
    res.status(400).send('incorrect password');
    return;
  }

  const accessToken = genAccessToken(foundUser);
  const refreshToken = genRefreshTokenToken(foundUser);
  res.status(200).json({ accessToken, refreshToken });
});

module.exports = use;
