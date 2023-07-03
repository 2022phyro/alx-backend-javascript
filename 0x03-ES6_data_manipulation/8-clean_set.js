export default function cleanSet(set, startString) {
  if (startString === '') {
    return '';
  }
  const workArray = Array.from(set);
  const result = workArray.filter((mem) => mem.startsWith(startString))
    .map((item) => item.slice(3)).join('-');
  return result;
}
