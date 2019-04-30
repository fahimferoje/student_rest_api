var express = require('Express');
var app = express();

var privateRoutes = require('./privateRoute.js');
//var publicRoutes = require('./publicRoute.js');

//both index.js and things.js should be in same directory
app.use('/private', privateRoutes);
//app.use('/public', publicRoutes);

app.listen(3000);