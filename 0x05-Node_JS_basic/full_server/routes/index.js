#!/usr/bin/node
// Defines the app routes
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';
import app from '../server';

const router = app.Router();

router.get('/', AppController.getHomepage);

router.get('/students', StudentsController.getAllStudents);

router.get('/students/:major', StudentsController.getAllStudentsByMajor);

export default router;
