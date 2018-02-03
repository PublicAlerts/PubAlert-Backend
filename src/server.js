'use strict';

const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'))
app.use(require('./router/alerts-route.js'));


let usePort = process.env.PORT || 3000;

module.exports = app;
