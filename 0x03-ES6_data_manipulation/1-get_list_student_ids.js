export default function getListStudentIds(listStudents) {
  if (!Array.isArray(listStudents)) { return []; }
  return listStudents.map((x) => x.id);
}
