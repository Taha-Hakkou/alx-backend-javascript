#!/usr/bin/node
// StudentsController
import readDatabase from 'utils';

class StudentsController {
  static getAllStudents(request, response) {
    response.statusCode(200);
    const list = readDatabase();
  }

  static getAllStudentsByMajor(request, response) {
    response.statusCode(200);
  }
}

export default StudentsController;
