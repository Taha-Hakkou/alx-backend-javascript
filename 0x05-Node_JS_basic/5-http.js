#!/usr/bin/node
//
const { createServer } = require('http');
const countStudents = require('./3-read_file_async');

const hostname = '127.0.0.1';
const port = 1245;

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    console.log('This is the list of our students');
    const csvFile = process.argv[2];
    countStudents(csvFile)
      .then(() => {
        console.log('Done!');
      })
      .catch((error) => {
        console.log(error);
      });
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
