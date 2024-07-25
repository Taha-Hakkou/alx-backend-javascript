#!/usr/bin/node
//
const { createServer } = require('http');
const fs = require('fs');

const countStudents = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    if (data) {
      const students = data.toString('utf-8').trim().split('\n');
      const studentGroups = {};
      for (const student of students.slice(1)) {
        const studentRecord = student.split(',');
        const field = studentRecord[studentRecord.length - 1];
        if (!Object.keys(studentGroups).includes(field)) {
          studentGroups[field] = [];
        }
        studentGroups[field].push(studentRecord[0]);
      }
      const numberOfStudents = students.slice(1).length;
      resolve([numberOfStudents, studentGroups]);
    }
    resolve(true);
  });
});

const hostname = '127.0.0.1';
const port = 1245;

const app = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    const csvFile = process.argv[2];
    countStudents(csvFile)
      .then((data) => {
        res.write('This is the list of our students\n');
        const [numberOfStudents, studentGroups] = data;
        res.write(`Number of students: ${numberOfStudents}`);
        for (const [field, group] of Object.entries(studentGroups)) {
          const studentNames = group.join(', ');
          res.write(`\nNumber of students in ${field}: ${group.length}. List: ${studentNames}`);
        }
        res.end();
      })
      .catch((error) => {
        console.log(error);
        res.end();
      });
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;
