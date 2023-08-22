fs = require('fs')
function countStudents(fil) {
   try {
    const data = fs.readFileSync(fil, 'utf-8')
    fields = data.split('\n').filter(Boolean)
    fields.shift()
    // console.log(fields)
    let students = {}
    fields.forEach(line => {
        let curr = line.split(',').filter(Boolean)
        let fi = curr[3]
        if (Object.keys(students).includes(fi)) {
            students[fi].push(curr[0])
        }
        else {
            students[fi] = [curr[0]]
        }
    });
    console.log(`Number of students: ${fields.length}`)
    Object.keys(students).forEach(key => {
        console.log(`Number of students in ${key}: ${students[key].length}. List: ${students[key].join(', ')}`)
    })
   } catch (err) {
    console.error(`Cannot load the database`);
  }
}
module.exports = countStudents
