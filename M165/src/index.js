const http = require('http');
let mongoose = require('mongoose');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

mongoose.connect("mongodb://root:root@localhost:27017/mydb")
const mongodb = mongoose.connection

mongodb.on('error', (error) => console.error(error))
mongodb.once('open', () => console.log("Connected to DB "))

server.listen(port, hostname, () => {
  console.log(`Server running at http://localhost:3000/`);
});
