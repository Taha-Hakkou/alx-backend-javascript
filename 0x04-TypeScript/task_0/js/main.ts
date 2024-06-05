interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Sylvain',
  lastName: 'Barbier',
  age: 37,
  location: 'Paris',
};
const student2: Student = {
  firstName: 'Mike',
  lastName: 'Tyson',
  age: 49,
  location: 'Los Angelos',
};
const studentsList: Student[] = [student1, student2];

const table: string[][] = studentsList.map(
  (student) => [student.firstName, student.location]
);
console.log(table);
