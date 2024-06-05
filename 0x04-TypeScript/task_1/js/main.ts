/*********************** 1 ***********************/

interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

/*
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};
console.log(teacher3);
// should print
// Object
// contract: false
// firstName: "John"
// fullTimeEmployee: false
// lastName: "Doe"
// location: "London"
*/

/************************ 2 ************************/

interface Directors extends Teacher {
  numberOfReports: number;
}

/*
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);
// should print
// Object
// firstName: "John"
// fullTimeEmployee: true
// lastName: "Doe"
// location: "London"
// numberOfReports: 17
*/

/************************ 3 *************************/

const printTeacher: printTeacherFunction = function(firstName: string, lastName: string) {
  return `${firstName.charAt(0)}. ${lastName}`;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

/*
console.log(printTeacher('John', 'Doe'));
// J. Doe
*/

/************************* 4 ************************/

interface StudentInterface {
  firstName: string;
  lastName: string;
}

interface StudentConstructorInterface {
  (firstName: string, lastName: string): StudentClass;
}

class StudentClass implements StudentInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string): StudentConstructorInterface {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
}

/*
const student = new StudentClass('John', 'Doe');
console.log(student.workOnHomework());
console.log(student.displayName());
*/
