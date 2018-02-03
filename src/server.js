'use strict';

const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
let MongoClient = require('mongodb').MongoClient;

app.use(morgan('dev'))
app.use(require('./router/alerts-route.js'));





module.exports = app;
