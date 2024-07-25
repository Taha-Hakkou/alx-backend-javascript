#!/usr/bin/node
// recreates the HTTP server using Express module
const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;

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

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
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
      res.send();
    })
    .catch((error) => {
      res.send(error.toString());
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;
