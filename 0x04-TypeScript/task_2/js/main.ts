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
  workFromHome = () => 'Working from home';
  getCoffeeBreak = () => 'Getting a coffee break';
  workDirectorTasks = () => 'Getting to director tasks';
}

class Teacher implements TeacherInterface {
  workFromHome = () => 'Cannot work from home';
  getCoffeeBreak = () => 'Cannot have a break';
  workTeacherTasks = () => 'Getting to work';
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

function isDirector(employee: Director | Teacher): boolean {
  return employee instanceof Director;
}

function executeWork(employee: Director | Teacher): void {
  if (employee instanceof Director) {
    employee.workDirectorTasks();
  } else {
    employee.workTeacherTasks();
  }
}

/*
console.log(executeWork(createEmployee(200)));
// Getting to work
console.log(executeWork(createEmployee(1000)));
// Getting to director task
*/

/************************* 7 ************************/

type Subjects = 'Math' | 'History';

function teachClass(todayClass: Subjects) {
  if (todayClass === 'Math') return 'Teaching Math';
  if (todayClass === 'History') return 'Teaching History';
}

/*
console.log(teachClass('Math'));
// Teaching Math
console.log(teachClass('History'));
// Teaching History
*/
