export default function iterateThroughObject (reportWithIterator) {
  const resultList = [];
  for (const iter of reportWithIterator) {
    resultList.push(iter);
  }
  return resultList.join(' | ');
}
