export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  const gradedStudents = listStudents.filter(
    (student) => student.location === city,
  );
  gradedStudents.forEach((student) => {
    const newGrade = newGrades.find(
      (x) => x.studentId === student.id,
    );
    // eslint-disable-next-line no-param-reassign
    student.grade = newGrade ? newGrade.grade : 'N/A';
  });
  return gradedStudents;
}
