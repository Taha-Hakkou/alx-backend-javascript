#!/usr/bin/node
// Defines the app routes
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';

const routesMapper = (app) => {
  app.get('/', AppController.getHomepage);
  app.get('/students', StudentsController.getAllStudents);
  app.get('/students/:major', StudentsController.getAllStudentsByMajor);
}

export default routesMapper;
module.exports = routesMapper;
