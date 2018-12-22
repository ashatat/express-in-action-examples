const express = require('express');
const http = require('http');

const app = express();

app.use((req, res, next) => {
  console.log('In comes a '+ req.method + ' to ' + req.url);
  next();
});

app.use((req, res) => {
  console.log('in comes a request to: ' + req.url);
  res.end('Hello, world!');
});

http.createServer(app).listen(3000);

