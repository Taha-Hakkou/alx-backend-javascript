export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  const gradedStudents = listStudents.filter((student) => student.location === city);
  gradedStudents.forEach((student) => {
    const newGrade = newGrades.find((x) => x.studentId === student.id);
    student.grade = newGrade ? newGrade.grade : 'N/A';
  });
  return gradedStudents;
}
