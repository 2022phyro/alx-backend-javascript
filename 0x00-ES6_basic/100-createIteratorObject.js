export default function createIteratorObject(report) {
  return {
    * [Symbol.iterator]() {
      for (const mem of Object.values(report.allEmployees)) {
        for (const employee of mem) {
          yield employee;
        }
      }
    },
  };
}
