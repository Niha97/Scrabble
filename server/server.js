'use strict'

const express = require('express');
const cors = require('cors')
const routes = require('./src/routes/routes');

const PORT = '8080';
const HOST = '0.0.0.0'

const app = express();

// to avoid CORS issue
app.use(cors());

//Routes
app.use("/", routes);  //http://0.0.0.0:8080/


app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`);