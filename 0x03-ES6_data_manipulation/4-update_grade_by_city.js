export default function updateStudentGradeByCity(list, city, newGrades) {
  const result = list.filter((item) => {
    if (item.location === city) {
      return true;
    }
    return false;
  }).map((stud) => {
    const student = { ...stud };
    student.grade = 'N/A';
    newGrades.forEach((part) => {
      if (part.studentId === student.id) {
        student.grade = part.grade;
      }
    });
    return student;
  });
  return result;
}
