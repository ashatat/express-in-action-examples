const express = require("express");
const path = require("path");
const logger = require("morgan");

const app = express();

app.use(logger('short'));

app.use(express.static(path.join(__dirname, 'static'), { redirect: false }));

app.use((req, res) => {
  res.status(404);
  res.send("File not found!");
});

app.listen(3000, function() {
  console.log("App started on port 3000");
});
