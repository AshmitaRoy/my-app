//require is a built-in Node.JS function 
var cookieParser = require('cookie-parser');
var express = require('express');
var logger = require('morgan');
var path = require('path');
var cors = require('cors');

//loading the router paths in the app:
var userProfilesRouter = require('./routes/userprofiles');
var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

//can comment this line out later if serve static files from EB directly
app.use(express.static(path.join(__dirname, 'public')));

//loading the router modules in the app:
app.use('/api/userprofiles', userProfilesRouter);

module.exports = app;
