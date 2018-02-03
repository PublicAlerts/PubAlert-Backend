'use strict';

const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
let MongoClient = require('mongodb').MongoClient;

app.use(morgan('dev'))
app.use(require('./router/alerts-route.js'));

let usePort = process.env.PORT || 3000;

app.listen(usePort, () => {
  console.log('__SERVER_UP__', usePort)
})

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/passdb", function(err, db) {
  if(!err) {
    console.log("We are connected to Mongo");
  }
});



module.exports = app;
