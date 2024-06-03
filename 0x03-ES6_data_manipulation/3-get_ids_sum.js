export default function getStudentIdsSum(listStudents) {
  return listStudents.reduce((sum, x) => sum + x.id, 0);
}
