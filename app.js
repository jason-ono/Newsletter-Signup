// suppress warning
// jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();

app.use(express.static("public"));

app.get("/", function(req, res) {
  // the index.html in our directry
  res.sendFile(__dirname + "/signup.html");
});

app.listen(3000, function(){
  console.log("started at 3000");
});
