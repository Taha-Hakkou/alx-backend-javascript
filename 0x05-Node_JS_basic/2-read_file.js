#!/usr/bin/node
// Reads csv database Synchronously
const fs = require('fs');

const countStudents = (path) => {
  if (!fs.existsSync(path) || !fs.statSync(path).isFile()) {
    throw new Error('Cannot load the database');
  }
  const data = fs.readFileSync(path, 'utf8');
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
};

module.exports = countStudents;
