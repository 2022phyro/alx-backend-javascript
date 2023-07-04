export default function cleanSet(set, startString) {
  const temp = [...set].filter((mem) => mem.startsWith(startString));
  const result = temp.map((item) => item.slice(startString.length)).join('-');
  return result;
}
