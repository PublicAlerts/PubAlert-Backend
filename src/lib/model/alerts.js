'use strict';

const mongoose = require('mongoose');

const alertsSchema = mongoose.Schema({
  userid: {type: String},
  eventName: {type: String},
  eventInfo: {type: String},
  eventLocation: {type: String},
  eventType: {type: String},
  entryDate: {type: Date, default: Date.now},
});

module.exports = mongoose.model('alert', alertsSchema);

// echo '{"userid":"Max", "eventName":"concert", "eventInfo":"very nice event", "eventLocation":"Tukwila"}' | http POST http://localhost:3000/api/alerts

//http GET http://localhost:3000/api/alerts
