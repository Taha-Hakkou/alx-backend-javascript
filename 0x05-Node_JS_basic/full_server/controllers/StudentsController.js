#!/usr/bin/node
// StudentsController
import readDatabase from '../utils';

class StudentsController {
  static getAllStudents(request, response) {
    const path = = process.argv.length > 2 ? process.argv[2] : '';
    readDatabase(path)
      .then((studentGroups) => {
	response.status(200);
        response.write('This is the list of our students');
        for (const [field, group] of Object.entries(studentGroups)) {
          const studentNames = group.join(', ');
          response.write(`\nNumber of students in ${field}: ${group.length}. List: ${studentNames}`);
        }
	response.send();
      })
      .catch((error) => {
        response.status(500);
	response.send(error.message);
      });
  }

  static getAllStudentsByMajor(request, response) {
    const path = = process.argv.length > 2 ? process.argv[2] : '';
    const {major} = request.params;
    if (!['CS', 'SWE'].includes(major)) {
      response.status(500);
      response.send('Major parameter must be CS or SWE');
    }
    readDatabase(path)
      .then((studentGroups) => {
        const group = Object.keys(studentGroups).includes(major) ? studentGroups[major] : [];
	const resText = `List: ${group.join(', ')}`;
	response.status(200).send(resText);
      })
      .catch((error) => {
        response.status(500);
	response.send(error.message);
      });
    
  }
}

export default StudentsController;
module.exports = StudentsController;
