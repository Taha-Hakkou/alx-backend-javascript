/********************** 5 *********************/

interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

class Director implements DirectorInterface {
  workFromHome: () => 'Working from home';
  getCoffeeBreak: () => 'Getting a coffee break';
  workDirectorTasks: () => 'Getting to director tasks';
}

class Teacher implements TeacherInterface {
  workFromHome: () => 'Cannot work from home';
  getCoffeeBreak: () => 'Cannot have a break';
  workTeacherTasks: () => 'Getting to work';
}

function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

/*
console.log(createEmployee(200));
// Teacher
console.log(createEmployee(1000));
// Director
console.log(createEmployee('$500'));
// Director
*/

/************************* 6 *************************/

function isDirector(employee: any): boolean {
  return employee instanceof Director;
}

function executeWork(employee: Director | Teacher) {
  if (employee instanceof Director) workDirectorTasks();
  if (employee instanceof Teacher) workTeacherTasks();
}

executeWork(createEmployee(200));
// Getting to work
executeWork(createEmployee(1000));
// Getting to director task

/************************* 7 ************************/
/*
type Subjects = 'Math' | 'History';

function teachClass(todayClass) {
  if (todayClass === 'Math') return 'Teaching Math';
  if (todayClass === 'History') return 'Teaching History';
}
*/
/*
teachClass('Math');
// Teaching Math
teachClass('History');
// Teaching History
*/
