const express = require('express');
const http = require('http');
const logger = require('morgan');

const app = express();

app.use(logger('short'));

app.use((req, res, next) => {
  console.log('aaaaaaaaaaaaa',req.ip)
  if (req.ip === '::ffff:127.0.0.1') {
    res.status(401).send('Not Allowed');
  } else {
    next();
  }
});

app.use((req, res, next) => {
  const minute = (new Date()).getMinutes();
  if (minute%2 === 0) {
    next();
  } else {
    res.statusCode = 403;
    res.end('Not authorized.');
  }
});

app.use((req, res) => {
  console.log('in comes a request to: ' + req.url);
  res.end('Hello, world!');
});

http.createServer(app).listen(3000);

