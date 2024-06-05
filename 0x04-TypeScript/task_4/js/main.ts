export const cpp: Subjects.Cpp = new Subjects.Cpp();
export const java: Subjects.Java = new Subjects.Java();
export const react: Subjects.React = new Subjects.React();

export const cTeacher: Subjects.Teacher = {
  firstName: 'Dennis',
  lastName: 'Ritchie',
  experienceTeachingC: 10,
};

// Cpp subject
console.log('C++');
cpp.setTeacher(cTeacher);
console.log(getRequirements());
console.log(getAvailableTeacher());

// Java subject
console.log('Java');
java.setTeacher(cTeacher);
console.log(getRequirements());
console.log(getAvailableTeacher());

// React subject
console.log('React');
react.setTeacher(cTeacher);
console.log(getRequirements());
console.log(getAvailableTeacher());
