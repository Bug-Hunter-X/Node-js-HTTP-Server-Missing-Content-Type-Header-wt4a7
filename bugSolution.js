const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200, {
    'Content-Type': 'text/plain'
  });
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080); 