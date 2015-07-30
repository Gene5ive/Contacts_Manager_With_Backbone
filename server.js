// Module dependencies
var application_root = __dirname,
  express = require('express'), //Web framework
  path = require('path'), //Utilities for dealing with the file paths
  mogoose = require('mongoose'); //MongoDB integration

//Create server
var app = express();

//Start server
app.listen(4700);

//Routes
app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/index.html');
});
