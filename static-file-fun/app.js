var express = require("express");
var path = require("path");
var fs = require("fs");

const app = express();

app.use(function(req, res, next) {
  console.log("Request IP: " + req.url);
  console.log("Request date: " + new Date());
});

app.listen(3000, function() {
  console.log("App started on port 3000");
});
