export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  const gradedStudents = listStudents.filter(
    (student) => student.location === city,
  );
  gradedStudents.forEach((student) => {
    let grade = 'N/A';
    for (const newGrade of newGrades) {
      if (newGrade
        && newGrade.studentId === student.id
        && newGrade.grade) {
        grade = newGrade.grade;
      }
    }
    // eslint-disable-next-line no-param-reassign
    student.grade = grade;
  });
  return gradedStudents;
}
