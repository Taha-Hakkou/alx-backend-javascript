#!/usr/bin/node
// Reads a csv database asynchronously
import fs from 'fs';

const readDatabase = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
    }
    const studentGroups = {};
    if (data) {
      const students = data.toString('utf-8').trim().split('\n');
      for (const student of students.slice(1)) {
        const studentRecord = student.split(',');
        const field = studentRecord[studentRecord.length - 1];
        if (!Object.keys(studentGroups).includes(field)) {
          studentGroups[field] = [];
        }
        studentGroups[field].push(studentRecord[0]);
      }
    }
    return studentGroups;
  });
});

module.exports = readDatabase;
