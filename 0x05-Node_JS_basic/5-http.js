const http = require('http');
const hostname = '127.0.0.1';
const port = 1245;
const app = http.createServer()
const FILE = process.argv[2]
const fs = require('fs/promises')

function countStudents(fil) {
    return new Promise((resolve, reject) => {
        // if (!fill) {
        //     reject(new Error("Cannot load from database"))
        // }
     fs.readFile(fil, 'utf-8')
     .then((data) => {
        result = []
         fields = data.split('\n').filter(Boolean)
         fields.shift()
         let students = {}
         fields.forEach(line => {
             let curr = line.split(',').filter(Boolean)
             let fi = curr[3]
             if (Object.keys(students).includes(fi)) {
                 students[fi]['names'].push(curr[0])
                 students[fi]['len']++
             }
             else {
                 students[fi] = {
                     'names': [curr[0]],
                     'len': 1
                 }
             }
         });
         result.push(`Number of students: ${fields.length}`)
         Object.keys(students).forEach(key => {
             result.push(`Number of students in ${key}: ${students[key]['len']}. List: ${students[key]['names'].join(', ')}`)
         })
         resolve(result.join('\n'))
     })
     .catch((error) => {
         reject('Cannot load the database');
       })
     })
 }

 const ROUTES = [
    {
        route: '/',
        handler(_, res) {
          const responseText = 'Hello Holberton School!';
    
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', responseText.length);
          res.statusCode = 200;
          res.write(Buffer.from(responseText));
        },
      },
      {
        route: '/students',
        handler(_, res) {
          const responseParts = ['This is the list of our students'];
    
          countStudents(FILE)
            .then((report) => {
              responseParts.push(report);
              const responseText = responseParts.join('\n');
              res.setHeader('Content-Type', 'text/plain');
              res.setHeader('Content-Length', responseText.length);
              res.statusCode = 200;
              res.write(Buffer.from(responseText));
            })
            .catch((err) => {
              responseParts.push(err.toString());
              const responseText = responseParts.join('\n');
              res.setHeader('Content-Type', 'text/plain');
              res.setHeader('Content-Length', responseText.length);
              res.statusCode = 200;
              res.write(Buffer.from(responseText));
            });
        },
      },
 ]
app.on('request', (req, res) => {
    for (const routeHandler of ROUTES) {
      if (routeHandler.route === req.url) {
        routeHandler.handler(req, res);
        break;
      }
    }
  });
  
  app.listen(port, hostname, () => {
    process.stdout.write(`Server listening at -> http://${hostname}:${port}\n`);
  });
module.exports = app
