//server big

'use strict';

const express = require('express');
const app = express();
const morgan = require('morgan');

const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
let MongoClient = require('mongodb').MongoClient;

let usePort = process.env.PORT || 3000;

app.listen(usePort, () => {
  console.log('__SERVER_UP__', usePort)
})

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/passdb1", function(err, db) {
  if(!err) {
    console.log("We are connected to mongo");
  }
});


app.use(morgan('dev'))
app.use(require('./router/alerts-route.js'));

//testing
app.use((req,res) => {
  console.log('wth?');
  res.send("Hello world!");
});
//testing end

app.use((err, req, res, next) => {

  console.error(err.message.toLowerCase());

  if(err.message.includes('validation failed'))
    return res.sendStatus(400);

  if(err.message.includes('unauthorized'))
    return res.sendStatus(400);

  if(err.message.includes('jwt malformed'))
    return res.sendStatus(400);

  if(err.message.includes('invalid token'))
    return res.sendStatus(401);

  if(err.message.includes('objectid failed'))
    return res.sendStatus(404);

  if(err.message.includes('duplicate key'))
    return res.sendStatus(409);

  res.sendStatus(500);
});

// export const stop = () => {
//   return new Promise((resolve, reject) => {
//     if(!state.isOn)
//     return reject(new Error('USAGE ERROR: the state is off'))
//     return mongo.stop()
//     .then(() => {
//       state.http.close(() => {
//         console.log('__SERVER_DOWN__')
//         state.isOn = false
//         state.http = null
//         resolve()
//       })
//     })
//     .catch(reject)
//   })
// }


module.exports = app;
