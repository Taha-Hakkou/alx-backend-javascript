#!/usr/bin/node
// Creates basic express server
const express = require('express');

const app = express();
const PORT = 7865;

app.get('/', (_, res) => {
  res.send('Welcome to the payment system');
});

app.listen(PORT, () => {
  console.log('API available on localhost port 7865');
});

module.exports = app;
