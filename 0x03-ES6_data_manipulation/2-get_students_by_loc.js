export default function getStudentsByLocation(listStudents, city) {
  return listStudents.filter((x) => x.location === city);
}
