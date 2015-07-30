// Module dependencies
var application_root = __dirname,
  express = require('express'), //Web framework
  path = require('path'), //Utilities for dealing with the file paths
  mogoose = require('mongoose'); //MongoDB integration

//Create server
var app = express();

//Configure server
// app.configure(function() {
//   app.use(express.bodyParser()); //Parses request body and populates req.body
//   app.use(express.methodOverride()); //Checks req.body for HTTP method overrides
//   app.use(app.router); //Perform route lookup basedon url and HTTP method
//   app.use(express.static(path.join(application_root, "public"))); //Where to serve static content
//   app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); //Show all error in development
// });

//Start server
app.listen(4700, function() {
  // console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
