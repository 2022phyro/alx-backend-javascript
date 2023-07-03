export default function hasValuesFromArray(set, list) {
  return list.every((elem) => set.has(elem));
}
