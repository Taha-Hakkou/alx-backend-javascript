export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  const cityStudents = listStudents.filter(
    (student) => student.location === city,
  );
  return cityStudents.map((student) => {
    for (const gradeInfo of newGrades) {
      if (gradeInfo.studentId === student.id) {
        // eslint-disable-next-line no-param-reassign
        student.grade = gradeInfo.grade;
      }
    }
    // eslint-disable-next-line no-param-reassign
    if (!student.grade) student.grade = 'N/A';
    return student;
  });
}
