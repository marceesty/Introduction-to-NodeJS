const http = require('http');
const fs = require('fs');


http.createServer(function (req, res) {
  fs.readFile('./home.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8000);

http.createServer(function (req, res) {
    fs.readFile('./about.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  }).listen(8000);
  
  http.createServer(function (req, res) {
    fs.readFile('./contact.html', function(err, data) {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  }).listen(8000);
  