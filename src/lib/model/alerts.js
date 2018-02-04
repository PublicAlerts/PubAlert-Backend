'use strict';

const mongoose = require('mongoose');

const alertsSchema = mongoose.Schema({
  userid: {type: String},
  eventName: {type: String},
  eventInfo: {type: String},
  eventLocation: {type: String},
  entryDate: {type: Date, default: Date.now},
});


module.exports = mongoose.model('alert', alertsSchema);
