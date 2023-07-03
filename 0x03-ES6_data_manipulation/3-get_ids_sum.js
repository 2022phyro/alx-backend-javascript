export default function getStudentIdsSum(list) {
  const result = list.reduce((initial, { id, value }) => initial + id, 0);
  return result;
}
