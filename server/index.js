const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const db = require('./db')

// morgan logger
app.use(morgan('dev'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// static middleware
app.use(express.static(path.join(__dirname, '../public')));

// Handle API requests
app.use('/api', require('./api'));

// send index.html for any other requests that do not match any API route
app.use('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

//handle 500 errors
app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

module.exports = app;
