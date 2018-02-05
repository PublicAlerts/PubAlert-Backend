'use strict';

const express = require('express');
const app = express();
const morgan = require('morgan');

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

let usePort = process.env.PORT || 3000;

app.listen(usePort, () => {
  console.log('__SERVER_UP__', usePort)
})

// Connect to the db on mlab
mongoose.connect('mongodb://passdb:FettyWap1738yeah@ds225078.mlab.com:25078/passdbmlab', function(err, db) {
  if(!err) {
    console.log('We are connected to mongo');
  }
});

app.use(morgan('dev'))
app.use(require('./router/alerts-route.js'));
app.use(require('./error-handle.js'));



module.exports = app;
