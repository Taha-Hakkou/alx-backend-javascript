#!/usr/bin/node
// Reads a csv database Asynchronously
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
      console.log(`Number of students: ${numberOfStudents}`);
      for (const [field, group] of Object.entries(studentGroups)) {
        const studentNames = group.join(', ');
        console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
      }
    }
    resolve(true);
  });
});

module.exports = countStudents;
