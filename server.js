const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-type' : 'text/plain'});
  res.end("hello world!")
})

server.listen(3030, () => {
  console.log(`http:localhost:3030`)
})