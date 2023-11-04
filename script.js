// Required dependencies
const http = require('http');
const request = require('request');

// Create an HTTP server
const server = http.createServer((clientReq, clientRes) => {
  const url = clientReq.url;
  const options = {
    url: url,
    method: clientReq.method,
    headers: clientReq.headers,
  };

  // Send the client request to the target server
  request(options, (error, targetRes, targetBody) => {
    if (!error && targetRes.statusCode === 200) {
      clientRes.writeHead(targetRes.statusCode, targetRes.headers);
      clientRes.end(targetBody);
    } else {
      // Handle errors or other responses as needed
      clientRes.writeHead(500);
      clientRes.end('Proxy error');
    }
  });
});

// Start the server
const port = 3000;
server.listen(port, () => {
  console.log(`Proxy server is running on port ${port}`);
});