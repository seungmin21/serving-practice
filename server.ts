import * as http from "http";

const server = http.createServer((req: http.IncomingMessage, res : http.ServerResponse) => {
  res.writeHead(200, { 'Content-Type' : 'text/plain'});
  res.end('Hello world!');
})

server.listen(3000, () => {
  console.log(`http://localhost:3000`);
});



